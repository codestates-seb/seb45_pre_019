package com.server.global.security;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

	private final JwtProvider jwtProvider;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.httpBasic().disable()
			.csrf().disable()
			.cors(c -> {
					CorsConfigurationSource source = request -> {
						CorsConfiguration config = new CorsConfiguration();
						config.setAllowedOrigins(
							List.of("http://localhost:3000", "http://stackoverflow-clone.s3-website.ap-northeast-2.amazonaws.com") // 프론트엔드 개발 서버 주소
						);
						config.setAllowedMethods(
							List.of("GET", "POST", "PUT", "DELETE", "PATCH")
						);
						config.setAllowedHeaders(List.of("*"));
						config.setAllowCredentials(true);
						config.setExposedHeaders(List.of("Authorization"));
						return config;
					};
					c.configurationSource(source);
				}
			)
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.authorizeRequests()
			// 로그인 회원가입은 풀고, 질문 추가/수정/삭제는 로그인한 사용자만 가능하게
			.antMatchers("/account/login", "/account/signup").permitAll()
			.antMatchers(HttpMethod.GET).permitAll()
			.anyRequest().hasRole("USER")
			.and()
			.addFilterBefore(new JwtAuthenticationFilter(jwtProvider), UsernamePasswordAuthenticationFilter.class)
			.exceptionHandling()
			.accessDeniedHandler((request, response, accessDeniedException) -> {
				// 권한 문제가 발생했을 때 이 부분을 호출한다.
				response.setStatus(403);
				response.setCharacterEncoding("utf-8");
				response.setContentType("text/html; charset=UTF-8");
				response.getWriter().write("권한이 없는 사용자입니다.");
			})
			.authenticationEntryPoint((request, response, authException) -> {
				// 인증문제가 발생했을 때 이 부분을 호출한다.
				response.setStatus(401);
				response.setCharacterEncoding("utf-8");
				response.setContentType("text/html; charset=UTF-8");
				response.getWriter().write("인증되지 않은 사용자입니다.");
			});

		return http.build();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}
}

package com.server.global.security.configure;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

	private final JwtT
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
			.headers().frameOptions().sameOrigin()
			.and()
			.csrf().disable()
			.formLogin()
			.loginPage("/account/login-page")
			.loginProcessingUrl("/account/login") // 프론트측 로그인 버튼 눌렀을 때 실행될 컨트롤러
			.failureUrl("/account/login-page?error")
			.and()
			.logout()
			.logoutUrl("/account/logout")
			.logoutSuccessUrl("/")
			.and()
			.exceptionHandling().accessDeniedPage("/account/login-page")
			.and()
			.authorizeHttpRequests(authorization -> authorization
				.antMatchers("/account/signup").permitAll()
				.antMatchers("/questions/post").authenticated()
				.antMatchers("/questions/").authenticated()
				.antMatchers("/questions/**").permitAll()
				.anyRequest().permitAll()
			);

		return httpSecurity.build();
	}

	// 패스워드 암호화를 위한 패스워드 인코더 구현 객체 생성
	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}
}

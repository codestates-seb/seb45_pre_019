package com.server.global.security.configure;

import static org.springframework.security.config.Customizer.*;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SecurityConfiguration {

	// @Bean
	// public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
	// 	httpSecurity
	// 		.headers().frameOptions().sameOrigin()
	// 		.and()
	// 		.csrf().disable()
	// 		// .cors(withDefaults())
	// 		.formLogin().disable()
	// 		.httpBasic().disable()
	// 		.authorizeHttpRequests(authorization -> authorization
	// 				.anyRequest().permitAll()
	// 			// .antMatchers("/account/signup").permitAll()
	// 			// .antMatchers("/questions/post").authenticated()
	// 			// .antMatchers("/questions/").authenticated()
	// 			// .antMatchers("/questions/**").permitAll()
	// 			// .anyRequest().permitAll()
	// 		);
	//
	// 	return httpSecurity.build();
	// }

	// CORS 정책 설정
	// @Bean
	// CorsConfigurationSource corsConfigurationSource() {
	// 	CorsConfiguration corsConfiguration = new CorsConfiguration();
	// 	// 모든 출처에 대해 통신 허용 (나중에 수정하기)
	// 	corsConfiguration.setAllowedOrigins(Arrays.asList("*"));
	// 	// 지정 메서드에 대한 통신도 허용
	// 	corsConfiguration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
	//
	// 	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	// 	// CORS 정책에 위에서 설정한 옵션들 모든 URL에 적용
	// 	source.registerCorsConfiguration("/**", corsConfiguration);
	//
	// 	return source;
	// }

	// 패스워드 암호화를 위한 패스워드 인코더 구현 객체 생성
	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}
}

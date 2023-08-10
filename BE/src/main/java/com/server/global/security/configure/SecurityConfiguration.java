package com.server.global.security.configure;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
			.csrf().disable()
			.formLogin()
			.loginPage("/account/login-page")
			.loginProcessingUrl("/account/login") // 프론트측 로그인 버튼 눌렀을 때 실행될 컨트롤러
			.failureUrl("/account/login-page?error")
			.and()
			.authorizeHttpRequests()
			.anyRequest().permitAll();
			// .antMatchers("/account/signup").permitAll()
			// .antMatchers("/questions/").permitAll()
			// .anyRequest()
			// .authenticated()

		return httpSecurity.build();
	}
}

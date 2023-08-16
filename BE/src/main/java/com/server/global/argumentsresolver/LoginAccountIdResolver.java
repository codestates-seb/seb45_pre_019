package com.server.global.argumentsresolver;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;


public class LoginAccountIdResolver {
	public static String getAccountId() {
		String email = SecurityContextHolder.getContext().getAuthentication().getName();
		return email;
	}

}

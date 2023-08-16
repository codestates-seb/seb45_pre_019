package com.server.global.argumentsresolver;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.server.global.security.CustomUserDetails;

public class LoginAccountIdResolver {
	public static Long getAccountId() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		CustomUserDetails customUserDetails = (CustomUserDetails) principal;
		return customUserDetails.getAccountId();
	}

}

package com.server.global.security;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.server.domain.account.entity.Account;

public class CustomUserDetails implements UserDetails {

	private final Account account;

	public CustomUserDetails(Account account) {
		this.account = account;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return account.getRoles().stream().map(o -> new SimpleGrantedAuthority(
			o.getName()
		)).collect(Collectors.toList());
	}

	public Long getAccountId() {
		return account.getAccountId();
	}

	@Override
	public String getPassword() {
		return account.getAccountPassword();
	}

	@Override
	public String getUsername() {
		return account.getAccountEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}

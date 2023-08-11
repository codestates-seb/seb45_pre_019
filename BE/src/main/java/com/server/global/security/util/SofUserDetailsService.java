package com.server.global.security.util;

import java.util.Collection;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import com.server.global.exception.advice.BusinessLogicException;
import com.server.global.exception.exceptionCode.ExceptionCode;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class SofUserDetailsService implements UserDetailsService {
	private final AccountRepository accountRepository;
	private final SofAuthorityUtils sofAuthorityUtils;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Account> optionalAccount = accountRepository.findByAccountEmail(username);
		Account account = optionalAccount.orElseThrow(() -> new BusinessLogicException(ExceptionCode.LOGIN_FAILURE));

		Collection<? extends GrantedAuthority> grantedAuthorities = sofAuthorityUtils.createAuthorities(account.getAccountEmail());

		return new User(account.getAccountEmail(), account.getAccountPassword(), grantedAuthorities);
	}
}

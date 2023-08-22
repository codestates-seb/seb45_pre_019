package com.server.domain.account.service;

import java.util.Collections;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.entity.Authority;
import com.server.domain.account.repository.AccountRepository;
import com.server.global.exception.advice.BusinessLogicException;
import com.server.global.exception.exceptionCode.ExceptionCode;
import com.server.global.security.JwtProvider;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountService {

	private final AccountRepository accountRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtProvider jwtProvider;

	// 회원가입
	public void signUp(Account account) {
		existAccount(account.getAccountEmail());

		Account newAccount = Account.builder()
				.accountName(account.getAccountName())
				.accountEmail(account.getAccountEmail())
				.accountPassword(passwordEncoder.encode(account.getAccountPassword()))
				.build();

		newAccount.setRoles(Collections.singletonList(Authority.builder().name("ROLE_USER").build()));

		accountRepository.save(newAccount);
	}

	public String login(Account account, HttpServletResponse response) throws Exception {
		Account findAccount = accountRepository.findByAccountEmail(account.getAccountEmail())
			.orElseThrow(() -> new BusinessLogicException(ExceptionCode.LOGIN_FAILURE));

		if (!passwordEncoder.matches(account.getAccountPassword(), findAccount.getAccountPassword())) {
			throw new BusinessLogicException(ExceptionCode.LOGIN_FAILURE);
		}

		return jwtProvider.createToken(findAccount.getAccountEmail(), findAccount.getRoles(), response);
	}

	// 회원조회
	public Account findAccount(Long accountId) {
		return accountRepository.findById(accountId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
	}

	// 이미 존재하는 회원인지 검증
	private void existAccount(String accountEmail) {
		Optional<Account> account = accountRepository.findByAccountEmail(accountEmail);

		if(account.isPresent()) {
			throw new BusinessLogicException(ExceptionCode.ACCOUNT_EXIST);
		}
	}
}

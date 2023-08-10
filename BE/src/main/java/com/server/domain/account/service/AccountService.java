package com.server.domain.account.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.repository.AccountRepository;
import com.server.global.exception.advice.BusinessLogicException;
import com.server.global.exception.exceptionCode.ExceptionCode;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {

	private final AccountRepository accountRepository;

	// 회원가입
	public void signUp(Account account) {
		existAccount(account.getAccountId());
		accountRepository.save(account);
	}

	// 회원조회
	public Account findAccount(Long accountId) {
		return accountRepository.findById(accountId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
	}

	// 이미 존재하는 회원인지 검증
	private void existAccount(Long accountId) {
		Optional<Account> account = accountRepository.findById(accountId);

		if(account.isPresent()) {
			throw new BusinessLogicException(ExceptionCode.NOT_FOUND);
		}
	}
}

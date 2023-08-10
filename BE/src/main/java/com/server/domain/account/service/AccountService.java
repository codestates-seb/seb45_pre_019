package com.server.domain.account.service;

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

	public void signUp(Account account) {
		existAccount(account.getAccountId());
		accountRepository.save(account);
	}

	private void existAccount(Long id) {
		accountRepository.findById(id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
	}
}

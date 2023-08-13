package com.server.domain.question.dto;

import com.server.domain.account.entity.Account;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionAccountResDto {

	private Long accountId;

	private String accountEmail;

	private String accountName;

	public QuestionAccountResDto(Account account) {
		this.accountId = account.getAccountId();
		this.accountEmail = account.getAccountEmail();
		this.accountName = account.getAccountName();
	}
}
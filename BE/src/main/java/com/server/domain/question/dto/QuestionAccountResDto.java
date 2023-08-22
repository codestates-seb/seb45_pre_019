package com.server.domain.question.dto;

import com.server.domain.account.entity.Account;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@ApiModel(value = "질문 작성 회원 정보 응답 형식")
public class QuestionAccountResDto {
	@ApiModelProperty(value = "회원 번호")
	private Long accountId;
	@ApiModelProperty(value = "회원 이메일")
	private String accountEmail;
	@ApiModelProperty(value = "닉네임")
	private String accountName;

	public QuestionAccountResDto(Account account) {
		this.accountId = account.getAccountId();
		this.accountEmail = account.getAccountEmail();
		this.accountName = account.getAccountName();
	}
}
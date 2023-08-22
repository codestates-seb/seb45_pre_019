package com.server.domain.account.dto;

import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AccountDto {
	@Getter
	@AllArgsConstructor
	@NoArgsConstructor
	@Setter
	@ApiModel(value = "회원가입 요청 형식")
	public static class SignUp {
		@NotNull
		@ApiModelProperty(value = "닉네임")
		private String accountName;
		@NotNull
		@ApiModelProperty(value = "이메일")
		private String accountEmail;
		@NotNull
		@ApiModelProperty(value = "패스워드")
		private String accountPassword;
	}

	@Getter
	@AllArgsConstructor
	@NoArgsConstructor
	@Setter
	@ApiModel(value = "로그인 요청 형식")
	public static class Login {
		@NotNull
		@ApiModelProperty(value = "이메일")
		private String accountEmail;
		@NotNull
		@ApiModelProperty(value = "패스워드")
		private String accountPassword;
	}
}

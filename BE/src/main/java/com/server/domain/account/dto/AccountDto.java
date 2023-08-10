package com.server.domain.account.dto;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AccountDto {
	@Getter
	@AllArgsConstructor
	@NoArgsConstructor
	@Setter
	public static class SignUp {
		@NotNull
		private String accountName;
		@NotNull
		private String accountEmail;
		@NotNull
		private String accountPassword;
	}
}

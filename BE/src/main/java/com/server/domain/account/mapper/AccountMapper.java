package com.server.domain.account.mapper;

import org.mapstruct.Mapper;

import com.server.domain.account.dto.AccountDto;
import com.server.domain.account.entity.Account;

@Mapper(componentModel = "spring")
public interface AccountMapper {
	Account signUpToAccount(AccountDto.SignUp signUp);
}

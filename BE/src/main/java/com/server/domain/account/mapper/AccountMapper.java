package com.server.domain.account.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.domain.account.dto.AccountDto;
import com.server.domain.account.entity.Account;

@Mapper(componentModel = "spring")
public interface AccountMapper {

	Account signUpDtoToAccount(AccountDto.SignUp signUp);
	Account loginDtoToAccount(AccountDto.Login login);
}

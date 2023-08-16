package com.server.domain.account.controller;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.domain.account.dto.AccountDto;
import com.server.domain.account.entity.Account;
import com.server.domain.account.mapper.AccountMapper;
import com.server.domain.account.service.AccountService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/account") //localhost:8080/account/signup
public class AccountController {

	private final AccountService accountService;
	private final AccountMapper accountMapper;

	@GetMapping("/test")
	public String test() {
		return "Login Test!";
	}
	@PostMapping("/signup")
	public ResponseEntity<HttpStatus> signUp(@Valid @RequestBody AccountDto.SignUp signUp) {
		accountService.signUp(accountMapper.signUpDtoToAccount(signUp));
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PostMapping(value = "/login")
	public ResponseEntity<String> login(@Valid @RequestBody AccountDto.Login login, HttpServletResponse response) throws Exception {
		String token = accountService.login(accountMapper.loginDtoToAccount(login), response);
		return new ResponseEntity<>(token, HttpStatus.OK);
	}
}

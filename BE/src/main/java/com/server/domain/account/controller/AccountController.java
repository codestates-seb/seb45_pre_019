package com.server.domain.account.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.domain.account.dto.AccountDto;
import com.server.domain.account.mapper.AccountMapper;
import com.server.domain.account.service.AccountService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/account")
public class AccountController {

	private final AccountService accountService;
	private final AccountMapper accountMapper;
	private PasswordEncoder passwordEncoder;
	@PostMapping("/signup")
	public ResponseEntity<HttpStatus> postSignUp(@Valid AccountDto.SignUp signUp) {

		signUp.setAccountPassword(passwordEncoder.encode(signUp.getAccountPassword()));
		accountService.signUp(accountMapper.signUpToAccount(signUp));

		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@GetMapping("/login-page")
	public String loginPage() {
		return "login";
	}

	@PostMapping("/login")
	public String login() {
		return "main";
	}
}

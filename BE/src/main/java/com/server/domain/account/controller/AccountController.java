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
import com.server.global.argumentsresolver.LoginAccountIdResolver;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/account")
@Api(tags = {"1. 회원 정보 관리"}, description = "사용자 인증 및 정보 제공 관련 서비스")
public class AccountController {

	private final AccountService accountService;
	private final AccountMapper accountMapper;

	@GetMapping("/test")
	@ApiOperation(value = "테스트", notes = "로그인 인증 테스트")
	public String test() {
		System.out.println(LoginAccountIdResolver.getAccountId());
		return "Login Test!!";
	}
	@PostMapping("/signup")
	@ApiOperation(value = "회원가입", notes = "새로운 회원 정보를 등록하는 API")
	@ApiResponses(
		{
			@ApiResponse(code = 400, message = "이미 회원가입된 이메일입니다."),
			@ApiResponse(code = 201, message = "CREATED")
		}
	)
	public ResponseEntity<HttpStatus> signUp(@Valid @RequestBody AccountDto.SignUp signUp) {
		accountService.signUp(accountMapper.signUpDtoToAccount(signUp));
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PostMapping(value = "/login")
	@ApiOperation(value = "로그인", notes = "로그인 요청을 보내 토큰을 전달 해주는 API")
	@ApiResponses(
		{
			@ApiResponse(code = 401, message = "이메일, 비밀번호가 틀렸습니다."),
			@ApiResponse(code = 200, message = "OK")
		}
	)
	public ResponseEntity<HttpStatus> login(@Valid @RequestBody AccountDto.Login login, HttpServletResponse response) throws Exception {
		accountService.login(accountMapper.loginDtoToAccount(login), response);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}

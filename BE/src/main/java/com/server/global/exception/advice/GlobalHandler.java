package com.server.global.exception.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.server.global.exception.dto.ErrorResponseDto;

@RestControllerAdvice
public class GlobalHandler {
	@ExceptionHandler
	public ResponseEntity<ErrorResponseDto> ExceptionHandler(Exception e) {
		ErrorResponseDto errorResponse = new ErrorResponseDto(400, "잘못된 요청입니다.");
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

	// 비즈니스 로직 예외
	@ExceptionHandler
	public ResponseEntity<ErrorResponseDto>  BusinessLogicExceptionHandler (BusinessLogicException e) {
		ErrorResponseDto errorResponse = new ErrorResponseDto(e.getExceptionCode().getStatus(), e.getExceptionCode().getMessage());

		return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(e.getExceptionCode().getStatus()));
	}
}
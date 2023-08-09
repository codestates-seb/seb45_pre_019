package com.server.global.exception.advice;

import com.server.global.exception.exceptionCode.ExceptionCode;

import lombok.Getter;

@Getter
public class BusinessLogicException extends RuntimeException {
	private ExceptionCode exceptionCode;

	public BusinessLogicException(ExceptionCode exceptionCode) {
		super(exceptionCode.getMessage());
		this.exceptionCode = exceptionCode;
	}
}

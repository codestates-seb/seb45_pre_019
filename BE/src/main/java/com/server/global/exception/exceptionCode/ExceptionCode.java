package com.server.global.exception.exceptionCode;

import lombok.Getter;

public enum ExceptionCode {
	NOT_FOUND(404, "요청하신 데이터를 찾을 수 없습니다."),
	NOT_FOUND_ACCOUNT(400, "회원정보를 찾을 수 없습니다."),
	ACCOUNT_EXIST(400, "이미 회원가입된 이메일입니다."),
	NOT_FOUND_QUESTION(400, "질문을 찾을 수 없습니다."),
	NON_ACCESS_MODIFY(400, "수정 권한이 없습니다."),
	NOT_FOUND_ANSWER(400, "답변을 찾을 수 없습니다."),
	ILLEGAL_VOTE(400, "잘못된 투표 요청입니다."),
	DUPLICATED_SELECT(400, "이미 채택된 답변이 있습니다"),
	ACCESS_TOKEN_EXPIRATION(400, "로그인이 필요한 기능입니다."),
	LOGIN_FAILURE(401, "이메일, 비밀번호가 틀렸습니다.");

	@Getter
	private int status;

	@Getter
	private String message;

	ExceptionCode(int status, String message) {
		this.status = status;
		this.message = message;
	}
}

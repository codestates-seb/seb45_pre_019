package com.server.global.argumentsresolver;

import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class LoginAccountArgumentResolver implements HandlerMethodArgumentResolver {

	@Override
	public boolean supportsParameter(MethodParameter parameter) {
		return parameter.hasParameterAnnotation(LoginAccountId.class); // @LoginAccountId가 컨트롤러에 있다면 무조건 요청을 허용하도록 하겠다
	}

	@Override
	public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
		NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
		return 1L; // 일단 인가를 거치지 않고 모든 요청에 대해 pk가 1L인 유저에 대한 요청이라고 처리, 인증/인가 부분 개발이 완료되면 리팩토링
	}

}

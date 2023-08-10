package com.server.domain.question.service;

import com.server.domain.question.entity.Question;
import com.server.domain.question.repository.QuestionRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class QuestionService {
	private final QuestionRepository questionRepository;
	//    private final AccountService accountService;

	public Question createQuestion(Question question) {
		//        accountService.findMember(question.getAccount.getAccountId()); 존재하는 회원인지 검증

		return questionRepository.save(question);
	}

}

package com.server.domain.question.service;

import java.util.List;
import java.util.Optional;
import com.server.domain.account.service.AccountService;
import com.server.domain.question.entity.Question;
import com.server.domain.question.repository.QuestionRepository;
import com.server.global.exception.advice.BusinessLogicException;
import com.server.global.exception.exceptionCode.ExceptionCode;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuestionService {
	private final QuestionRepository questionRepository;
	private final AccountService accountService;

	public Question createQuestion(Question question) {
		// 등록된 회원인지 확인
		Long loginAccountId = question.getAccount().getAccountId();
		accountService.findAccount(loginAccountId);

		return questionRepository.save(question);
	}

	public Question updateQuestion(Question question) {
		//등록된 회원인지 확인
		Long loginAccountId = question.getAccount().getAccountId();
		accountService.findAccount(loginAccountId);

		// 등록된 질문이 맞는지 검증
		Long questionId = question.getQuestionId();
		Question findQuestion = existsQuestion(questionId);

		// 수정 권한 확인 --> 질문을 등록한 아이디와 일치하는지
		verifyAccess(findQuestion, loginAccountId);

		Optional.ofNullable(question.getQuestionTitle()).ifPresent(title -> findQuestion.setQuestionTitle(title));
		Optional.ofNullable(question.getQuestionContent()).ifPresent(content -> findQuestion.setQuestionContent(content));

		 return questionRepository.save(findQuestion);

	}

	public Question findQuestion(long questionId) {
		return questionRepository.findByIdWithAll(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_QUESTION));
	}

	public List<Question> findQuestions(String keyword) {
		List<Question> questionList = questionRepository.findByQuestionTitleContaining(keyword);
		return questionList;
	}


	private Question existsQuestion(long questionId) { // 동록된 질문이 맞는지 검증
		return questionRepository.findById(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_QUESTION));
	}

	private void verifyAccess(Question question, Long accountId) { // 수정 권한 검증
		if(!accountId.equals(question.getAccount().getAccountId())) {
			throw  new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);
		}
	}

}

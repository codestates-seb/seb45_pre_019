package com.server.domain.answer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.server.domain.account.entity.Account;
import com.server.domain.account.service.AccountService;
import com.server.domain.answer.entity.Answer;
import com.server.domain.answer.repository.AnswerRepository;
import com.server.domain.question.entity.Question;
import com.server.domain.question.service.QuestionService;
import com.server.global.argumentsresolver.LoginAccountIdResolver;
import com.server.global.exception.advice.BusinessLogicException;
import com.server.global.exception.exceptionCode.ExceptionCode;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final QuestionService questionService;
	private final AccountService accountService;

	public Answer createAnswer(Answer answer) {
		Question findQuestion = questionService.verifiedExistsQuestion(answer.getQuestion().getQuestionId());
		answer.setQuestion(findQuestion);

		Account findAccount = accountService.findAccount(answer.getAccount().getAccountId());
		answer.setAccount(findAccount);

		return answerRepository.save(answer);
	}

	public Answer updateAnswer(Answer answer) {
		Long loginId = LoginAccountIdResolver.getAccountId();
		verifyAccess(answer, loginId);

		Optional.ofNullable(answer.getAnswerContent()).ifPresent(content -> answer.setAnswerContent(content));

		return answerRepository.save(answer);
	}

	public void deleteAnswer(Long answerId, Long accountId) {
		// 존재하는 답변인지 확인
		Answer findAnswer = verifiedExistsAnswer(answerId);
		Long authorId = findAnswer.getAccount().getAccountId();

		// 로그인 한 회원이 작성자인지 확인
		if(accountId == authorId) {
			answerRepository.delete(findAnswer);
		} else {
			throw new BusinessLogicException(ExceptionCode.NON_ACCESS_DELETE);
		}

	}

	public List<Answer> findAnswers(long questionId){
		return answerRepository.findAll(questionId);
	}

	private void verifyAccess(Answer answer, Long accountId) { // 수정 권한 검증
		if(!accountId.equals(answer.getAccount().getAccountId())) {
			throw new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);
		}
	}

	private Answer verifiedExistsAnswer(Long answerId) {
		return answerRepository.findById(answerId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_ANSWER));
	}
}

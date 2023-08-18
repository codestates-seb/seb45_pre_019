package com.server.domain.question.service;

import java.util.Optional;

import javax.transaction.Transactional;

import com.server.domain.account.service.AccountService;
import com.server.domain.question.entity.Question;
import com.server.domain.question.repository.QuestionRepository;
import com.server.global.exception.advice.BusinessLogicException;
import com.server.global.exception.exceptionCode.ExceptionCode;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
	private final QuestionRepository questionRepository;
	private final AccountService accountService;

	public Question createQuestion(Question question) {
		// 등록된 회원인지 확인
		 accountService.findAccount(question.getAccount().getAccountId());

		return questionRepository.save(question);
	}

	public Question updateQuestion(Question question) {
		//등록된 회원인지 확인
		Long loginAccountId = question.getAccount().getAccountId();
		accountService.findAccount(loginAccountId);

		// 등록된 질문이 맞는지 검증
		Long questionId = question.getQuestionId();
		Question findQuestion = verifiedExistsQuestion(questionId);

		// 수정 권한 확인 --> 질문을 등록한 아이디와 일치하는지
		verifyAccess(findQuestion, loginAccountId);

		Optional.ofNullable(question.getQuestionTitle()).ifPresent(title -> findQuestion.setQuestionTitle(title));
		Optional.ofNullable(question.getQuestionProblem()).ifPresent(problem -> findQuestion.setQuestionProblem(problem));
		Optional.ofNullable(question.getQuestionExpect()).ifPresent(expect -> findQuestion.setQuestionExpect(expect));
		Optional.ofNullable(question.getTags()).ifPresent(tags -> findQuestion.setTags(tags));

		 return questionRepository.save(findQuestion);

	}
	// 특정 질문 조회
	public Question findQuestion(Long questionId) {

		Question findQuestion = questionRepository.findByIdWithAll(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_QUESTION));
		findQuestion.addViews(findQuestion.getViews());

		return findQuestion;
	}


	public Page<Question> findQuestions(int page, String sort) {
		if(sort.equals("new")) {
			return questionRepository.findAll(PageRequest.of(page, 5, Sort.by("questionId").descending()));

		//받아온 정렬 기준이 조회수 순이면
		} else if(sort.equals("views")) {
			return questionRepository.findAll(PageRequest.of(page, 5, Sort.by("views").descending()));

		// 받아온 정렬 기준이 투표 순이면
		} else if(sort.equals("votes")){

				return questionRepository.findAll(PageRequest.of(page,5, Sort.by("voteCount").descending()));

		} else {

			throw new BusinessLogicException(ExceptionCode.NOT_FOUND);
		}

	}

	// 전체 조회 및 검색 조건으로 조회
	public Page<Question> searchQuestions(String title, String name, int page) {
		Page<Question> searchList = questionRepository.findByQuestionTitleContainingAndAccountAccountNameContaining(title, name,
														PageRequest.of(page, 5, Sort.by("questionId").descending()));

		return searchList;
	}

	public void deleteQuestion(Long questionId, Long accountId) {

		// 등록된 질문인지 확인
		Question findQuestion = verifiedExistsQuestion(questionId);
		Long authorId = findQuestion.getAccount().getAccountId();

		// 로그인 한 회원이 작성자이면
		if(accountId == authorId) {
			questionRepository.delete(findQuestion);
		} else {
			throw new BusinessLogicException(ExceptionCode.NON_ACCESS_DELETE);
		}
	}


	public Question verifiedExistsQuestion(Long questionId) { // 동록된 질문이 맞는지 검증
		return questionRepository.findById(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_QUESTION));
	}

	private void verifyAccess(Question question, Long accountId) { // 수정 권한 검증
		if(!accountId.equals(question.getAccount().getAccountId())) {
			throw  new BusinessLogicException(ExceptionCode.NON_ACCESS_MODIFY);
		}
	}
}

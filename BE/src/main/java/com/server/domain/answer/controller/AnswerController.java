package com.server.domain.answer.controller;

import java.net.URI;
import java.util.List;

import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.server.domain.answer.dto.AnswerDto;
import com.server.domain.answer.entity.Answer;
import com.server.domain.answer.mapper.AnswerMapper;
import com.server.domain.answer.service.AnswerService;
import com.server.global.argumentsresolver.LoginAccountIdResolver;
import com.server.global.common.dto.SingleResDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/questions")
public class AnswerController {
	private final static String ANSWER_DEFAULT_URL = "/questions";
	private final AnswerMapper mapper;
	private final AnswerService answerService;


	@PostMapping("/{question-id}/post")
	public ResponseEntity postAnswer(@RequestBody AnswerDto.Post postDto,
									  @Positive @PathVariable("question-id") Long questionId) {
		postDto.addAccountId(LoginAccountIdResolver.getAccountId());
		postDto.addQuestionId(questionId);

		Answer createAnswer = answerService.createAnswer(mapper.AnswerPostDtoToAnswer(postDto));
		URI location = UriComponentsBuilder.newInstance().build(ANSWER_DEFAULT_URL, createAnswer.getAnswerId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/update/{question-id}/{answer-id}")
	public ResponseEntity<SingleResDto<String>> patchAnswer(@RequestBody AnswerDto.Patch patchDto,
										@PathVariable("answer-id") Long answerId,
										@PathVariable("question-id") Long questionId) {

		patchDto.addAccountId(LoginAccountIdResolver.getAccountId());
		patchDto.addAnswerId(answerId);
		patchDto.addQuestionId(questionId);

		answerService.updateAnswer(mapper.AnswerPatchDtoToAnswer(patchDto));

		return new ResponseEntity(new SingleResDto<String>("success modify answer"), HttpStatus.OK);
	}

	@GetMapping("/{question-id}/answerList")
	public ResponseEntity getAnswers(@PathVariable("question-id") Long questionId) {
		List<Answer> answers = answerService.findAnswers(questionId);

		return new ResponseEntity<>(mapper.answersToAnswerResponseDtos(answers), HttpStatus.OK);
	}

	@DeleteMapping("/{answer-id}")
	public ResponseEntity deleteAnswer(@PathVariable("answer-id") Long answerId) {
		Long loginAccountId = LoginAccountIdResolver.getAccountId();
		answerService.deleteAnswer(answerId, loginAccountId);

		return ResponseEntity.noContent().build();
	}
}

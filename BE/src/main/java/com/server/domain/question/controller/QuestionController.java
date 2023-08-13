package com.server.domain.question.controller;

import com.server.domain.question.dto.QuestionDto;
import com.server.domain.question.entity.Question;
import com.server.domain.question.mapper.QuestionMapper;
import com.server.domain.question.service.QuestionService;
import com.server.global.argumentsresolver.LoginAccountId;
import com.server.global.common.dto.SingleResDto;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/questions")
public class QuestionController {

	public final static String QNA_QUESTION_DEFAULT_URL = "/questions";
	private final QuestionService questionService;
	private final QuestionMapper mapper;

	@PostMapping("/post") // 질문 등록
	public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto) { // + @LoginAccountId Long accountId

		postDto.addAccountId(1L);
		Question createQuestion = questionService.createQuestion(mapper.questionPostDtoToQuestion(postDto));
		URI location = UriComponentsBuilder.newInstance()
			.build(QNA_QUESTION_DEFAULT_URL, createQuestion.getQuestionId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/update/{question-id}")
	public ResponseEntity<SingleResDto<String>> patchQuestion(@PathVariable("question-id") Long questionId,
																@Valid @RequestBody QuestionDto.Patch patchDto) { // + @LoginAccountId Long accountId
		patchDto.addAccountId(1L);
		patchDto.addQuestionId(questionId);
		questionService.updateQuestion(mapper.questionPatchDtoToQuestion(patchDto));

		return new ResponseEntity(new SingleResDto<String>("success modify question"), HttpStatus.OK);

	}

	@GetMapping("/details/{question-id}")
	public ResponseEntity detailsQuestion(@PathVariable("question-id") Long questionId) {

		Question findQuestion = questionService.findQuestion(questionId);

		QuestionDto.Response responseDto = new QuestionDto.Response(findQuestion);

		return new ResponseEntity<>(responseDto, HttpStatus.OK);
	}

	@GetMapping("/search") // 전체 조회 및 제목 검색 및 사용자 이름 검색
	public ResponseEntity questions(@RequestParam(required = false) String title,
									@RequestParam(required = false) String name) {
		List<Question> questionList = questionService.searchQuestions(title, name);
		List<QuestionDto.Response> responses = questionList.stream()
			.map(QuestionDto.Response::new)
			.collect(Collectors.toList());

		return new ResponseEntity(responses, HttpStatus.OK);

	}


}

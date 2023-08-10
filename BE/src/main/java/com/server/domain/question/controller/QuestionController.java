package com.server.domain.question.controller;

import com.server.domain.question.dto.QuestionDto;
import com.server.domain.question.entity.Question;
import com.server.domain.question.mapper.QuestionMapper;
import com.server.domain.question.service.QuestionService;
import com.server.global.common.dto.SingleResDto;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping("/questions")
public class QuestionController {

	public final static String QNA_QUESTION_DEFAULT_URL = "/questions";
	private final QuestionService questionService;
	private final QuestionMapper mapper;

	@PostMapping("/post") // 질문 등록
	public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post postDto) {

		Question createQuestion = questionService.createQuestion(mapper.questionPostDtoToQuestion(postDto));
		URI location = UriComponentsBuilder.newInstance()
			.build(QNA_QUESTION_DEFAULT_URL, createQuestion.getQuestionId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/{question_id}")
	public ResponseEntity<SingleResDto<String>> patchQuestion(@Valid @RequestBody QuestionDto.Patch patchDto) {
		return null;
	}
}

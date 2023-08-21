package com.server.domain.question.controller;

import com.server.domain.question.dto.QuestionDto;
import com.server.domain.question.entity.Question;
import com.server.domain.question.mapper.QuestionMapper;
import com.server.domain.question.service.QuestionService;
import com.server.global.argumentsresolver.LoginAccountIdResolver;
import com.server.global.common.dto.PageDto;
import com.server.global.common.dto.SingleResDto;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping("/questions")
@Api(tags = {"2. 질문 관리"}, description = "질문 CRUD 관련 서비스")
public class QuestionController {

	public final static String QNA_QUESTION_DEFAULT_URL = "/questions";
	private final QuestionService questionService;
	private final QuestionMapper mapper;

	@PostMapping("/post")
	@ApiOperation(value = "질문 등록", notes = "새로운 질문을 등록하는 API")
	@ApiResponses(
		{
			@ApiResponse(code = 401, message = "인증되지 않은 사용자입니다."),
			@ApiResponse(code = 403, message = "권한이 없는 사용자입니다."),
			@ApiResponse(code = 201, message = "CREATED")
		}
	)
	public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto) {

		postDto.addAccountId(LoginAccountIdResolver.getAccountId()); // 작성자 아이디 가져오기
		Question createQuestion = questionService.createQuestion(mapper.questionPostDtoToQuestion(postDto));
		URI location = UriComponentsBuilder.newInstance()
			.build(QNA_QUESTION_DEFAULT_URL, createQuestion.getQuestionId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/update/{question-id}")
	@ApiOperation(value = "질문 수정", notes = "기존 질문을 수정하는 API")
	@ApiResponses(
		{
			@ApiResponse(code = 400, message = "질문을 찾을 수 없습니다."),
			@ApiResponse(code = 400, message = "수정 권한이 없습니다."),
			@ApiResponse(code = 401, message = "인증되지 않은 사용자입니다."),
			@ApiResponse(code = 403, message = "권한이 없는 사용자입니다."),
			@ApiResponse(code = 404, message =  "요청하신 데이터를 찾을 수 없습니다."),
			@ApiResponse(code = 200, message = "OK")
		}
	)
	public ResponseEntity<SingleResDto<String>> patchQuestion(@PathVariable("question-id") Long questionId,
																@Valid @RequestBody QuestionDto.Patch patchDto) {
		patchDto.addAccountId(LoginAccountIdResolver.getAccountId()); // 수정자 아이디 가져오기
		patchDto.addQuestionId(questionId);
		questionService.updateQuestion(mapper.questionPatchDtoToQuestion(patchDto));

		return new ResponseEntity(new SingleResDto<String>("success modify question"), HttpStatus.OK);

	}

	@GetMapping("/details/{question-id}")
	@ApiOperation(value = "질문 보기", notes = "사용자가 요청한 질문에 대한 상세 정보를 응답하는 API")
	@ApiResponses(
		{
			@ApiResponse(code = 400, message = "질문을 찾을 수 없습니다."),
			@ApiResponse(code = 401, message = "인증되지 않은 사용자입니다."),
			@ApiResponse(code = 403, message = "권한이 없는 사용자입니다."),
			@ApiResponse(code = 200, message = "OK")
		}
	)
	public ResponseEntity detailsQuestion(@PathVariable("question-id") Long questionId) {

		Question findQuestion = questionService.findQuestion(questionId);
		QuestionDto.Response responseDto = new QuestionDto.Response(findQuestion);

		return new ResponseEntity<>(responseDto, HttpStatus.OK);
	}

	@GetMapping("/questionList")
	@ApiOperation(value = "전체 게시글 조회", notes = "필터 정렬 기준을 사용한 전체 게시글 조회 API\n정렬 기준 [ new, views, votes ]")
	@ApiResponses(
		{
			@ApiResponse(code = 404, message =  "요청하신 데이터를 찾을 수 없습니다."),
			@ApiResponse(code = 200, message = "OK")
		}
	)
	public ResponseEntity<PageDto<QuestionDto.Response>> getQuestions(@Positive @RequestParam int page, @RequestParam String sort) {
		Page<Question> getQuestions = questionService.findQuestions(page - 1, sort);
		Page<QuestionDto.Response> questionList = getQuestions.map(QuestionDto.Response::new);

		PageDto<QuestionDto.Response> responsePageDto = new PageDto<>(questionList);

		return new ResponseEntity(responsePageDto, HttpStatus.OK);
	}


	@GetMapping("/search")
	@ApiOperation(value = "질문 검색", notes = "제목 및 닉네임을 사용한 게시글 검색 API")
	@ApiResponses(
		{
			@ApiResponse(code = 200, message = "OK")
		}
	)
	public ResponseEntity<PageDto<QuestionDto.Response>> searchQuestions(@RequestParam(required = false) String title,
																		  @RequestParam(required = false) String name,
																		  @Positive @RequestParam int page) {
		Page<Question> questionList = questionService.searchQuestions(title, name, page - 1);
		Page<QuestionDto.Response> responses = questionList.map(QuestionDto.Response::new);

		PageDto<QuestionDto.Response> pageDto = new PageDto<>(responses);

		return new ResponseEntity(pageDto, HttpStatus.OK);

	}

	@DeleteMapping("/delete/{question-id}")
	@ApiOperation(value = "질문 삭제", notes = "질문을 삭제하는 API")
	@ApiResponses(
		{
			@ApiResponse(code = 400, message = "질문을 찾을 수 없습니다."),
			@ApiResponse(code = 400, message = "삭제 권한이 없습니다."),
			@ApiResponse(code = 401, message = "인증되지 않은 사용자입니다."),
			@ApiResponse(code = 403, message = "권한이 없는 사용자입니다."),
			@ApiResponse(code = 204, message = "N0_CONTENT")
		}
	)
	public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){

		Long loginAccountId = LoginAccountIdResolver.getAccountId();
		questionService.deleteQuestion(questionId, loginAccountId);

		return ResponseEntity.noContent().build();
	}


}

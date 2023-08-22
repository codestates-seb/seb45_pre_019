package com.server.domain.vote.controller;

import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.domain.vote.dto.VoteDto;
import com.server.domain.vote.entity.Vote;
import com.server.domain.vote.mapper.VoteMapper;
import com.server.domain.vote.service.VoteService;
import com.server.global.argumentsresolver.LoginAccountIdResolver;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/questions")
@Api(tags = {"5. 투표 관리"}, description = "투표 CRUD 관련 서비스")
public class VoteController {

	private final VoteService voteService;
	private final VoteMapper voteMapper;

	public VoteController(VoteService voteService, VoteMapper voteMapper) {
		this.voteService = voteService;
		this.voteMapper = voteMapper;
	}

	@PostMapping("/{question-id}/votes")
	@ApiOperation(value = "좋아요 투표", notes = "질문 혹은 답변의 투표 기능 관련 API")
	@ApiResponses(
		{
			@ApiResponse(code = 400, message = "질문을 찾을 수 없습니다."),
			@ApiResponse(code = 401, message = "인증되지 않은 사용자입니다."),
			@ApiResponse(code = 200, message = "OK")
		}
	)
	public ResponseEntity postVote(@Positive @PathVariable("question-id") Long questionId,
									@RequestParam String status, @RequestBody VoteDto.Post postDto) {

		postDto.addQuestionId(questionId);
		postDto.addAccountId(LoginAccountIdResolver.getAccountId());

		Vote vote = voteService.createVote(voteMapper.votePostDtoToVote(postDto), status);

		return new ResponseEntity<>(voteMapper.voteToVoteResponseDto(vote), HttpStatus.OK);
	}
}

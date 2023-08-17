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


@RestController
@RequestMapping("/questions")
public class VoteController {

	private final VoteService voteService;
	private final VoteMapper voteMapper;

	public VoteController(VoteService voteService, VoteMapper voteMapper) {
		this.voteService = voteService;
		this.voteMapper = voteMapper;
	}

	@PostMapping("/{question-id}/votes")
	public ResponseEntity postVote(@Positive @PathVariable("question-id") Long questionId,
									@RequestParam String status, @RequestBody VoteDto.Post postDto) {

		postDto.addQuestionId(questionId);
		postDto.addAccountId(LoginAccountIdResolver.getAccountId());

		Vote vote = voteService.createVote(voteMapper.votePostDtoToVote(postDto), status);

		return new ResponseEntity<>(voteMapper.voteToVoteResponseDto(vote), HttpStatus.OK);
	}
}

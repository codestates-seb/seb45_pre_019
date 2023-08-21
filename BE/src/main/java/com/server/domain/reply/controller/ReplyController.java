package com.server.domain.reply.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.domain.account.entity.Account;
import com.server.domain.account.service.AccountService;
import com.server.domain.answer.entity.Answer;
import com.server.domain.question.entity.Question;
import com.server.domain.question.service.QuestionService;
import com.server.domain.reply.dto.ReplyDto;
import com.server.domain.reply.mapper.ReplyMapper;
import com.server.domain.reply.service.ReplyService;
import com.server.global.argumentsresolver.LoginAccountIdResolver;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/replies")
@Api(tags = {"4. 댓글 관리"}, description = "댓글 CRUD 관련 서비스")
public class ReplyController {
	private final ReplyService replyService;
	private final ReplyMapper replyMapper;
	private final QuestionService questionService;

	@PostMapping("/post")
	public ResponseEntity<HttpStatus> postReply (
		@RequestParam(value = "sub") String subject, @RequestParam("id") long id, @Valid @RequestBody ReplyDto.Post post
	) {
		replyService.createReply(replyMapper.postToReply(post), subject, id);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PatchMapping("/update/{reply-id}")
	public ResponseEntity<HttpStatus> patchReply(@PathVariable("reply-id") long id, @RequestBody ReplyDto.Post post) {
		replyService.updateReply(replyMapper.postToReply(post), id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/delete/{reply-id}")
	public ResponseEntity<HttpStatus> deleteReply(@PathVariable("reply-id") long id) {
		replyService.deleteReply(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}

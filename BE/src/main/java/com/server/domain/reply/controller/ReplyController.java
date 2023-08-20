package com.server.domain.reply.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/replies")
public class ReplyController {
	private final ReplyService replyService;
	private final ReplyMapper replyMapper;
	private final AccountService accountService;
	private final QuestionService questionService;

	@PostMapping("/post/{qna-id}")
	public ResponseEntity<HttpStatus> postReply(
		@RequestParam(value = "sub") String subject,
		@Valid @RequestBody ReplyDto.Post post,
		@PathVariable("qna-id") long qnaId) {

		Account account = accountService.findAccount(LoginAccountIdResolver.getAccountId());
		if (subject.equals("question")) {
			Question question = questionService.findQuestion(qnaId);
			replyService.createReply(replyMapper.PostToQuestionReply(post, account, question), subject);
		}
		else {
			// Answer answer = answerService.findQuestion(qnaId);
			// replyService.createReply(replyMapper.PostToAnswerReply(post, account, answer), subject);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}

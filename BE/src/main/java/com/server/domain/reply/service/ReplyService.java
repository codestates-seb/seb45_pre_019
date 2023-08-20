package com.server.domain.reply.service;



import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.server.domain.account.entity.Account;
import com.server.domain.account.service.AccountService;
import com.server.domain.answer.entity.Answer;
import com.server.domain.question.entity.Question;
import com.server.domain.question.service.QuestionService;
import com.server.domain.reply.entity.Reply;
import com.server.domain.reply.repository.ReplyRepository;
import com.server.global.argumentsresolver.LoginAccountIdResolver;
import com.server.global.exception.advice.BusinessLogicException;
import com.server.global.exception.exceptionCode.ExceptionCode;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class ReplyService {
	private final ReplyRepository replyRepository;
	private final AccountService accountService;
	private final QuestionService questionService;
	// private final AnswerService answerService;
	public void createReply(Reply reply, String subject, long id) {
		Account account = accountService.findAccount(LoginAccountIdResolver.getAccountId());
		reply.setAccount(account);

		if(subject.equals("question")) {
			Optional.ofNullable(questionService.findQuestion(id)).ifPresent(reply::setQuestion);
		}
		else {
			// Optional.ofNullable(answerService.findQuestion(id)).ifPresent(reply::setAnswer);
		}

		replyRepository.save(reply);
	}

	public void updateReply(Reply newReply, long id) {
		Reply reply = findReply(id);
		verifiedAccount(reply.getAccount().getAccountId());
		reply.setReplyContent(newReply.getReplyContent());
		replyRepository.save(reply);
	}

	public Reply findReply(long id) {
		return replyRepository.findById(id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
	}

	public void deleteReply(long id) {
		Reply reply = findReply(id);
		verifiedAccount(reply.getAccount().getAccountId());
		replyRepository.delete(reply);
	}

	public void verifiedAccount(long id) {
		if (LoginAccountIdResolver.getAccountId() != id) {
			throw new BusinessLogicException(ExceptionCode.NON_ACCESS_DELETE);
		}
	}
}

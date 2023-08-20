package com.server.domain.reply.service;



import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.server.domain.reply.entity.AnswerReply;
import com.server.domain.reply.entity.QuestionReply;
import com.server.domain.reply.repository.AnswerReplyRepository;
import com.server.domain.reply.repository.QuestionReplyRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class ReplyService {
	private final QuestionReplyRepository questionReplyRepository;
	private final AnswerReplyRepository answerReplyRepository;
	public void createReply(Object object, String subject) {
		if (subject.equals("question") && object instanceof QuestionReply) {
			questionReplyRepository.save((QuestionReply) object);
		}
		else if (object instanceof AnswerReply){
			answerReplyRepository.save((AnswerReply) object);
		}
	}

}

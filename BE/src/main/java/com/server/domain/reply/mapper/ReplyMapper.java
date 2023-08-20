package com.server.domain.reply.mapper;

import org.mapstruct.Mapper;

import com.server.domain.account.entity.Account;
import com.server.domain.answer.entity.Answer;
import com.server.domain.question.entity.Question;
import com.server.domain.reply.dto.ReplyDto;
import com.server.domain.reply.entity.AnswerReply;
import com.server.domain.reply.entity.QuestionReply;

@Mapper(componentModel = "spring")
public interface ReplyMapper {
	default QuestionReply PostToQuestionReply(ReplyDto.Post post, Account account, Question question) {
		if (post == null) {
			return null;
		} else {
			QuestionReply.QuestionReplyBuilder questionReply = QuestionReply.builder();
			questionReply.content(post.getContent());
			questionReply.account(account);
			questionReply.question(question);
			return questionReply.build();
		}
	}

	default AnswerReply PostToAnswerReply(ReplyDto.Post post, Account account, Answer answer) {
		if (post == null) {
			return null;
		} else {
			AnswerReply.AnswerReplyBuilder answerReply = AnswerReply.builder();
			answerReply.content(post.getContent());
			answerReply.account(account);
			answerReply.answer(answer);
			return answerReply.build();
		}
	}
}

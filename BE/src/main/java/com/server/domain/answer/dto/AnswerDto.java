package com.server.domain.answer.dto;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.server.domain.answer.entity.Answer;
import com.server.domain.reply.entity.Reply;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class AnswerDto {

	@Getter
	public static class Post {

		private Long questionId;
		private Long accountId;

		@NotBlank(message = "내용을 입력하세요.")
		private String answerContent;

		public void addAccountId(Long accountId) {
			this.accountId = accountId;
		}

		public void addQuestionId(Long questionId) {
			this.questionId = questionId;
		}
	}

	@Getter
	public static class Patch {

		private Long answerId;
		private Long accountId;
		private Long questionId;

		private String answerContent;

		public void addAnswerId(Long answerId) {
			this.answerId = answerId;
		}

		public void addAccountId(Long accountId) {
			this.accountId = accountId;
		}

		public void addQuestionId(Long questionId) {
			this.questionId = questionId;
		}
	}

	@Getter
	@AllArgsConstructor
	@Builder
	public static class Response {
		private Long answerId;
		private Long questionId;
		private Long accountId;
		private String answerContent;
		private List<Reply> replies;
	}
}

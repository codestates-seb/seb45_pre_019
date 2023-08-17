package com.server.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

import com.server.domain.account.dto.AccountDto;
import com.server.domain.account.entity.Account;
import com.server.domain.question.entity.Question;

public class QuestionDto {

	@Getter
	public static class Post {
		@NotBlank
		private String questionTitle;

		@NotBlank
		private String questionContent;

		private Long accountId;

		public void addAccountId(long accountId) {
			this.accountId = accountId;
		}
	}

	@Getter
	public static class Patch {
		private long questionId;
		private long accountId;

		@NotBlank
		private String questionTitle;

		@NotBlank
		private String questionContent;

		public void addQuestionId(long questionId) {
			this.questionId = questionId;
		}
		public void addAccountId(long accountId) {
			this.accountId = accountId;
		}


	}
	@Getter
	@AllArgsConstructor
	@NoArgsConstructor
	public static class Response {
		private Long questionId;
		private String questionTitle;
		private String questionContent;
		private int views;
		private QuestionAccountResDto account;

		public Response(Question question) {
			this.questionId = question.getQuestionId();
			this.questionTitle = question.getQuestionTitle();
			this.questionContent = question.getQuestionContent();
			this.views = question.getViews();
			this.account = new QuestionAccountResDto(question.getAccount());
		}
	}
}

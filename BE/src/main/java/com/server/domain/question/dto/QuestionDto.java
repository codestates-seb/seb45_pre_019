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
		private String questionProblem;

		@NotBlank
		private String questionExpect;

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
		private String questionProblem;

		@NotBlank
		private String questionExpect;

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
		private String questionProblem;
		private String questionExpect;
		private int views;
		private int voteCount;
		private QuestionAccountResDto account;

		public Response(Question question) {
			this.questionId = question.getQuestionId();
			this.questionTitle = question.getQuestionTitle();
			this.questionProblem = question.getQuestionProblem();
			this.questionExpect = question.getQuestionExpect();
			this.views = question.getViews();
			this.voteCount = question.getVoteCount();
			this.account = new QuestionAccountResDto(question.getAccount());
		}
	}
}

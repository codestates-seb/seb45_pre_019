package com.server.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class QuestionDto {

	@Getter
	public static class Post {
		@NotBlank
		private String questionTitle;

		@NotBlank
		private String questionContent;

		private long accountId;

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

	@AllArgsConstructor
	public static class Response {
		private long questionId;
		private String title;
		private String content;
		private long accountId;
	}
}

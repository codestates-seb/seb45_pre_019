package com.server.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class QuestionDto {

	@Getter
	public static class Post {
		@NotBlank
		private String title;

		@NotBlank
		private String content;

		private long accountId;

		// public void addAccountId(long accountId) {
		// 	this.accountId = accountId;
		// }
	}

	@Getter
	public static class Patch {
		private long questionId;

		@NotBlank
		private String title;

		@NotBlank
		private String content;

		public void addQuestionId(long questionId) {
			this.questionId = questionId;
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

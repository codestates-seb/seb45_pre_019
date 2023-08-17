package com.server.domain.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class VoteDto {

	@Getter
	public static class Post {

		private Long accountId;
		private Long questionId;

		public void addAccountId(Long accountId) {
			this.accountId = accountId;
		}

		public void addQuestionId(Long questionId) {
			this.questionId = questionId;
		}

	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Response {

		private long questionId;

		private int voteCount;  // 총 점수

	}

}

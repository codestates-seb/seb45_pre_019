package com.server.domain.vote.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class VoteDto {

	@Getter
	public static class Post {
		@ApiModelProperty(value = "회원 번호")
		private Long accountId;
		@ApiModelProperty(value = "질문 번호")
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
		@ApiModelProperty(value = "질문 번호")
		private long questionId;
		@ApiModelProperty(value = "총 좋아요 점수")
		private int voteCount;

	}

}

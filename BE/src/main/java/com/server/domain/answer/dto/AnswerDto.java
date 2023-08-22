package com.server.domain.answer.dto;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.server.domain.answer.entity.Answer;
import com.server.domain.reply.entity.Reply;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class AnswerDto {

	@Getter
	@ApiModel(value = "답변 등록 형식")
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
	@ApiModel(value = "답변 수정 형식")
	public static class Patch {

		@ApiModelProperty(value = "수정할 답변 번호")
		private Long answerId;
		@ApiModelProperty(value = "로그인한 사용자의 번호")
		private Long accountId;
		@ApiModelProperty(value = "연관된 질문에 대한 번호")
		private Long questionId;

		@ApiModelProperty(value = "수정하려는 내용")
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
	@ApiModel(value = "답변 응답 형식")
	public static class Response {
		@ApiModelProperty(value = "답변 번호")
		private Long answerId;
		@ApiModelProperty(value = "질문 번호")
		private Long questionId;
		@ApiModelProperty(value = "작성 회원 번호")
		private Long accountId;
		@ApiModelProperty(value = "답변 내용")
		private String answerContent;
		@ApiModelProperty(value = "답변의 댓글")
		private List<Reply> replies;
	}
}

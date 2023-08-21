package com.server.domain.question.dto;

import java.util.List;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.server.domain.account.dto.AccountDto;
import com.server.domain.account.entity.Account;
import com.server.domain.question.entity.Question;

public class QuestionDto {

	@Getter
	public static class Post {
		@NotBlank
		@ApiModelProperty(value = "질문 타이틀")
		private String questionTitle;

		@NotBlank
		@ApiModelProperty(value = "발생한 문제")
		private String questionProblem;

		@NotBlank
		@ApiModelProperty(value = "예상한 결과")
		private String questionExpect;

		@ApiModelProperty(value = "회원 번호")
		private Long accountId;

		@Size(max=10, message = "태그는 최대 10개까지 가능합니다.")
		@ApiModelProperty(value = "질문에 해당하는 태그 (최대 10개)")
		private List<String> tags;

		public void addAccountId(long accountId) {
			this.accountId = accountId;
		}
	}

	@Getter
	public static class Patch {
		@ApiModelProperty(value = "수정할 질문 번호")
		private long questionId;
		@ApiModelProperty(value = "수정하려는 회원 번호")
		private long accountId;

		@NotBlank
		@ApiModelProperty(value = "변경 내용 : 질문 타이틀")
		private String questionTitle;

		@NotBlank
		@ApiModelProperty(value = "변경 내용 : 발생한 문제")
		private String questionProblem;

		@NotBlank
		@ApiModelProperty(value = "변경 내용 : 예상한 결과")
		private String questionExpect;

		@Size(max=10, message = "태그는 최대 10개까지 가능합니다.")
		@ApiModelProperty(value = "변경 내용 : 질문에 해당하는 태그 (최대 10개)")
		private List<String> tags;

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
		@ApiModelProperty(value = "질문 번호")
		private Long questionId;
		@ApiModelProperty(value = "질문 타이틀")
		private String questionTitle;
		@ApiModelProperty(value = "발생한 문제")
		private String questionProblem;
		@ApiModelProperty(value = "예상한 결과")
		private String questionExpect;
		@ApiModelProperty(value = "조회수")
		private int views;
		@ApiModelProperty(value = "좋아요 수")
		private int voteCount;
		@ApiModelProperty(value = "질문에 해당하는 태그")
		private List<String> tags;
		@ApiModelProperty(value = "회원 정보")
		private QuestionAccountResDto account;

		public Response(Question question) {
			this.questionId = question.getQuestionId();
			this.questionTitle = question.getQuestionTitle();
			this.questionProblem = question.getQuestionProblem();
			this.questionExpect = question.getQuestionExpect();
			this.views = question.getViews();
			this.voteCount = question.getVoteCount();
			this.tags = question.getTags();
			this.account = new QuestionAccountResDto(question.getAccount());
		}
	}
}

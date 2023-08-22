package com.server.domain.reply.dto;

import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

public class ReplyDto {
	@Getter
	@ApiModel(value = "댓글 등록 형식")
	public static class Post {
		@NotNull
		@ApiModelProperty(value = "댓글 내용")
		private String replyContent;
	}
}

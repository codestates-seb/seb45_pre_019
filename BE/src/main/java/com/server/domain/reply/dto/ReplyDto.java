package com.server.domain.reply.dto;

import javax.validation.constraints.NotNull;

import lombok.Getter;

public class ReplyDto {
	@Getter
	public static class Post {
		@NotNull
		private String replyContent;
	}
}

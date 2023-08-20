package com.server.domain.reply.mapper;

import org.mapstruct.Mapper;

import com.server.domain.reply.dto.ReplyDto;
import com.server.domain.reply.entity.Reply;

@Mapper(componentModel = "spring")
public interface ReplyMapper {
	Reply postToReply(ReplyDto.Post post);
}

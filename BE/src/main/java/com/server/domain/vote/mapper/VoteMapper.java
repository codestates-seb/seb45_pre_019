package com.server.domain.vote.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.domain.vote.dto.VoteDto;
import com.server.domain.vote.entity.Vote;

@Mapper(componentModel = "spring")
public interface VoteMapper {

	@Mapping(source = "accountId", target = "account.accountId")
	@Mapping(source = "questionId", target = "question.questionId")
	Vote votePostDtoToVote(VoteDto.Post voteDto);

	default VoteDto.Response voteToVoteResponseDto(Vote vote) {
		Long questionId = vote.getQuestion().getQuestionId();

		return VoteDto.Response.builder()
			.questionId(questionId)
			.voteCount(vote.getQuestion().getVoteCount())
			.build();
	}
}

package com.server.domain.answer.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.server.domain.answer.dto.AnswerDto;
import com.server.domain.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

	@Mapping(source = "accountId", target = "account.accountId")
	@Mapping(source = "questionId", target = "question.questionId")
	Answer AnswerPostDtoToAnswer(AnswerDto.Post postDto);

	@Mapping(source = "accountId", target = "account.accountId")
	@Mapping(source = "questionId", target = "question.questionId")
	Answer AnswerPatchDtoToAnswer(AnswerDto.Patch patchDto);

	AnswerDto.Response answersToAnswerResponseDto(Answer answers);

	List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers);
}

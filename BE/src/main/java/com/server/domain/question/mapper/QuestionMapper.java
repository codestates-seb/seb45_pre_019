package com.server.domain.question.mapper;

import com.server.domain.question.dto.QuestionDto;
import com.server.domain.question.entity.Question;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "Spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
	@Mapping(source = "accountId", target = "account.accountId")
	Question questionPostDtoToQuestion(QuestionDto.Post postDto);

	@Mapping(source = "accountId", target = "account.accountId")
	Question questionPatchDtoToQuestion(QuestionDto.Patch patchDto);

}

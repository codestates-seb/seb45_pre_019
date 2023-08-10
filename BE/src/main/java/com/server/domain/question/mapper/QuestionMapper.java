package com.server.domain.question.mapper;

import com.server.domain.question.dto.QuestionDto;
import com.server.domain.question.entity.Question;

import org.mapstruct.Mapper;

@Mapper(componentModel = "Spring")
public interface QuestionMapper {
	Question questionPostDtoToQuestion(QuestionDto.Post postDto);
}

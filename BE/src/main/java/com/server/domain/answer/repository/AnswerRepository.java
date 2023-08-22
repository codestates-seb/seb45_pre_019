package com.server.domain.answer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.server.domain.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

	@Query(nativeQuery = true,
		value = "SELECT * FROM answer WHERE question_id = :questionId")
	List<Answer> findAll(@Param("questionId") long questionId);
}

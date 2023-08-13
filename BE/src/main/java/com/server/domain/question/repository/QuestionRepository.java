package com.server.domain.question.repository;

import java.util.List;
import java.util.Optional;

import javax.swing.*;

import com.server.domain.question.entity.Question;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuestionRepository extends JpaRepository<Question, Long> {

	@EntityGraph(attributePaths = {"account"}) // 연관된 account 데이터가 함께 로딩되도록 한다.
	@Query("select question from Question question where question.questionId = :questionId")
	Optional<Question> findByIdWithAll(@Param("questionId") Long questionId); // questionId에 해당하는 질문 데이터를 가져온다.

	// Containing 붙여주면 Like 검색 가능 == %{like}%
	@EntityGraph(attributePaths = {"account"})
	@Query("select question from Question question where question.questionTitle like %:questionTitle%"
		+ "and question.account.accountName like %:accountName%")
	List<Question> findByQuestionTitleContainingAndAccountAccountNameContaining(@Param("questionTitle") String title,
																				 @Param("accountName") String name);


	// 태그 검색
}

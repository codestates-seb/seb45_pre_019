package com.server.domain.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.server.domain.vote.entity.Vote;

@Transactional
public interface VoteRepository extends JpaRepository<Vote, Long> {

	// 추천을 누른 accountId와 questionId가 존재하는지 확인
	@Query("select COUNT(v) from Vote v where v.account.accountId = :accountId and v.question.questionId = :questionId")
	int countByAccountIdAndQuestionId(@Param("accountId") Long accountId, @Param("questionId") Long questionId);

	// accountId와 questionId가 가지는 vote 가져오기
	Vote findByAccountAccountIdAndQuestionQuestionId(Long accountId, Long questionId);
}

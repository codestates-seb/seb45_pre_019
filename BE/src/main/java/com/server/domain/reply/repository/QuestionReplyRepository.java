package com.server.domain.reply.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.domain.reply.entity.QuestionReply;

public interface QuestionReplyRepository extends JpaRepository<QuestionReply, Long> {
}

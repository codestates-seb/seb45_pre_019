package com.server.domain.reply.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.domain.reply.entity.AnswerReply;

public interface AnswerReplyRepository extends JpaRepository<AnswerReply, Long> {
}

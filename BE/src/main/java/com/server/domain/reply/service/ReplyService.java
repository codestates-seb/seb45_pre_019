package com.server.domain.reply.service;



import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.server.domain.reply.repository.ReplyRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class ReplyService {
	private final ReplyRepository ReplyRepository;
	public void createReply(Object object, String subject) {

	}

}

package com.server.domain.reply.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.server.domain.account.entity.Account;
import com.server.domain.question.entity.Question;
import com.server.domain.vote.entity.Vote;
import com.server.global.auditing.TimeStamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuestionReply extends TimeStamp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_reply_id")
	private Long questionReplyId;

	@Column(name = "question_reply_content")
	private String content;

	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;

	@ManyToOne
	@JoinColumn(name = "question_id")
	private Question question;

	@OneToMany(mappedBy = "questionReply", cascade = CascadeType.REMOVE)
	@Builder.Default
	private List<Vote> votes = new ArrayList<>();
}

package com.server.domain.answer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.server.domain.account.entity.Account;
import com.server.domain.question.entity.Question;
import com.server.global.auditing.TimeStamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Answer extends TimeStamp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "answer_id")
	private Long answerId;

	@Setter
	@Column(columnDefinition = "TEXT", nullable = false, name = "answer_content")
	private String answerContent;

	@ManyToOne
	@JoinColumn(name = "question_Id")
	private Question question;

	@ManyToOne
	@JoinColumn(name = "account_Id")
	private Account account;
}

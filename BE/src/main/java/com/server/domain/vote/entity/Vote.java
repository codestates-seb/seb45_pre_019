package com.server.domain.vote.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.server.domain.account.entity.Account;
import com.server.domain.answer.entity.Answer;
import com.server.domain.question.entity.Question;
import com.server.domain.reply.entity.Reply;
import com.server.global.auditing.TimeStamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Vote extends TimeStamp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long voteId;

	@ManyToOne
	@JoinColumn(name = "question_id")
	private Question question;

	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;

	@Enumerated(EnumType.STRING)
	private voteStatus status;

	@ManyToOne
	@JoinColumn(name = "answer_id")
	private Answer answer;

	@ManyToOne
	@JoinColumn(name = "answer_reply_id")
	private Reply reply;

	public void setAccount(Account account) {
		this.account = account;

		if (!this.account.getVotes().contains(this)) {
			this.account.setVotes(this);
		}
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;

		if (!this.answer.getVotes().contains(this)) {
			this.answer.setVotes(this);
		}
	}

	public void setReply(Reply reply) {
		this.reply = reply;

		if (!this.reply.getVotes().contains(this)) {
			this.reply.setVotes(this);
		}
	}

	public enum voteStatus {
		GOOD("추천"),
		BAD("비추천");

		@Getter
		private String status;

		voteStatus(String status) {
			this.status = status;
		}
	}

}

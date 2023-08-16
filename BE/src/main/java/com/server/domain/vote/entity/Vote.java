package com.server.domain.vote.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.server.domain.account.entity.Account;
import com.server.domain.question.entity.Question;
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
	@JoinColumn(name = "QUESTION_ID")
	private Question question;

	// @OneToOne
	// @JoinColumn(name = "ACCOUNT_ID")
	// private Account account;

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

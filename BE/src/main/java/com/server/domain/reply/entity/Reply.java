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
import com.server.domain.answer.entity.Answer;
import com.server.domain.question.entity.Question;
import com.server.domain.vote.entity.Vote;
import com.server.global.auditing.TimeStamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Reply extends TimeStamp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reply_id")
	private Long replyId;

	@Column(columnDefinition = "TEXT", nullable = false, name = "reply_content")
	private String replyContent;

	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;

	@OneToMany(mappedBy = "reply", cascade = CascadeType.REMOVE)
	@Builder.Default
	private List<Vote> votes = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "question_id")
	private Question question;

	@ManyToOne
	@JoinColumn(name = "answer_id")
	private Answer answer;

	public void setAccount(Account account) {
		this.account = account;

		if (!this.account.getReplies().contains(this)) {
			this.account.setReplies(this);
		}
	}

	public void setVotes(Vote vote) {
		votes.add(vote);

		if (vote.getReply() != this) {
			vote.setReply(this);
		}
	}

	public void setQuestion(Question question) {
		this.question = question;

		if (!this.question.getReplies().contains(this)) {
			this.question.setReplies(this);
		}
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;

		if (!this.answer.getReplies().contains(this)) {
			this.answer.setReplies(this);
		}
	}
}

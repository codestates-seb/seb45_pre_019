package com.server.domain.answer.entity;

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
import com.server.domain.reply.entity.Reply;
import com.server.domain.vote.entity.Vote;
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

	@OneToMany(mappedBy = "answer", cascade = CascadeType.ALL, orphanRemoval = true)
	@Builder.Default
	private List<Vote> votes = new ArrayList<>();

	@OneToMany(mappedBy = "answer", cascade = CascadeType.PERSIST)
	@Builder.Default
	private List<Reply> replies = new ArrayList<>();

	public void setQuestion(Question question) {
		this.question = question;

		if (!this.question.getAnswers().contains(this)) {
			this.question.setAnswers(this);
		}
	}

	public void setAccount(Account account) {
		this.account = account;

		if (!this.account.getAnswers().contains(this)) {
			this.account.setAnswers(this);
		}
	}

	public void setVotes(Vote vote) {
		votes.add(vote);

		if (vote.getAnswer() != this) {
			vote.setAnswer(this);
		}
	}

	public void setReplies(Reply reply) {
		replies.add(reply);

		if (reply.getAnswer() != this) {
			reply.setAnswer(this);
		}
	}
}

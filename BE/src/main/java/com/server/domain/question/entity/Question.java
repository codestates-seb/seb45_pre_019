package com.server.domain.question.entity;

import com.server.domain.account.entity.Account;
import com.server.domain.answer.entity.Answer;
import com.server.domain.reply.entity.Reply;
import com.server.domain.vote.entity.Vote;
import com.server.global.auditing.TimeStamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends TimeStamp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long questionId;

	@Column(nullable = false, name = "question_title")
	private String questionTitle;

	@Column(columnDefinition = "TEXT", nullable = false, name = "question_problem")
	private String questionProblem;

	@Column(columnDefinition = "TEXT", nullable = false, name = "question_expect")
	private String questionExpect;

	private int views; // 조회수

	private int voteCount; // 투표수

	@ElementCollection(fetch = FetchType.LAZY)
	private List<String> tags = new ArrayList<>();


	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;

	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true) // 투표 정보 관리
	private List<Vote> votes = new ArrayList<>();

	@OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
	private List<Answer> answers = new ArrayList<>();

	@OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
	private List<Reply> replies = new ArrayList<>();

	public void addViews(int view) {
		this.views = view + 1;
	}


	public Question(String questionTitle, String questionProblem, String questionExpect, int views, int voteCount) {
		this.questionTitle = questionTitle;
		this.questionProblem = questionProblem;
		this.questionExpect = questionExpect;
		this.views = views;
		this.voteCount = voteCount;
	}

	public void setAccount(Account account) {
		this.account = account;

		if (!this.account.getQuestions().contains(this)) {
			this.account.setQuestions(this);
		}
	}

	public void setAnswers(Answer answer) {
		answers.add(answer);

		if (answer.getQuestion() != this) {
			answer.setQuestion(this);
		}
	}

	public void setReplies(Reply reply) {
		replies.add(reply);

		if (reply.getQuestion() != this) {
			reply.setQuestion(this);
		}
	}

	// vote를 처음 등록하는 메서드
	public void addVoteCount(Vote vote) {
		this.votes.add(vote); // 투표 정보 추가
		vote.setQuestion(this); // Question에 투표 정보 업데이트

		calculateVoteCount(); // 총 투표 개수 계산
	}


	public void calculateVoteCount() {
		this.voteCount = votes.stream().mapToInt(vote -> {
						if(vote.getStatus() == Vote.voteStatus.GOOD) {
							return 1;
						} else if (vote.getStatus() == Vote.voteStatus.BAD) {
							return -1;
						} else {
							return 0;
						}
					}).sum();
	}
}

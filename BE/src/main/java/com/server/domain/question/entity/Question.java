package com.server.domain.question.entity;

import com.server.domain.account.entity.Account;
import com.server.domain.vote.entity.Vote;
import com.server.global.auditing.TimeStamp;

import lombok.AllArgsConstructor;
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

	@Column(columnDefinition = "TEXT", nullable = false, name = "question_content")
	private String questionContent;

	private int views; // 조회수

	private int voteCount; // 투표수

	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;

	@OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE) // 투표 정보 관리
	private List<Vote> votes = new ArrayList<>();

	public void addViews(int view) {
		this.views = view + 1;
	}


	public Question(String questionTitle, String questionContent, int views, int voteCount) {
		this.questionTitle = questionTitle;
		this.questionContent = questionContent;
		this.views = views;
		this.voteCount = voteCount;
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



	//    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
	//    private List<Answer> answers;

}

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



	//    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
	//    private List<Answer> answers;

}

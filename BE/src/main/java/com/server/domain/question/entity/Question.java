package com.server.domain.question.entity;

import com.server.domain.account.entity.Account;
import com.server.global.auditing.TimeStamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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

	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;



	//    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
	//    private List<Answer> answers;

	//    private int questionView;

}

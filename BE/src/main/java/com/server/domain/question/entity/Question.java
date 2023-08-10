package com.server.domain.question.entity;

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
	private long questionId;

	@Column(nullable = false)
	private String questionTitle;

	@Column(columnDefinition = "TEXT", nullable = false)
	private String questionContent;

	//    @ManyToOne
	//    @JoinColumn(name = "ACCOUNT_ID")
	//    private Account account;
	//
	//    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
	//    private List<Answer> answers;

	//    private int questionView;

}

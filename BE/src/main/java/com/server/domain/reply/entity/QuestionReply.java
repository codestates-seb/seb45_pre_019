// package com.server.domain.reply.entity;
//
// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.JoinColumn;
// import javax.persistence.ManyToOne;
//
// import com.server.domain.account.entity.Account;
// import com.server.domain.question.entity.Question;
// import com.server.global.auditing.TimeStamp;
//
// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
//
// @Entity
// @Getter
// @Builder
// @NoArgsConstructor
// @AllArgsConstructor
// public class QuestionReply extends TimeStamp {
// 	@Id
// 	@GeneratedValue(strategy = GenerationType.IDENTITY)
// 	@Column(name = "reply_id")
// 	private Long replyId;
//
// 	@Column(name = "reply_content")
// 	private String replyContent;
//
// 	@ManyToOne
// 	@JoinColumn(name = "account_id")
// 	private Account account;
//
// 	@ManyToOne
// 	@JoinColumn(name = "question_id")
// 	private Question question;
// }

package com.server.domain.account.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.server.domain.answer.entity.Answer;
import com.server.domain.question.entity.Question;
import com.server.domain.reply.entity.Reply;
import com.server.domain.vote.entity.Vote;
import com.server.global.auditing.TimeStamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account extends TimeStamp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_id")
	private Long accountId;

	@Column(name = "account_name")
	private String accountName;

	@Column(name = "account_email")
	private String accountEmail;

	@Column(name = "account_password")
	private String accountPassword;

	@OneToMany(mappedBy = "account")
	@Builder.Default
	private List<Question> questions = new ArrayList<>();

	@OneToMany(mappedBy = "account")
	@Builder.Default
	private List<Answer> answers = new ArrayList<>();

	@OneToMany(mappedBy = "account", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@Builder.Default
	private List<Authority> roles = new ArrayList<>();

	@OneToMany(mappedBy = "account", cascade = CascadeType.REMOVE)
	@Builder.Default
	private List<Vote> votes = new ArrayList<>();

	@OneToMany(mappedBy = "account")
	@Builder.Default
	private List<Reply> replies = new ArrayList<>();

	public void setRoles(List<Authority> role) {
		this.roles = role;
		role.forEach(o -> o.setMember(this));
	}
}
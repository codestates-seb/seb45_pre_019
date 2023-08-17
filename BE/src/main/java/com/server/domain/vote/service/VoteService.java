package com.server.domain.vote.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.server.domain.question.entity.Question;
import com.server.domain.question.service.QuestionService;
import com.server.domain.vote.entity.Vote;
import com.server.domain.vote.repository.VoteRepository;

import lombok.RequiredArgsConstructor;



@Service
public class VoteService {

	private final VoteRepository voteRepository;
	private final QuestionService questionService;

	public VoteService(VoteRepository voteRepository, QuestionService questionService) {
		this.voteRepository = voteRepository;
		this.questionService = questionService;
	}

	@Transactional
	public Vote createVote(Vote vote, String status) {

		// 처음 등록하는 Vote
		if(isVoteExists(vote.getAccount().getAccountId(), vote.getQuestion().getQuestionId()) == false) {

			// 등록된 질문인지 확인
			Question question = questionService.verifiedExistsQuestion(vote.getQuestion().getQuestionId());

			if(status.equals("good")) {
				vote.setStatus(Vote.voteStatus.GOOD);
			} else if (status.equals("bad")) {
				vote.setStatus(Vote.voteStatus.BAD);
			}
			question.addVoteCount(vote);

			return voteRepository.save(vote);

			// 등록된 Vote인 경우
		} else {
			Vote findVote = getExistsVote(vote.getAccount().getAccountId(), vote.getQuestion().getQuestionId());

			// 등록된 질문인지 확인
			Question findQuestion = questionService.verifiedExistsQuestion(findVote.getQuestion().getQuestionId());

			// 투표 수정
			if((findVote.getStatus() == Vote.voteStatus.GOOD || findVote.getStatus() == null) && status.equals("bad")) {
				findVote.setStatus(Vote.voteStatus.BAD);
			} else if ((findVote.getStatus() == Vote.voteStatus.BAD || findVote.getStatus() == null) && status.equals("good")) {
				findVote.setStatus(Vote.voteStatus.GOOD);
			}

			// 투표 취소
			else if (findVote.getStatus() == Vote.voteStatus.GOOD && status.equals("good")) {
				findVote.setStatus(null);
			} else if (findVote.getStatus() == Vote.voteStatus.BAD && status.equals("bad")) {
				findVote.setStatus(null);
			}

			findQuestion.calculateVoteCount();

			return voteRepository.save(findVote);
		}

	}

	private boolean isVoteExists(Long accountId, Long questionId) {
		int count = voteRepository.countByAccountIdAndQuestionId(accountId, questionId);
		return count > 0; // true : 존재, 0 보다 작으면 false : 처음
	}

	// accountId와 questionId에서 가지는 vote 가져오기
	public Vote getExistsVote(Long accountId, Long questionId) {
		return voteRepository.findByAccountAccountIdAndQuestionQuestionId(accountId, questionId);
	}


}




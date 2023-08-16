package com.server.domain.account.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.domain.account.entity.Account;

@Transactional
public interface AccountRepository extends JpaRepository<Account, Long> {
	Optional<Account> findByAccountEmail(String email);
}
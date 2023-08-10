package com.server.domain.account.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.domain.account.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
}

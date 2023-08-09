package com.server.global.common.dto;

import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SingleResDto<T> {

	T data;

}


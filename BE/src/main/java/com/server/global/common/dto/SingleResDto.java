package com.server.global.common.dto;

import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.ResponseEntity;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SingleResDto<T> {

	@ApiModelProperty(value = "단일 데이터")
	T data;

}


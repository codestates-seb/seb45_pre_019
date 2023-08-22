package com.server.global.common.dto;

import java.util.List;

import org.springframework.data.domain.Page;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "페이지네이션 결과 응답 형식")
public class PageDto<T> {
	@ApiModelProperty(value = "조회한 결과 데이터의 목록")
	private List<T> content;

	@ApiModelProperty(value = "전체 페이지 개수")
	private int totalPages;

	@ApiModelProperty(value = "전체 결과 개수")
	private long totalElements;

	@ApiModelProperty(value = "첫 번째 페이지인지 여부")
	private boolean first;

	@ApiModelProperty(value = "마지막 페이지인지 여부")
	private boolean last;

	@ApiModelProperty(value = "다음 페이지가 있는지 여부")
	private boolean hasNext;

	@ApiModelProperty(value = "이전 페이지가 있는지 여부")
	private boolean hasPrevious;

	@ApiModelProperty(value = "결과가 정렬된 상태인지 여부")
	private boolean sorted;

	@ApiModelProperty(value = "한 페이지에 존재하는 데이터의 개수")
	private int size;

	@ApiModelProperty(value = "현재 페이지 번호")
	private int pageNumber;

	@ApiModelProperty(value = "현재 페이지에 존재하는 데이터의 개수")
	private int numberOfElements;

	public PageDto(Page<T> page) {
		content = page.getContent();
		totalPages = page.getTotalPages();
		totalElements = page.getTotalElements();
		first = page.isFirst();
		last = page.isLast();
		hasNext = page.hasNext();
		hasPrevious = page.hasPrevious();
		sorted = page.getSort().isSorted();
		size = page.getSize();
		pageNumber = page.getNumber() + 1;
		numberOfElements = page.getNumberOfElements();
	}
}

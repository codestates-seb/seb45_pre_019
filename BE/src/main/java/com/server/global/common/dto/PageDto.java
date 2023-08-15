package com.server.global.common.dto;

import java.util.List;

import org.springframework.data.domain.Page;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PageDto<T> {

	private List<T> content;

	private int totalPages;

	private long totalElements;

	private boolean first;

	private boolean last;

	private boolean hasNext;

	private boolean hasPrevious;

	private boolean sorted;

	private int size;

	private int pageNumber;

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

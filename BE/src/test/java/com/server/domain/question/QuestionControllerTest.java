// package com.server.domain.question;
//
// import static org.hamcrest.Matchers.is;
// import static org.hamcrest.Matchers.startsWith;
// import static org.mockito.BDDMockito.given;
// import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
// import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//
// import org.junit.jupiter.api.Test;
// import org.mockito.Mockito;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
// import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
// import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.boot.test.mock.mockito.MockBean;
// import org.springframework.http.MediaType;
// import org.springframework.test.web.servlet.MockMvc;
// import org.springframework.test.web.servlet.ResultActions;
//
// import com.google.gson.Gson;
// import com.server.domain.question.controller.QuestionController;
// import com.server.domain.question.dto.QuestionDto;
// import com.server.domain.question.entity.Question;
// import com.server.domain.question.mapper.QuestionMapper;
// import com.server.domain.question.service.QuestionService;
//
// @WebMvcTest(QuestionController.class)
// @AutoConfigureMockMvc
// @AutoConfigureRestDocs
// public class QuestionControllerTest {
// 	@Autowired
// 	private MockMvc mockMvc;
//
// 	@Autowired
// 	private Gson gson;
//
// 	@MockBean
// 	private QuestionMapper mapper;
//
// 	@MockBean
// 	private QuestionService questionService;
//
//
// 	@Test
// 	void postQuestionTest() throws Exception {
// 		// given
// 		QuestionDto.Post post = new QuestionDto.Post("제목1", "제목입니다.");
//
// 		Question question = mapper.questionPostDtoToQuestion(post);
//
//
// 		given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(question);
//
// 		String content = gson.toJson(post);
//
// 		// when
// 		ResultActions actions = mockMvc.perform(
// 													post("/questions/post")
// 														.accept(MediaType.APPLICATION_JSON)
// 														.contentType(MediaType.APPLICATION_JSON)
// 														.content(content)
// 												);
//
//
// 		// then
// 		actions
// 			.andExpect(status().isCreated())
// 			.andExpect(header().string("Location", is(startsWith("/questions/post/"))));
//
//
// 	}
//
//
//
//
// }

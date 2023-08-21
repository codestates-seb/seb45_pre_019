package com.server.global.swagger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import springfox.documentation.annotations.ApiIgnore;

@Controller
@RequestMapping("/doby/api")
@ApiIgnore
public class SwaggerController {
	@GetMapping
	public String api() { return "redirect:/swagger-ui/index.html#"; }
}
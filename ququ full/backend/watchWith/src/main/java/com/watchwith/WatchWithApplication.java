package com.watchwith;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication(scanBasePackages = "com.watchwith.controller, com.watchwith.repository, com.watchwith.service, com.watchwith.configuration, com.watchwith.model, com.watchwith.filter")
@EnableWebMvc
public class WatchWithApplication {

    public static void main(String[] args) {
        SpringApplication.run(WatchWithApplication.class, args);
    }

}

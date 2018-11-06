package com.naren.jhipster.cucumber.stepdefs;

import com.naren.jhipster.MySampleApplicationApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = MySampleApplicationApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}

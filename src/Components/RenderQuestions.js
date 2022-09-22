import React, { useState } from "react";
import BooleanQuestion from "./BooleanQuestion";
import SliderQuestion from "./SliderQuestion";
import TrippleQuestion from "./TrippleQuestion";
import { questions } from "./QuestionData";
import CompoundQuestion from "./CompoundQuestion";
import Header from "./Header";

const RenderQuestions = ({ sectionQuestions }, { formData }, { updateForm }) => {
  console.log("Hello")

  let comp = sectionQuestions.map((q) => {
    switch (true) {
      case q.type === "header":
        console.log("Hello this is header")
        return (<Header header={q.header}
          explanation={q.explanation}
        />);
      case q.type == 0:
        console.log("In boolean");
        return (
          <BooleanQuestion
            name={q.name}
            section={q.section}
            question={q.question}
            form={formData}
            updateForm={updateForm}
          />
        );
      case q.type == 1:
        return (
          <SliderQuestion
            name={q.name}
            section={q.section}
            question={q.question}
            form={formData}
            updateForm={updateForm}
            type={q.type}
          />
        );

      case q.type == 2:
        return (
          <TrippleQuestion
            name={q.name}
            section={q.section}
            question={q.question}
            form={formData}
            updateForm={updateForm}
            labelset="1"
          />
        );
      case q.type == 3:
        return (
          <TrippleQuestion
            name={q.name}
            section={q.section}
            question={q.question}
            form={formData}
            updateForm={updateForm}
            labelset="2"
          />
        );
      case q.type == 3:
        return (
          <TrippleQuestion
            name={q.name}
            section={q.section}
            question={q.question}
            form={formData}
            updateForm={updateForm}
            labelset="2"
          />
        );

      case q.type == 4:
        return (
          <CompoundQuestion
            name={q.name}
            section={q.section}
            question={q.question}
            form={formData}
            updateForm={updateForm}
          />
        );

      case q.type == 5:
        return (
          <SliderQuestion
            name={q.name}
            section={q.section}
            question={q.question}
            form={formData}
            updateForm={updateForm}
            type={q.type}
          />
        );

      default:
        console.log("Hello 2");
        return <h1>Hello</h1>;
    }
  });
  return <><fieldset>{comp}</fieldset></>;
};

export default RenderQuestions;

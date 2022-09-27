import React from "react";
import Header from "./Header";
import TrippleQuestion from "./TrippleQuestion";
import SliderQuestion from "./SliderQuestion";
import BooleanQuestion from "./BooleanQuestion";
import CompoundQuestion from './CompoundQuestion';
import BooleanWithFollowUp from './BooleanWithFollowUp';

const RenderSection = (props) => {
  if(props.show){
    let comp = props.sectionQuestions.map((q) => {
      
        switch (true) {
          case q.type === "header":
            return (<Header header = {q.header}
                            explanation = {q.explanation}
                            />);
          case q.type == 0:
            return (
              <BooleanQuestion
                name={q.name}
                section={q.section}
                question={q.question}
                formData={props.formData}
                updateForm={props.updateForm}
              />
            );
          case q.type == 1:
            return (
              <SliderQuestion
                name={q.name}
                section={q.section}
                question={q.question}
                formData={props.formData}
                updateForm={props.updateForm}
                type={q.type}
              />
            );
    
          case q.type == 2:
            return (
              <TrippleQuestion
                name={q.name}
                section={q.section}
                question={q.question}
                formData={props.formData}
                updateForm={props.updateForm}
                labelset="1"
              />
            );
          case q.type == 3:
            return (
              <TrippleQuestion
                name={q.name}
                section={q.section}
                question={q.question}
                formData={props.formData}
                updateForm={props.updateForm}
                labelset="2"
              />
            );
        
          case q.type == 4:
            return (
              <CompoundQuestion
                name={q.name}
                section={q.section}
                question={q.question}
                formData={props.formData}
                updateForm={props.updateForm}
              />
            );
    
          case q.type == 5:
            return (
              <SliderQuestion
                name={q.name}
                section={q.section}
                question={q.question}
                formData={props.formData}
                updateForm={props.updateForm}
                type={q.type}
              />
            );
            case q.type == 6:
              return (
                <BooleanWithFollowUp
                  name={q.name}
                  nameA = {q.nameA}
                  question = {q.question}
                  questionA = {q.questionA}
                  nameB = {q.nameB}
                  questionB = {q.questionB}
                  nameC = {q.nameC}
                  questionC = {q.questionC}
                  nameD = {q.nameD}
                  questionD = {q.questionD}
                  section={q.section}
                  formData={props.formData}
                  updateForm={props.updateForm}
                  type={q.type}
                />
              );
        }
      });
      return(<><fieldset>{comp}</fieldset></>)
    }
};

export default RenderSection;
import React from "react";
import BooleanQuestion from "./BooleanQuestion";


const BooleanwithFollowUp = (props) => {
    console.log(props.formData["Q17"]);
  if (props.formData["Q17"] === "Yes") {
    return (
      <fieldset>
        <BooleanQuestion
          name={props.name}
          section={props.section}
          question={props.question}
          formData={props.formData}
          updateForm={props.updateForm}
        />
        <BooleanQuestion
          name={props.nameA}
          section={props.section}
          question={props.questionA}
          formData={props.formData}
          updateForm={props.updateForm}
        />
        <BooleanQuestion
          name={props.nameB}
          section={props.section}
          question={props.questionB}
          formData={props.formData}
          updateForm={props.updateForm}
        />
        <BooleanQuestion
          name={props.nameC}
          section={props.section}
          question={props.questionC}
          formData={props.formData}
          updateForm={props.updateForm}
        />
        <BooleanQuestion
          name={props.nameD}
          section={props.section}
          question={props.questionD}
          formData={props.formData}
          updateForm={props.updateForm}
        />
      </fieldset>
    );
  } else if (props.formData["Q17"] === "" || props.formData["Q17"] === "No") {
    return (
      <fieldset>
        <BooleanQuestion
          name={props.name}
          section={props.section}
          question={props.question}
          formData={props.formData}
          updateForm={props.updateForm}
        />
      </fieldset>
    );
  }
};
export default BooleanwithFollowUp;

import React from "react";
import RenderQuestions from "./RenderQuestions";



const Section = (props) => {
  if(props.show){
  return(<fieldset>

    renderQuestions({props.sectionQuestions},{props.updateForm},{props.formData})

  </fieldset>);
  }
  else{

  }
};

export default Section;
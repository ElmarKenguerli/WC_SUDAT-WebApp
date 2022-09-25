import React from "react";

function ScreeningMessage(props) {
  return <div><fieldset>
    <h1>Based on answers provided to the first 10 questions{` ${props.formData["N1"]} `}
    is not required to complete the rest of the SUD Assessment. Click 'finish' unless you wish to
    to proceed anyway click 'Continue Anyway' </h1>

    </fieldset>
    </div>
}

export default ScreeningMessage;

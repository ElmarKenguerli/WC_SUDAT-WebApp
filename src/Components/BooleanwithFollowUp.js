import React from "react";
import BooleanQuestion from './BooleanQuestion';

const BooleanwithFollowUp = (props) => {
    console.log(props.form["Q1"])
    if(props.form["Q17"]=="Yes"){
        return(<fieldset>
            <BooleanQuestion
                name={props.name}
                section={props.section}
                question={props.question}
                form={props.form}
                updateForm={props.updateForm}
            />
                        <BooleanQuestion
                name={props.nameA}
                section={props.section}
                question={props.questionA}
                form={props.form}
                updateForm={props.updateForm}
            />
            <BooleanQuestion
                name={props.nameB}
                section={props.section}
                question={props.questionB}
                form={props.form}
                updateForm={props.updateForm}
            />
            <BooleanQuestion
                name={props.nameC}
                section={props.section}
                question={props.questionC}
                form={props.form}
                updateForm={props.updateForm}

            />
            <BooleanQuestion
                name={props.nameD}
                section={props.section}
                question={props.questionD}
                form={props.form}
                updateForm={props.updateForm}
            />
            </fieldset>
        )
    }
    else if(props.form["Q17"]=="" || props.form["Q17"]=="No"){
        console.log("IN BOOLFOLLOWUP2");
        return(
        <fieldset>
            <BooleanQuestion
                name={props.name}
                section={props.section}
                question={props.question}
                form={props.form}
                updateForm={props.updateForm}
            />

        </fieldset>
        )
    }
};
export default BooleanwithFollowUp;

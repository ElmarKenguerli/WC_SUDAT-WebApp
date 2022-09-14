import React from 'react'
import BooleanQuestion from '../Components/BooleanQuestion'
import { Collapsible } from './Screening'

const FollowUpQuestions = (props) => {
  return (
    <>
        <div name="screening">
            <fieldset>
            <fieldset>
                <BooleanQuestion
                    name = "Q6"
                    question = "6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in"
                    number = "6"
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    />
            <Collapsible/>
            </fieldset>
            <fieldset>
                <BooleanQuestion
                    name = "Q7"
                    question = "7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?"
                    number = "Q7"
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                />
                <Collapsible/>
            </fieldset>
            <fieldset>
                <BooleanQuestion
                    name = "Q8"
                    question = "8. Do you ever FORGET things you did while using alcohol or drugs? "
                    number = "Q8 "
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                />
            <Collapsible/>
            </fieldset>
            <fieldset>
                <BooleanQuestion
                    name = "Q9"
                    question = "9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?"
                    number ="Q9"
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                />
                <Collapsible/>
            </fieldset>
            <fieldset>
                <BooleanQuestion
                    name = "Q10"
                    question = "10. Have you ever gotten into TROUBLE while you were using alcohol or drugs" 
                    number = "Q10"
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {true}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                />
                <Collapsible/>
            </fieldset>
            </fieldset>
        </div>
        <h2> Substance Use Screening </h2>
        <div name = 'Risk Factors'>
            <fieldset>
                <BooleanQuestion
                    name = "Q11"
                    question = "In the past few weeks, have you wished you were dead? " 
                    number = "Q11"
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {true}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                />
                <Collapsible/>
                <BooleanQuestion
                    name = "Q12"
                    question = "In the past few weeks, have you felt that you or  your family would be better off you were dead? " 
                    number = "Q12"
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {true}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                />
                <Collapsible/>
                <BooleanQuestion
                    name = "Q13"
                    question = "In the past week, have you been having thoughts about killing yourself? " 
                    number = "Q13"
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {true}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                />
                <Collapsible/>
            </fieldset>
        </div>
    </>
    )
}

export default FollowUpQuestions

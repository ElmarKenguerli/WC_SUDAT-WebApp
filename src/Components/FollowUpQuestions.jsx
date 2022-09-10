import React from 'react'
import BooleanQuestion from '../Components/BooleanQuestion'
import { Collapsible } from './Screening'

const FollowUpQuestions = (props) => {
  return (
    <div name="screening">

        <fieldset>

         <fieldset>
            <BooleanQuestion
             question = "6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in"
             number = "6"
             form = {props.answers}
             updateForm = {props.updateForm}
              />
         <Collapsible/>
         </fieldset>

         <fieldset>
             <BooleanQuestion
             question = "7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?"
             number = "7"
              form = {props.answers}
              updateForm = {props.updateForm}
              />
             <Collapsible/>
         </fieldset>

         <fieldset>
             <BooleanQuestion
             question = "8. Do you ever FORGET things you did while using alcohol or drugs? "
             number = "8 "
            form = {props.answers}
            updateForm = {props.updateForm}
            />
         <Collapsible/>
         </fieldset>

         <fieldset>
             <BooleanQuestion
             question = "9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?"
             number ="9"
             form = {props.answers}
             updateForm = {props.updateForm}/>

             <Collapsible/>
         </fieldset>

         <fieldset>
             <BooleanQuestion
             question = "10. Have you ever gotten into TROUBLE while you were using alcohol or drugs" 
             number = "10"
             form = {props.answers}
             updateForm = {props.updateForm}/>
             <Collapsible/>
         </fieldset>
         </fieldset>
    </div>
  )
}

export default FollowUpQuestions

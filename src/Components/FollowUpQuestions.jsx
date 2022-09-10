import React from 'react'
import BooleanQuestion from '../Components/BooleanQuestion'
import { Collapsible } from './Screening'

const FollowUpQuestions = (props) => {
  return (
    <div name="screening">

        <fieldset>

         <fieldset>
            <BooleanQuestion
             name = "Q6"
             question = "6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in"
             number = "6"
             form = {props.answers}
             updateForm = {props.updateForm}
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
            />
         <Collapsible/>
         </fieldset>

         <fieldset>
             <BooleanQuestion
             name = "Q9"
             question = "9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?"
             number ="Q9"
             form = {props.answers}
             updateForm = {props.updateForm}/>

             <Collapsible/>
         </fieldset>

         <fieldset>
             <BooleanQuestion
             name = "Q10"
             question = "10. Have you ever gotten into TROUBLE while you were using alcohol or drugs" 
             number = "Q10"
             form = {props.answers}
             updateForm = {props.updateForm}/>
             <Collapsible/>
         </fieldset>
         </fieldset>
    </div>
  )
}

export default FollowUpQuestions

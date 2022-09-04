import React from 'react'
import BooleanQuestion from '../Components/BooleanQuestion'
import { Collapsible } from './Screening'

const FollowUpQuestions = () => {
  return (
    <div name="screening">

        <fieldset>

         <fieldset>
            <p>6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in</p>
            <BooleanQuestion/>
         <Collapsible/>
         </fieldset>

         <fieldset>
             <p>7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?</p>
             <BooleanQuestion />
             <Collapsible/>
         </fieldset>

         <fieldset>
             <p>8. Do you ever FORGET things you did while using alcohol or drugs?</p>
             <BooleanQuestion/>
         <Collapsible/>
         </fieldset>

         <fieldset>
            <p>9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?</p>
             <BooleanQuestion/>
             <Collapsible/>
         </fieldset>

         <fieldset>
            <p>10. Have you ever gotten into TROUBLE while you were using alcohol or drugs</p>
             <BooleanQuestion/>
             <Collapsible/>
         </fieldset>
         </fieldset>
    </div>
  )
}

export default FollowUpQuestions

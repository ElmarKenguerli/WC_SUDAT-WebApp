import React from 'react'
import BooleanQuestion from '../Components/BooleanQuestion'
import { Collapsible } from './Screening'

const FollowUpQuestions = () => {
  return (
    <div name="screening">
        <fieldset>
        <BooleanQuestion question={"6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in"}/>
        <Collapsible/>
        </fieldset>

        <fieldset>
            <BooleanQuestion question={"7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?"}/>
            <Collapsible/>
        </fieldset>

        <fieldset>
            <BooleanQuestion question={"8. Do you ever FORGET things you did while using alcohol or drugs?"}/>
            <Collapsible/>
        </fieldset>

        <fieldset>
            <BooleanQuestion question={"9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?"}/>
            <Collapsible/>
        </fieldset>

        <fieldset>
            <BooleanQuestion question={"10. Have you ever gotten into TROUBLE while you were using alcohol or drugs"}/>
            <Collapsible/>
        </fieldset>
    </div>
  )
}

export default FollowUpQuestions

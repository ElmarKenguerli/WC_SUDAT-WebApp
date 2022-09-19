import React, { useState } from 'react'
import BooleanQuestion from '../Components/BooleanQuestion'
import { Collapsible } from './Screening'
import SliderQuestion from './SliderQuestion'
import TrippleQuestion from './TrippleQuestion'
import SixSliderQuestion from './SixSliderQuestion'
import TempSliderQuestion from './TempSliderQuestion'
import {Radio, FormControl, RadioGroup, FormControlLabel } from '@material-ui/core';
const FollowUpQuestions = (props) => {
  return (
    <>
    <div className="screening">
        <fieldset>
            <fieldset>         
            <BooleanQuestion
                name = "Q6"
                question = "6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in"
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
            />
            
         </fieldset>
         <fieldset>
             <BooleanQuestion
                name = "Q7"
                question = "7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?"
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
            />
            
         </fieldset>
         <fieldset>
            <BooleanQuestion
                name = "Q8"
                question = "8. Do you ever FORGET things you did while using alcohol or drugs? "
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
            />
            
         </fieldset>
         <fieldset>
            <BooleanQuestion
                name = "Q9"
                question = "9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?"
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
            />
             
            </fieldset>
            <fieldset>
                <BooleanQuestion
                    name = "Q10"
                    question = "10. Have you ever gotten into TROUBLE while you were using alcohol or drugs" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {true}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                />
                
            </fieldset>
        </fieldset>
    </div>
    <h2> Risk Factors </h2>
    <div name = 'Risk Factors'>
        <fieldset>
            <fieldset>
                <BooleanQuestion
                    name = "Q11"
                    question = "11. In the past few weeks, have you wished you were dead? " 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    />
            </fieldset>
            <fieldset>
             <BooleanQuestion
                name = "Q12"
                question = "12. In the past few weeks, have you felt that you or  your family would be better off you were dead? " 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
             />
             </fieldset>
             <fieldset>
             <BooleanQuestion
                name = "Q13"
                question = "13. In the past week, have you been having thoughts about killing yourself? " 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState} 
            />
             </fieldset>
            {/* TO DO: Only show if 13 answered yes */}
            <fieldset>
            <BooleanQuestion
                name = "Q13.1"
                question = "13.1 Do you have a plan for taking your own life?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            />
            {/* TO DO: Only show if 13 answered yes */}
            </fieldset>
            <fieldset>
            <BooleanQuestion
                name = "Q13.2"
                question = "13.2 Do you have the means of taking your life?"                 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
                />
            </fieldset>

            <fieldset>
            <BooleanQuestion
                name = "Q14"
                question = "14. In the past few weeks have you noticed a significant increase in your substance use?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            />
            </fieldset>

            <fieldset>
        {/* TO DO: Only show if 14 answered yes */}
            <BooleanQuestion
                name = "Q14.1"
                question = "14.1 Did you find yourself in potentially harmful situations?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            />
            </fieldset>
            <fieldset>
            <BooleanQuestion
                name = "Q14.2"
                question = "14.2 Did you find yourself engaging in potentially harmful behavior?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            />
            </fieldset>
            <fieldset>
            <BooleanQuestion
                name = "Q15"
                question = "15. Have you ever tried to kill yourself?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            />
            </fieldset>
             <fieldset>
             <BooleanQuestion
                name = "Q15.1"
                question = "15.1 How?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
             />
             </fieldset>
             <fieldset>
             <BooleanQuestion
                name = "Q15.2"
                question = "15.2 When?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            />
            </fieldset>
            <fieldset>
            <BooleanQuestion
                name = "Q15.3"
                question = "15.3 Where?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            />
            </fieldset>

            <fieldset>
            <BooleanQuestion
                name = "Q16"
                question = "16. Would you say that you able to take care of yourself?"
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {true}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
            /> 
         </fieldset>
         <h2> Trauma </h2>
         <div name = "Trauma">
            <fieldset>
                <fieldset>
            <BooleanQuestion
                name = "Q17"
                question = "17. Have you ever in your lifetime experienced anything that has been especially horrific, frightening or traumatic ?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
             />
             </fieldset>
             
             <fieldset>
             <BooleanQuestion
                name = "Q17"
                question = "17 Have you ever in your lifetime experienced anything that has been especially horrific, frightening or traumatic ?" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
             />
             </fieldset>
             <fieldset>
             <BooleanQuestion
             name = "Q17.1"
             question ="17.1 In the past 30 days have you had nightmares about it or thought about it when you did not want to"  
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />
             </fieldset>
             <fieldset>
             <BooleanQuestion
                name = "Q17.2"
                question = "17.2 In the past 30 days tried not to think about it or went out of your way to avoid situations that remind you of your experience"
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
             />
             </fieldset>

             <fieldset>
             <BooleanQuestion
                name = "Q17.3"
                question = "17.3 In the past 30 days you were constantly on guard, watchful or easily startled " 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
             />
             </fieldset>
             <fieldset>
             <BooleanQuestion
                name = "Q17.4"
                question = "In the past 30 days you felt numb or detached from others, activities, or your surroundings related to your experience" 
                form = {props.answers}
                updateForm = {props.updateForm}
                stepperUpdate = {false}
                stepperForward = {props.stepperForward}
                stepperState = {props.stepperState}
             />
             </fieldset>.
            </fieldset>
         </div>

         <h2> Depression and Anxiety</h2>
         <fieldset>For the following statements say whether they DESCRIBE YOU, SOMEWHAT DESCRIBE YOU or DO NOT DESCRIBE YOU</fieldset>
         <div className='screening'>
            <fieldset>
                <fieldset>
                <TrippleQuestion
                    name = "Q18"
                    question = "18. I like who I am" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    label1 = "Descibes me "
                    label2 = "Some what describes me"
                    label3 = "Does not describe me"
                />
                </fieldset>

                <fieldset>
                <TrippleQuestion
                    name = "Q19"
                    question = "19. I am not an easy person to get along with" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    label1 = "Descibes me "
                    label2 = "Some what describes me"
                    label3 = "Does not describe me"
                />
                </fieldset>
                <fieldset>
                <TrippleQuestion
                    name = "Q20"
                    question = "20. I give up too easily" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    label1 = "Descibes me "
                    label2 = "Some what describes me"
                    label3 = "Does not describe me"
                />
                </fieldset>
                <fieldset>
                <TrippleQuestion
                    name = "Q21"
                    question = "21. I have difficulty concentrating" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    label1 = "Descibes me "
                    label2 = "Some what describes me"
                    label3 = "Does not describe me"
                />
                </fieldset>

                <fieldset>
                <TrippleQuestion
                    name = "Q22"
                    question = "22. I am happy with my family relationships" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    label1 = "Descibes me "
                    label2 = "Some what describes me"
                    label3 = "Does not describe me"
                />
                </fieldset>

                <fieldset>
                <TrippleQuestion
                    name = "Q23"
                    question = "23. I am comfortable being around others" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    label1 = "Descibes me "
                    label2 = "Some what describes me"
                    label3 = "Does not describe me"
                />
                </fieldset>
                </fieldset>
                <fieldset>For the following statements answer NONE, SOME WHAT or A LOT</fieldset>
                <fieldset>

                <fieldset>
                <TrippleQuestion
                    name = "Q24"
                    question = "24. During the past week how much have you had trouble with sleeping" 
                    form = {props.answers}
                    updateForm = {props.updateForm}
                    stepperUpdate = {false}
                    stepperForward = {props.stepperForward}
                    stepperState = {props.stepperState}
                    label1 = "None"
                    label2 = "Some what"
                    label3 = "A lot"
                />
                </fieldset>

                <fieldset>
                <TrippleQuestion
               name = "Q25"
               question = "25. During the last week have you felt yourself getting tired easily? " 
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                </fieldset>

            <fieldset>
            <TrippleQuestion
               name = "Q26"
               question = "26. During the past week have you felt sad or depressed" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                </fieldset>
            
            <fieldset>
            <TrippleQuestion
               name = "Q27"
               question = "27. During the past week have you felt nervous or anxious" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                </fieldset>
                
                <fieldset>
                <TrippleQuestion
               name = "Q28"
               question = "28. During the past week have you socialised with others(talk with or visit friends/relatives)" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                </fieldset>
                
                <fieldset>
                <TrippleQuestion
               name = "Q29"
               question = "29. During the past week have you taken part in social, religious or recreational activities(sports,meetings,religious meetings & parties" 
              
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                </fieldset>
                

        
       </fieldset>
        </div>

         
         <h2>Family & Community Risk Factors</h2>
        <div classname = 'screening'>
        <fieldset>
            <fieldset>
            <SixSliderQuestion
            name = "Q30"
            
            booleanQuestion = "30. Does your family have a history of substance abuse?"
            booleanQuestionNumber = "Q30a"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
            <fieldset>
            <SixSliderQuestion
            name = "Q31"
            
            booleanQuestion = "31. Would you say that your parents have favourable attitudes towards substance use or abuse?"
            booleanQuestionNumber = "Q31a"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
            
            <fieldset>
            <SixSliderQuestion
            name = "Q32"
            
            booleanQuestion = "32. Would you say that growing up your parents monitored your behaviour poorly?"
            booleanQuestionNumber = "Q32a"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            name = "Q33"
            
            booleanQuestionNumber = "Q33a"
            booleanQuestion = "33. Do your parents have a history of substance use?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            name = "Q34"
            
            booleanQuestionNumber = "Q34a"
            booleanQuestion = "34. Did you ever feel rejected by your family for your sexual orientation or gender identity?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            booleanQuestionNumber = "Q35a"
            name = "Q35"
            
            booleanQuestion = "35. Did you ever associate with substance using peers?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
            
            <fieldset>
            <SixSliderQuestion
            name = "Q36"
            
            booleanQuestionNumber = "Q36a"
            booleanQuestion = " 36. Growing up did you ever feel a lack of school connectedness? (Belief held by learners that adults and peers in the school care about their learning as well as about them as individuals)"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            name = "Q37"
            
            booleanQuestionNumber = "Q37a"
            booleanQuestion = " 37. Would you describe your overall academic achievement as low?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            name = "Q38"
            
            booleanQuestionNumber = "Q38a"
            booleanQuestion = "38. Did you ever drop out of school, leave or stay away from school for extended periods of time?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            name = "Q39"
            
            booleanQuestionNumber = "Q39a"
            booleanQuestion = "39. Is your community characterised by low sense of belonging where it feels like people don’t care about others?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </fieldset>
            
            <fieldset>
            <SixSliderQuestion
            name = "Q40"
            
            booleanQuestionNumber = "Q40a"
            booleanQuestion = "40. Would you say that drugs & alcohol are freely available and easy to get in your community?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            name = "Q41"
            
            booleanQuestionNumber = "Q41a"
            booleanQuestion = "41. Would you say that your community is marked by high levels of violence, poverty and unemployment?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>

            <fieldset>
            <SixSliderQuestion
            name = "Q42"
            
            booleanQuestionNumber = "Q42a"
            booleanQuestion = "42. Would you say that your community have norms and laws that are favourable toward drug use, firearms, and crime?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
            
        </fieldset>
        <h2>Protective Factors</h2>
        <div classname = "screening">
        <fieldset>
            <fieldset>
        <SixSliderQuestion
            name = "Q43"
            
            booleanQuestionNumber = "Q43a"
            booleanQuestion = "43. Growing up did you feel that your parent/s or family were involved with you showing an interest in your well-being?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
        <fieldset>
        <SixSliderQuestion
            name = "Q44"
            
            booleanQuestionNumber = "Q44a"
            booleanQuestion = "44. Growing up did you feel that to your parent/s and family supported healthy attitudes, behaviors, and a positive living environment?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
        <fieldset>
        <SixSliderQuestion
            name = "Q45"
            
            booleanQuestionNumber = "Q45a"
            booleanQuestion = "45. Growing up did you feel that your parent/s showed disapproval for substance use?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>

        <fieldset>
        <SixSliderQuestion
            name = "Q46"
            
            booleanQuestionNumber = "Q46"
            booleanQuestion = "46. Growing up did you feel that your parent/s helped you to build trusting relationships with others to talk about sensitive issues such as sexual and mental health, substance use, and safety from bullying"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <SixSliderQuestion
            name = "Q47"
            booleanQuestionNumber = "Q47a"
            booleanQuestion = "47. Growing up did you feel that your parent/s used effective monitoring practices to help you make healthy decisions and avoid risky behaviors? (For example, unprotected sex, underage drinking and smoking)"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        </fieldset>

        <fieldset>
        <SixSliderQuestion
            name = "Q48"
            
            booleanQuestionNumber = "Q48a"
            booleanQuestion = "48. Would you say that your community have norms and laws that are favourable toward drug use, firearms, and crime?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        <fieldset>
        <SixSliderQuestion
            name = "Q49"
            
            booleanQuestionNumber = "Q49a"
            booleanQuestion = "49. Do you mostly associate with positive peers and friends?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        <fieldset>
        <SixSliderQuestion
            name = "Q50"
            
            booleanQuestionNumber = "Q50a"
            booleanQuestion = "50. Growing up did you feel a strong sense of school connectedness? (Belief held by students that adults and peers in the school care about their learning as well as about them as individuals)"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <SixSliderQuestion
            name = "Q51"
            
            booleanQuestionNumber = "Q51a"
            booleanQuestion = "51. Would you describe your overall academic achievement as good? "
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
            <fieldset>
            <SixSliderQuestion
            name = "Q52"
            
            booleanQuestionNumber = "Q52a"
            booleanQuestion = "52. Would you describe your community as safe? "
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
        <fieldset>
        <SixSliderQuestion
            name = "Q53"
            
            booleanQuestionNumber = "Q53a"
            booleanQuestion = "53. Do you feel that people in your community and neighbourhood are supportive and connected to each other?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <SixSliderQuestion
            name = "Q54"
            
            booleanQuestionNumber = "Q54a"
            booleanQuestion = "54. Do you feel that there are a range of opportunities in the community for meaningful youth engagement?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>

        <fieldset>
        <SixSliderQuestion
            name = "Q55"
            
            booleanQuestionNumber = "Q55a"
            booleanQuestion = "Do you think that there are policies and practices in your community that support healthy norms and lifestyle choices?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        

        </fieldset>


        </div>
        </div>
        <h2> Change Readiness and Treatment Eagerness</h2>
        <fieldset> Please listen to the following statements carefully. Each one 
describes a way that you might (or might not) feel about your substance/alcohol use. Say whether you STRRONGLY DISAGREE, DISAGREE, UNDECIDED, AGREE or STRONGLY AGREE</fieldset>   
        <div className = 'screening'>
        <fieldset>
            <fieldset>
        <TempSliderQuestion
            name = "Q56"
            
            question = "56. I really want to make changes in my use of drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>

        <fieldset>
        <TempSliderQuestion
            name = "Q57"
            
            question = "57. Sometimes I wonder if I am an addict."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>

        <fieldset>
        <TempSliderQuestion
            name = "Q58"
            
            question = "58. If I don't change my drug/alcohol use soon, my problems are going to get worse."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <TempSliderQuestion
            name = "Q59"
            
            question = "59. I have already started making some changes in the use my use of drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        </fieldset>
 
        <fieldset>
        <TempSliderQuestion
            name = "Q60"
            
            question = "61. I was using drugs/alcohol too much at one time, but I have managed to change that."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>

        <fieldset>
        <TempSliderQuestion
            name = "Q62"
           
            question = "62. Sometimes I wonder if my drug/alcohol use is hurting people."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <TempSliderQuestion
            name = "Q63"
            
            question = "63. I have a drug/alchohol problem"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
         
         <fieldset>
        <TempSliderQuestion
            name = "Q64"
            
            question = "64. I'm not just thinking about changing my alcohol/drug use, I'm already doing something about it."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        </fieldset>

        <fieldset>
        <TempSliderQuestion
            name = "Q65"
            
            question = "65. I have already changed my drug/alcohol use, and I am looking for ways to keeps from slipping back into my old pattern."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <TempSliderQuestion
            name = "Q66"
            
            question = "66. I have serious problems with drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <TempSliderQuestion
            name = "Q67"
            
            question = "67. Sometimes I wonder if I am in control of my drug/alcohol use."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <TempSliderQuestion
            name = "Q68"
            
            question = "68. My drug/alcohol use is causing a lot of harm."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>
        <fieldset>
        <TempSliderQuestion
            name = "Q69"
            
            question = "69. I am actively doing things now to cut down or stop my use of drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>
        
        <fieldset>
        <TempSliderQuestion
            name = "Q70"
            
            question = "70. I want help to keep from going back to the drug/alcohol problems I had before."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>

        <fieldset>
        <TempSliderQuestion
            name = "Q71"
            
            question = "71. I know that I have a drug/alcohol problem"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            </fieldset>

            <fieldset>
        <TempSliderQuestion
            name = "Q72"
            question = "72. There are times when I wonder if I use drugs/alcohol too much."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
            </fieldset>
        <fieldset>
        <TempSliderQuestion
            name = "Q73"
            question = "73. I am a drug/alcohol addict."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        </fieldset>
        <fieldset>
        <TempSliderQuestion
            name = "Q74"
            question = "74. I am working hard to change my drug/alcohol use."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        </fieldset>
        <fieldset>
        <TempSliderQuestion
            name = "Q75"
            question = "75. I made some changes in my drug/alcohol use, and I want some help to keep from going back to the way I used to be before"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        </fieldset>

        </fieldset>
        </div>
        </fieldset>
    </div>
    </>
  )
}

export default React.memo(FollowUpQuestions);

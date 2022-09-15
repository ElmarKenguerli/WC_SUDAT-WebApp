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
            <Collapsible/>
         </fieldset>
         <fieldset>
             <BooleanQuestion
                name = "Q7"
                question = "7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?"
                
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
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}/>
             <Collapsible/>
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
             <Collapsible/>
         </fieldset>
         </fieldset>
    </div>
    <h2> Risk Factors </h2>
    <div name = 'Risk Factors'>
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
             <Collapsible/>
             <BooleanQuestion
             name = "Q12"
             question = "12. In the past few weeks, have you felt that you or  your family would be better off you were dead? " 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}

             
             />
             <Collapsible/>
      
             <BooleanQuestion
             name = "Q13"
             question = "13. In the past week, have you been having thoughts about killing yourself? " 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}

             
             />
             <Collapsible/>
            {/* TO DO: Only show if 13 answered yes */}
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
            <Collapsible/>
            <BooleanQuestion
             name = "Q13.2"
             question = "13.2 Do you have the means of taking your life?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />
            <Collapsible/>
            <BooleanQuestion
             name = "Q14"
             question = "14. In the past few weeks have you noticed a significant increase in your substance use?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />
             <Collapsible/>
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
             <Collapsible/>
            <BooleanQuestion
             name = "Q14.2"
             question = "14.2 Did you find yourself engaging in potentially harmful behavior?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />

            <Collapsible/>
             <BooleanQuestion
             name = "Q15"
             question = "15. Have you ever tried to kill yourself?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q15.1"
             question = "15.1 How?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q15.2"
             question = "15.2 When?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q15.3"
             question = "15.3 Where?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q16"
             question = "16. Did you find yourself engaging in potentially harmful behavior?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {true}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />
            <Collapsible/>
            <BooleanQuestion
            name = "Q17"
            question = "17. Would you say that you able to take care of yourself?"
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
            <BooleanQuestion
             name = "Q18"
             question = "18. Have you ever in your lifetime experienced anything that has been especially horrific, frightening or traumatic ?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>

             <BooleanQuestion
             name = "Q19"
             question = "19. Have you ever in your lifetime experienced anything that has been especially horrific, frightening or traumatic ?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q18.1"
             question = "Did you find yourself engaging in potentially harmful behavior?" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q18.1"
             question = "In the past 30 days you had nightmares about it or thought about it when you did not want to"
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q18.2"
             question = "In the past 30 days you tried not to think about it or went out of your way to avoid situations that remind you of your experience" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
             <BooleanQuestion
             name = "Q18.3"
             question = " In the past 30 days you were constantly on guard, watchful or easily startled" 
             
             form = {props.answers}
             updateForm = {props.updateForm}
             stepperUpdate = {false}
             stepperForward = {props.stepperForward}
             stepperState = {props.stepperState}
             />


             <Collapsible/>
            </fieldset>
         </div>

         <h2> Depression and Anxiety</h2>
         <fieldset>For the following statements say whether they DESCRIBE YOU, SOMEWHAT DESCRIBE YOU or DO NOT DESCRIBE YOU</fieldset>
         <div className='screening'>
            <fieldset>
                <TrippleQuestion
               name = "Q19"
               question = "I like who I am" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "Descibes me "
               label2 = "Some what describes me"
               label3 = "Does not describe me"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q20"
               question = "I am not an easy person to get along with" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "Descibes me "
               label2 = "Some what describes me"
               label3 = "Does not describe me"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q21"
               question = "I give up too easily" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "Descibes me "
               label2 = "Some what describes me"
               label3 = "Does not describe me"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q22"
               question = "I have difficulty concentrating" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "Descibes me "
               label2 = "Some what describes me"
               label3 = "Does not describe me"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q23"
               question = "I am happy with my family relationships" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "Descibes me "
               label2 = "Some what describes me"
               label3 = "Does not describe me"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q24"
               question = "I am comfortable around others" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "Descibes me "
               label2 = "Some what describes me"
               label3 = "Does not describe me"

                />
                <Collapsible/>
                </fieldset>
                <fieldset>For the following statements answer NONE, SOME WHAT or A LOT</fieldset>
                <fieldset>
                <TrippleQuestion
               name = "Q25"
               question = "During the past week how much have you had trouble with sleeping" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None"
               label2 = "Some what"
               label3 = "A lot"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q26"
               question = "During the last week have you felt yourself getting tired easily? " 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
            <TrippleQuestion
               name = "Q27"
               question = "During the past week have you felt sad or depressed" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q27"
               question = "During the past week have you felt sad or depressed" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                <Collapsible/>
            
            <TrippleQuestion
               name = "Q28"
               question = "During the past week have you felt nervous or anxious" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                <Collapsible/>
                <TrippleQuestion
               name = "Q29"
               question = "During the past week have you socialised with others(talk with or visit friends/relatives)" 
               
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                <Collapsible/>

                <TrippleQuestion
               name = "Q30"
               question = "During the past week have you taken part in social, religious or recreational activities(sports,meetings,religious meetings & parties" 
              
               form = {props.answers}
               updateForm = {props.updateForm}
               stepperUpdate = {false}
               stepperForward = {props.stepperForward}
               stepperState = {props.stepperState}
               label1 = "None "
               label2 = "Some what"
               label3 = "A lot"

                />
                <Collapsible/>

        
       </fieldset>
        </div>

         
         <h2>Family & Community Risk Factors</h2>
        <div classname = 'screening'>
        <fieldset>
            <SixSliderQuestion
            name = "Q31"
            
            booleanQuestion = "Does your family have a history of substance abuse?"
            booleanQuestionNumber = "Q31a"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            <Collapsible>
            <SixSliderQuestion
            name = "Q32"
            
            booleanQuestion = "Would you say that your parents have favourable attitudes towards substance use or abuse?"
            booleanQuestionNumber = "Q32a"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </Collapsible>
            <SixSliderQuestion
            name = "Q33"
            
            booleanQuestion = "Would you say that growing up your parents monitored your behaviour poorly?"
            booleanQuestionNumber = "Q33a"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            <Collapsible>
            <SixSliderQuestion
            name = "Q34"
            
            booleanQuestionNumber = "Q34a"
            booleanQuestion = " Do your parents have a history of substance use?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </Collapsible>
            <SixSliderQuestion
            name = "Q35"
            
            booleanQuestionNumber = "Q35a"
            booleanQuestion = "Did you ever feel rejected by your family for your sexual orientation or gender identity?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            <Collapsible>
            <SixSliderQuestion
            booleanQuestionNumber = "Q36a"
            name = "Q36"
            
            booleanQuestion = "Did you ever associate with substance using peers?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </Collapsible>
            <SixSliderQuestion
            name = "Q37"
            
            booleanQuestionNumber = "Q37a"
            booleanQuestion = " Growing up did you ever feel a lack of school connectedness? (Belief held by learners that adults and peers in the school care about their learning as well as about them as individuals)"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            <Collapsible>
            <SixSliderQuestion
            name = "Q38"
            
            booleanQuestionNumber = "Q38a"
            booleanQuestion = " Would you describe your overall academic achievement as low?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </Collapsible>
            <SixSliderQuestion
            name = "Q39"
            
            booleanQuestionNumber = "Q39a"
            booleanQuestion = " Did you ever drop out of school, leave or stay away from school for extended periods of time?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            <Collapsible>
            <SixSliderQuestion
            name = "Q40"
            
            booleanQuestionNumber = "Q40a"
            booleanQuestion = " Is your community characterised by low sense of belonging where it feels like people don’t care about others?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </Collapsible>
            <SixSliderQuestion
            name = "Q41"
            
            booleanQuestionNumber = "Q41a"
            booleanQuestion = "Would you say that drugs & alcohol are freely available and easy to get in your community?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            <Collapsible>
            <SixSliderQuestion
            name = "Q43"
            
            booleanQuestionNumber = "Q43a"
            booleanQuestion = "Would you say that your community is marked by high levels of violence, poverty and unemployment?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            
            </Collapsible>
            <SixSliderQuestion
            name = "Q44"
            
            booleanQuestionNumber = "Q44a"
            booleanQuestion = "Would you say that your community have norms and laws that are favourable toward drug use, firearms, and crime?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
            <Collapsible/>
        </fieldset>
        <h2>Protective Factors</h2>
        <div classname = "screening">
        <fieldset>
        <SixSliderQuestion
            name = "Q45"
            
            booleanQuestionNumber = "Q45a"
            booleanQuestion = "Growing up did you feel that your parent/s or family were involved with you showing an interest in your well-being?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q46"
            
            booleanQuestionNumber = "Q46a"
            booleanQuestion = " Growing up did you feel that to your parent/s and family supported healthy attitudes, behaviors, and a positive living environment?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q47"
            
            booleanQuestionNumber = "Q47a"
            booleanQuestion = " Growing up did you feel that your parent/s showed disapproval for substance use?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q48"
            
            booleanQuestionNumber = "Q48a"
            booleanQuestion = "Growing up did you feel that your parent/s helped you to build trusting relationships with others to talk about sensitive issues such as sexual and mental health, substance use, and safety from bullying"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q49"
            
            booleanQuestionNumber = "Q49a"
            booleanQuestion = " Growing up did you feel that your parent/s used effective monitoring practices to help you make healthy decisions and avoid risky behaviors? (For example, unprotected sex, underage drinking and smoking)"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q50"
            
            booleanQuestionNumber = "Q50a"
            booleanQuestion = "Would you say that your community have norms and laws that are favourable toward drug use, firearms, and crime?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q51"
            
            booleanQuestionNumber = "Q51a"
            booleanQuestion = " Do you mostly associate with positive peers and friends?"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q52"
            
            booleanQuestionNumber = "Q52a"
            booleanQuestion = " Growing up did you feel a strong sense of school connectedness? (Belief held by students that adults and peers in the school care about their learning as well as about them as individuals)"
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <SixSliderQuestion
            name = "Q53"
            
            booleanQuestionNumber = "Q53a"
            booleanQuestion = "Would you describe your overall academic achievement as good? "
            question = "On a scale of 1 – 6 where 1 = I Strongly Disagree and 6 = I Strongly Agree, how would you rate your choice to use or abuse substances being influenced by the above?"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>

        </fieldset>


        </div>
        </div>
        <h2> Change Readiness and Treatment Eagerness</h2>
        <fieldset> Please listen to the following statements carefully. Each one 
describes a way that you might (or might not) feel about your substance/alcohol use. Say whether you STRRONGLY DISAGREE, DISAGREE, UNDECIDED, AGREE or STRONGLY AGREE</fieldset>   
        <div className = 'screening'>
        <fieldset>
        <TempSliderQuestion
            name = "Q53"
            
            question = " I really want to make changes in my use of drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>

        <TempSliderQuestion
            name = "Q54"
            
            question = " Sometimes I wonder if I am an addict."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q55"
            
            question = "If I don't change my drug/alcohol use soon, my problems are going to get worse."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q56"
            
            question = " I have already started making some changes in the use my use of drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        <Collapsible/>
 
        <TempSliderQuestion
            name = "Q57"
            
            question = "I was using drugs/alcohol too much at one time, but I have managed to change that."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q58"
           
            question = "Sometimes I wonder if my drug/alcohol use is hurting people."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q59"
            
            question = "I have a drug/alchohol problem"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>

        <TempSliderQuestion
            name = "Q60"
            
            question = "I'm not just thinking about chnaging my alcohol/drug use, I'm already doing something about it."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q61"
            
            question = "I have already changed my drug/alcohol use, and I am looking for ways to keeps from slipping back into my old pattern."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q62"
            
            question = "I have serious problems with drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
 
        <TempSliderQuestion
            name = "Q63"
            
            question = "Sometimes I wonder if I am in control of my drug/alcohol use."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q64"
            
            question = "My drug/alcohol use is causing a lot of harm."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q65"
            
            question = "I am actively doing things now to cut down or stop my use of drugs/alcohol."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
 
        <TempSliderQuestion
            name = "Q66"
            
            question = "I want help to keep from going back to the drug/alcohol problems I had before."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q67"
            
            question = "I know that I have a drug/alcohol problem"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q68"
            
            question = "I am a drug/alcohol addict."
            form = {props.answers}
            updateForm = {props.updateForm}
            />
        <Collapsible/>
 
        <TempSliderQuestion
            name = "Q69"
           
            question = "I am working hard to change my drug/alcohol use."
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>
        <TempSliderQuestion
            name = "Q70"
            
            question = "If I made some changes in my drug/alcohol use, and I want some help to keep from going back to the way I used to be before"
            form = {props.answers}
            updateForm = {props.updateForm}
            
            />
        <Collapsible/>

        </fieldset>
        </div>

    </div>
    </>
  )
}

export default FollowUpQuestions

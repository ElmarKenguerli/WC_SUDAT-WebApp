import React, { useReducer, useState } from 'react';
//import React from "react";
import '../App.css';
import useCollapse from 'react-collapsed';
//mui components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SliderQuestion  from "./SliderQuestion";
import BooleanQuestion  from "./BooleanQuestion";
import FollowUpQuestions from './FollowUpQuestions';

import { Select, FormHelperText, MenuItem } from '@material-ui/core';

export const GetValue = (value, num) => {
  val = value;
  //vals[num-1] = val;

  console.log(`I am here ${val}`);
  
  if (value === 1)
  {
    console.log("I am here");
    FollowUpQuestions();
  }
}

function getCurrentDate(separator='-'){
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate = newDate.getFullYear();

  return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`;
}

const interviewerName = "Danny Guttmann";
let val = 0;


// function ShowFollowUpScreeningQuestions() {
//   return (

//      <div name="screening">
//       <fieldset>
//         <p>5. Have you ever ridden in a CAR driven by someone (including yourself) who was “high” or had been using alcohol or drugs?</p>
//         <BooleanQuestion/>
//         <Collapsible/>
//       </fieldset>

//     <fieldset>
//       <p>6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in </p>
//       <BooleanQuestion/>
//       <Collapsible/>
//     </fieldset>

//     <fieldset>
//       <p>7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?</p>
//       <BooleanQuestion />
//       <Collapsible/>
//     </fieldset>

//     <fieldset>
//       <p>8. Do you ever FORGET things you did while using alcohol or drugs?</p>
//       <BooleanQuestion />
//       <Collapsible/>
//     </fieldset>

//     <fieldset>
//       <p>9. Do your FAMILY or FRIENDS ever tell you that you should cut down on your drinking or drug use?</p>
//       <BooleanQuestion />
//       <Collapsible/>
//     </fieldset>

//     <fieldset>
//       <p>10. Have you ever gotten into TROUBLE while you were using alcohol or drugs</p>
//       <BooleanQuestion />
//       <Collapsible/>
//     </fieldset>

//    </div>
//   );
// }

export function Collapsible() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? '-' : '+'}
                
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    
                    <p>Type comment below</p>
                    <textarea  className="commentBox" name="Extra-Comment" onChange={setFormData}/>
                    
                </div>
            </div>
        </div>
        );
}


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [hasAcceptedTsAndCs, setHasAcceptedTsAndCs] = useState(false);

  // Method called when un/checking check box
  const handleChange = (event) => {
    setHasAcceptedTsAndCs(current => !current);
  }

  //Show submitting message while submitting
  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();   //Clears form after submitting
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }


  
  const handleData = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
  
    <div className="wrapper">
      <h1>SCREENING</h1>
      <Box sx={{
        p: 2,
        border: '2px solid lightgray',
        margin: 5
        
      }}>
      
      
      
      <h3 style={{textAlign: "justify"}}> 
        Hi, nice to meet you. The following questions are about your experience with using alcohol, tobacco products and other substances across your lifetime and in the past three months. These substances can be smoked, swallowed, snorted, inhaled or injected. Some of the substances listed may be prescribed by a doctor (like amphetamines, sedatives, pain medications). We also want to know more about your mental and emotional health. Lastly, we will be asking you questions about your family history and personal life experiences as it pertains to SUDs. This information will help us to assist you by providing any services and/or treatment that you might need. While we are interested in knowing more about you, please be assured that information provided will be treated as strictly confidential.
      </h3>
      
      <br/>

      <label>
        <input 
          type="checkbox"
          value={hasAcceptedTsAndCs}
          onChange = {handleChange} 
        />
           Do you accept having read and agreed to the above, as well as for your answers to be viewed by the professional conducting the assessment? Ts {"&"} Cs apply
      </label>
      
      </Box>
      <br/>


       
      {submitting &&
        <div>
        Submitting Form...
        <ul>
            {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}

        </ul>

        </div>
      }

          <div className =".input-container">
            <form onSubmit={handleSubmit}>

                <fieldset disabled={!hasAcceptedTsAndCs}>
                <label>
                    <p>Interview Details</p>   
                </label>
                
                <fieldset>
                
                <label>
                    <b>{"Client Name:\t"} </b>
                    <TextField required color="secondary" focused sx={{ width: 300 }} size="small" name = "Client Name" variant="filled" onChange={setFormData} />
                </label>
                
                </fieldset>

                <fieldset>
                  <label>
                    
                  <b>{"Place of Interview:\t"}</b> 
                    <TextField required color="secondary" focused sx={{ width: 300 }} size="small" name = "Place of Interview" variant="filled" onChange={setFormData} />
                    </label>
                    </fieldset>
                    
                <fieldset>
                <label>
                <b>Interviewer Name:</b> {interviewerName}
                  </label>
                  </fieldset>
                  <fieldset>
                  <label><b>Date of Interview:</b> {getCurrentDate()}</label>
                  </fieldset>
                    <Collapsible/>
                </fieldset>

               
            </form>
        </div>

        <div className =".input-container">
            <form onSubmit={handleSubmit}>

                <fieldset disabled={!hasAcceptedTsAndCs}>
                <label>
                    <p>DEMOGRAPHICS</p>
                </label>
                
                <fieldset>
                <label>
                    <p>Sex</p>
                    
                    <Select name="Sex" style={{ width: 300 }} variant="filled" onChange={handleData}>
                      <MenuItem value={""}>--Please Select an Option--</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Intersex"}>Intersex</MenuItem>
                    </Select>
                    <FormHelperText>Select your sex</FormHelperText>
                    
                    <Collapsible/>
                </label>
                </fieldset>
                
                <fieldset>
                <label>
                    <p>Age</p>
                    <TextField required type="number" sx={{ width: 300 }} color="secondary" focused size="small" name = "Age" variant="filled" onChange={handleData} />
                    <Collapsible/>
                </label>
                </fieldset>

                <fieldset>
                <label>
                    <p>Country of Origin</p>
                    <TextField required color="secondary" sx={{ width: 300 }} focused size="small" name = "Country" variant="filled" onChange={handleData} />
                    <Collapsible/>
                </label>
                </fieldset>

                <fieldset>
                <label>
                    <p>Community or Place of Residence:</p>
                    <TextField required color="secondary" sx={{ width: 300 }} focused size="small" name = "Residence" variant="filled" onChange={handleData} />
                    <Collapsible/>
                </label>
                </fieldset>

                <fieldset>
                <label>
                    <p>Primary Language</p>
                    <TextField required color="secondary" sx={{ width: 300 }} focused size="small" name = "lang" variant="filled" onChange={handleData} />
                    <Collapsible/>
                </label>
                </fieldset>

                <fieldset>
                <label>
                    <p>Current Housing Situation:</p>
                    
                    <Select name="Housing" style={{ width: 300 }} variant="filled" onChange={handleData}>
                      <MenuItem value={""}>--Please Select an Option--</MenuItem>
                      <MenuItem value={"Rent or Own current House or Apartment"}>Rent or Own current House or Apartment</MenuItem>
                      <MenuItem value={"Living with Relatives or Friends"}>Living with Relatives or Friends</MenuItem>
                      <MenuItem value={"Renting a Room or Shared Space"}>Renting a Room or Shared Space</MenuItem>
                      <MenuItem value={"Group Home"}>Group Home</MenuItem>
                      <MenuItem value={"Shelter"}>Shelter</MenuItem>
                      <MenuItem value={"Transitional Shelter"}>Transitional Shelter</MenuItem>
                      <MenuItem value={"Outdoors, Homeless or Streets"}>Outdoors, Homeless or Streets</MenuItem>
                      <MenuItem value={"Other (Moving from Place to Place)"}>Other (Moving from Place to Place)</MenuItem>
                    </Select>
                    <FormHelperText>Select the Most Applicable</FormHelperText>
                    
                    <Collapsible/>

                </label>
                </fieldset>

                <fieldset>
                <label>
                    <p>Highest Level of Education</p>
                    <TextField required color="secondary" focused sx={{ width: 300 }} size="small" name = "education" variant="filled" onChange={handleData} />
                    <Collapsible/>
                </label>
                </fieldset>

                <fieldset>
                <label>
                    <p>In Police Holding or Prison or Conflict with the Law in the past 12 months</p>

                    <Select name="Conflict" style={{ width: 300 }} variant="filled" onChange={handleData}>
                      <MenuItem value={""}>--Please Select an Option--</MenuItem>
                      <MenuItem value={"Police Holding"}>Police Holding</MenuItem>
                      <MenuItem value={"Prison"}>Prison</MenuItem>
                      <MenuItem value={"Conflict with the Law"}>Conflict with the Law</MenuItem>
                      <MenuItem value={"Prefer not to Answer"}>Prefer not to Answer</MenuItem>

                    </Select>
                    <FormHelperText>Select the Most Applicable</FormHelperText>

                    <Collapsible/>
                </label>
                </fieldset>

                </fieldset>
           
        

                <h2> Substance Use Screening </h2>

                <fieldset name="screening">
                  <label>
                    <h3>During the PAST 3 MONTHS, how often did the client do the following:</h3>
                  </label>

                  <fieldset>
                    <SliderQuestion 
                      question={"1. Drink more than a few sips of beer, wine, or any drink containing alcohol?"}
                    />
                      
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <SliderQuestion 
                      question={"2. Use any marijuana (weed, oil, wax, or hash by smoking, vaping, dabbing, or in food) or “synthetic marijuana” (like “K2,” “Spice”)?"}/>
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <SliderQuestion 
                      question={"3. Use anything else to get high (like other illegal drugs, prescription or over-the-counter medications, and things that you sniff, huff, vape, or inject)?"}/>
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <SliderQuestion 
                      question={"4. Use any tobacco or nicotine products (for example, cigarettes, e-cigarettes, hookahs or smokeless tobacco)?"}/>
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <p>5. Have you ever ridden in a CAR driven by someone (including yourself) who was “high” or had been using alcohol or drugs?</p>
                    <BooleanQuestion/>
                    <Collapsible/>
                  </fieldset>

                </fieldset>
                  
                  <FollowUpQuestions/>
                   <button className="btn-square" type="submit">Submit</button> 
                
                
            </form>
        </div>
    </div>
  )
}

export default Form;
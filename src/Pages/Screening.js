import React, { useReducer, useState } from 'react';
//import React from "react";
import '../App.css';
import useCollapse from 'react-collapsed';
//mui components
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SliderQuestion  from "../Components/SliderQuestion";
import BooleanQuestion  from "../Components/BooleanQuestion";

import { Select, FormHelperText, MenuItem } from '@material-ui/core';

function getCurrentDate(separator='-'){
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate = newDate.getFullYear();

  return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`;
}


const interviewerName = "Danny Guttmann"; 

function ShowFollowUpScreeningQuestions() {
  return (
     <div name="screening">
      <fieldset>
        <BooleanQuestion question="6. Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in"/>
        <Collapsible/>
      </fieldset>

    <fieldset>
      <BooleanQuestion question="7. Do you ever use alcohol or drugs while you are by yourself, or ALONE?"/>
      <Collapsible/>
    </fieldset>

    <fieldset>
      <BooleanQuestion question="8. Do you ever FORGET things you did while using alcohol or drugs?"/>
      <Collapsible/>
    </fieldset>
   </div>
  );
}

function Collapsible() {
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

  const marks = [
    {
      value: 0,
      label: 'Never',
    },
    {
      value: 1,
      label: 'Once or Twice',
    },
    {
      value: 2,
      label: 'Monthly',
    },
    {
      value: 3,
      label: 'Weekly',
    },
    {
      value: 4,
      label: 'Daily/Almost Daily',
    },
  ];
  
  const sexOptions = [
    { label: 'Male'},
    { label: 'Female' },
    { label: 'Intersex'}
  ]

  const housingOptions = [
    { label: 'Rent or Own current House or Apartment '},
    { label: 'Living with Relatives or Friends ' },
    { label: 'Renting a Room or Shared Space'},
    { label: 'Group Home' },
    { label: 'Shelter'},
    { label: 'Transitional Shelter ' },
    { label: 'Outdoors, Homeless or Streets '},
    { label: 'Other (Moving from Place to Place' }
  ]

  
  const handleData = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
  
    <div className="wrapper">
      <h1>Part 1 of 2</h1>
      <h2>SCREENING</h2>
      
      <h3 style={{textAlign: "justify"}}> 
        Hi, nice to meet you. The following questions are about your experience with using alcohol, tobacco products and other substances across your lifetime and in the past three months. These substances can be smoked, swallowed, snorted, inhaled or injected. Some of the substances listed may be prescribed by a doctor (like amphetamines, sedatives, pain medications). We also want to know more about your mental and emotional health. Lastly, we will be asking you questions about your family history and personal life experiences as it pertains to SUDs. This information will help us to assist you by providing any services and/or treatment that you might need. While we are interested in knowing more about you, please be assured that information provided will be treated as strictly confidential.
      </h3>
      <label>
        <input 
          type="checkbox"
          value={hasAcceptedTsAndCs}
          onChange = {handleChange} 
        />
         Please accept the Ts {"&"} Cs
      </label>
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
                    {"Client Name:\t"} 
                    <TextField required color="secondary" focused sx={{ width: 300 }} size="small" name = "Client Name" variant="filled" onChange={setFormData} />
                </label>
                
                </fieldset>

                <fieldset>
                  <label>
                    
                    {"Place of Interview:\t"} 
                    <TextField required color="secondary" focused sx={{ width: 300 }} size="small" name = "Place of Interview" variant="filled" onChange={setFormData} />
                    </label>
                    </fieldset>
                    
                <fieldset>
                <label>
                    Interviewer Name: {interviewerName}
                  </label>
                  </fieldset>
                  <fieldset>
                  <label>Date of Interview: {getCurrentDate()}</label>
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
                    
                    <Select name="Sex" onChange={handleData}>
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
                    {/*
                    <select name="Housing" sx={{ width: 300 }} onChange={handleData}>
                      <option value="">--Please Select an Option--</option>
                      <option value="Rent or Own current House or Apartment ">Rent or Own current House or Apartment </option>
                      <option value="Living with Relatives or Friends">Living with Relatives or Friends</option>
                      <option value="Renting a Room or Shared Space">Renting a Room or Shared Space</option>
                      <option value="Group Home">Group Home </option>
                      <option value="Shelter">Shelter </option>
                      <option value="Transitional Shelter">Transitional Shelter</option>
                      <option value="Outdoors, Homeless or Streets">Outdoors, Homeless or Streets</option>
                      <option value="Other (Moving from Place to Place)">Other (Moving from Place to Place)</option>
                    </select>
                    */
                    }
                    <Autocomplete
                      disablePortal
                      name="SelectHousing"
                      color="secondary"
                      size= "normal"
                      onChange={handleData}
                      options={housingOptions}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    
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
                    <select name="Conflict" sx={{ width: 300 }} onChange={handleData}>
                      <option value="">--Please Select an Option--</option>
                      <option value="Police Holding">Police Holding</option>
                      <option value="Prison">Prison</option>
                      <option value="Conflict with the Law">Conflict with the Law</option>
                      <option value="Prefer not to Answer">Prefer not to Answer </option>
                    </select>
                </label>
                </fieldset>

                </fieldset>
           
        

                <h2> Substance Use Screening </h2>

                <fieldset name="screening">
                  <label>
                    <h3>During the PAST 3 MONTHS, how often did the client do the following:</h3>
                  </label>

                  <fieldset>
                    <SliderQuestion question={"1. Drink more than a few sips of beer, wine, or any drink containing alcohol?"}/>
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <SliderQuestion question={"2. Use any marijuana (weed, oil, wax, or hash by smoking, vaping, dabbing, or in food) or “synthetic marijuana” (like “K2,” “Spice”)?"}/>
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <SliderQuestion question={"3. Use anything else to get high (like other illegal drugs, prescription or over-the-counter medications, and things that you sniff, huff, vape, or inject)?"}/>
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <SliderQuestion question={"4. Use any tobacco or nicotine products (for example, cigarettes, e-cigarettes, hookahs or smokeless tobacco)?"}/>
                    <Collapsible/>
                  </fieldset>

                  <fieldset>
                    <BooleanQuestion question="5. Have you ever ridden in a CAR driven by someone (including yourself) who was “high” or had been using alcohol or drugs?"/>
                    <Collapsible/>
                  </fieldset>

                 
                  <ShowFollowUpScreeningQuestions/>
                </fieldset>
                  
  
                   <button className="btn-square" type="submit">Submit</button> 
                
                
            </form>
        </div>
    </div>
  )
}

export default Form;
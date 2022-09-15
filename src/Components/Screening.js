//import React components;
import React, { useReducer, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
 
//import Pages and Components
import '../App.css';
import useCollapse from 'react-collapsed';
import Countries from '../Components/Countries';
import SixSliderQuestion from './SixSliderQuestion';
import SliderQuestion  from "./SliderQuestion";
import BooleanQuestion  from "./BooleanQuestion";
import FollowUpQuestions from './FollowUpQuestions';

//import mui components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateMomentUtils from '@date-io/moment';
import { Select, FormHelperText, MenuItem,Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import Slider from '@mui/material/Slider';

//import Firebase components
import {db} from '../database/firebase'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot, where} from 'firebase/firestore'
import { useAuthValue } from "../database/AuthContext"

let gender = "";

export const setGender = (chosenGender) => {
  gender = chosenGender;
}

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

const neverToDaily = [
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

const[DisagreetoAgree] = 
  [  
    {
      value: 0,
      label: 'Strongly Disagree',
    },
    {
      value: 1,
      label: 'Disagree',
    },
    {
      value: 2,
      label: 'Somewhat Disagree',
    },
    {
      value: 3,
      label:'Slightly Agree',
    },
    {
      value: 4,
      label: 'Agree',
    },
    {
      value: 5,
      label: 'Strongly Agree',
    }
  ];

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function Form(props) {
  const {currentUser} = useAuthValue()
  
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [hasAcceptedTsAndCs, setHasAcceptedTsAndCs] = useState(false);
  const [valueDate, setValueDate] = React.useState(null);
  const [greaterThanZero, setGreaterThanZero] = useState(true);

  let ans = [0, 0, 0, 0];
  let navigate = useNavigate();


  // Method called when un/checking check box
  const handleChange = (event) => {
    setHasAcceptedTsAndCs(current => !current);
  }

  useEffect(() => {
    let great = false;

    if (isGreaterThanZero()) {
      great = true;  
    }
  
    setGreaterThanZero(great);
  });

  function isGreaterThanZero() {
    // ans[0] = q1;
    // ans[1] = q2;
    // ans[2] = q3;
    // ans[3] = q4;
    
    return (
      true
    );
  }

  //Show submitting message while submitting
  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();   //Clears form after submitting
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)

     navigate("/ReportPage")
  }
  
  const handleData = event => {
    console.log(`Name: ${event.target.name}`)
    console.log(`Value: ${event.target.value}`)
    
    setFormData({
        name: event.target.name,
        value: event.target.value,
      })
  }
  function handleDateData(datevalue) {
    setFormData({
      name: "Date of Birth",
      value: datevalue,
    });
    setValueDate(datevalue);
  }

  return(
    <div className="wrapper" >
      <h1>SCREENING</h1>
      <Box sx={{
        p: 2,
        border: "1px black solid",
        margin: 5,
        backgroundColor:"#eff4f7fd",
        borderRadius: "20px"
      }}>
        <h3 style={{textAlign: "justify"}}> 
          Hi, nice to meet you. The following questions are about your experience with using alcohol, tobacco products and other substances across your lifetime and in the past three months. These substances can be smoked, swallowed, snorted, inhaled or injected. Some of the substances listed may be prescribed by a doctor (like amphetamines, sedatives, pain medications). We also want to know more about your mental and emotional health. Lastly, we will be asking you questions about your family history and personal life experiences as it pertains to SUDs. This information will help us to assist you by providing any services and/or treatment that you might need. While we are interested in knowing more about you, please be assured that information provided will be treated as strictly confidential.
        </h3>
        <br/>
        <label>
          <input 
            type="checkbox"
            value={hasAcceptedTsAndCs}
            onChange = {e => {props.stepperForwardFunction(props.stepperState); handleChange(e)}}
          />
            I have read the above to the client being screened, and have obtained his/her consent to proceed with the screening process.
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
    </div>
    <div className =".input-container">
      <form onSubmit={handleSubmit}>  
        <fieldset disabled={!hasAcceptedTsAndCs}>
          <label>
            <p>Interview Details</p>   
          </label>    
          <fieldset>      
            <label>
              <h3> Client Name:</h3>
              <TextField 
                required color="secondary" 
                focused sx={{ width: 300 }} 
                size="big" 
                name = "Client Name" 
                variant="filled"
                //value={clientName}
                onChange={(e) => {
                  //setClientName(e.target.value);
                  handleData(e);
                }}
              />
            </label>
          </fieldset>
          <fieldset>    
            <label>
              <h3>Place of Interview:</h3>
              <TextField 
                required color="secondary" 
                focused sx={{ width: 300 }} 
                size="small" 
                name = "Place of Interview" 
                variant="filled" 
                //value={placeOfInterview}
                onChange={(e) => {
                  //setPlaceOfInterview(e.target.value);
                  handleData(e);
                }} 
              />
            </label>
          </fieldset> 
          <fieldset>
            <h3>Interviewer:</h3> {currentUser.email}
            <label>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <h3>Date of Interview:</h3> 
              {getCurrentDate()}
            </label>
          </fieldset>
                <Collapsible/> 
          </fieldset>
          <fieldset disabled={!hasAcceptedTsAndCs}>
            <label>
                <p>DEMOGRAPHICS</p>
            </label>
          <fieldset>
            <label>
              <p>Gender</p>
                <Select 
                  name="Sex" 
                  style={{ width: 300 }} 
                  variant="filled"
                  //value={gender}
                  onChange={(e) => {
                    //setGender(e.target.value);
                    handleData(e);
                  }}
                >
                  <MenuItem value={""}>--Please Select an Option--</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              <FormHelperText>Select your sex</FormHelperText>
              <Collapsible/>
            </label>
          </fieldset>  
          <fieldset>
            <label>
                <p>Date Of Birth</p>
                <MuiPickersUtilsProvider utils={DateMomentUtils}>
                  <DatePicker 
                    //value={dateOfBirth} 
                    name="Date of Birth" 
                    onChange={(newValue) => {
                      //setDateOfBirth(newValue);
                      handleDateData(newValue);
                    }} 
                  />
                </MuiPickersUtilsProvider>
                <Collapsible/>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Country of Origin</p>
              <Countries
                formData = {formData}
                name="Country"
                value={formData["Country"]}
                onChange={(e) => { handleData(e); }} />
              <Collapsible/>
            </label>
          </fieldset>
          <fieldset>
            <label>
                <p>Community or Place of Residence:</p>
                <TextField 
                  required color="secondary" 
                  sx={{ width: 300 }} 
                  focused size="small" 
                  name = "Residence" 
                  variant="filled" 
                  value={formData["Residence"]}
                  onChange={(e) => {handleData(e); }} 
                />
                <Collapsible/>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Primary Language</p>
              <TextField 
                required color="secondary" 
                sx={{ width: 300 }} 
                focused size="small" 
                name = "Language" 
                variant="filled" 
                value={formData["Langauge"]}
                onChange={(e) => {
                  //setPrimaryLanguage(e.target.value);
                  handleData(e);
                }} 
              />
              <Collapsible/>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Current Housing Situation:</p>
              <Select 
                name="Housing Situation" 
                style={{ width: 300 }} 
                variant="filled" 
                value={formData["Housing Situation"]}
                onChange={(e) => {
                  //setHousing(e.target.value);
                  handleData(e);
                }}
              >
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
                <Select 
                  name="Education" 
                  style={{ width: 300 }} 
                  variant="filled" 
                  value={formData["Education"]}
                  onChange={(e) => {
                    //setEducation(e.target.value);
                    handleData(e);
                  }}
                >
                  <MenuItem value={""}>--Please Select an Option--</MenuItem>
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Primary"}>Primary</MenuItem>
                  <MenuItem value={"High-School"}>High-School</MenuItem>
                  <MenuItem value={"College/University"}>College/University</MenuItem>
                </Select>
                <FormHelperText>Select the Most Applicable</FormHelperText>
                <Collapsible/>
              </label>
            </fieldset>
            <fieldset>
              <label>
                  <p>In Police Holding or Prison or Conflict with the Law in the past 12 months</p>
                  <Select 
                    name="Recent Conflict" 
                    style={{ width: 300 }} 
                    variant="filled"  
                    value={formData["Recent Conflict"]}
                    onChange={(e) => {handleData(e);}}
                  >
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
                <p>1. Drink more than a few sips of beer, wine, or any drink containing alcohol?</p>
                <Slider 
                    defaultValue={0}
                    style={{ width: 550, marginLeft:50 }}
                    step={1}
                    valueLabelDisplay="auto"
                    name = "Q1"
                    marks={neverToDaily}
                    min={0}
                    max={4}
                    color="secondary"
                    onChange={(e) => handleData(e)}    
                />
                <Collapsible/>
              </fieldset>
              <fieldset>
                <p> 2.Use any marijuana (weed, oil, wax, or hash by smoking, vaping, dabbing, or in food) or “synthetic marijuana” (like “K2,” “Spice”)?</p>
                <Slider 
                  defaultValue={0}
                  style={{ width: 550 ,marginLeft:50}}
                  step={1}
                  valueLabelDisplay="auto"
                  name = "Q2"
                  marks={neverToDaily}
                  min={0}
                  max={4}
                  color="secondary"
                  onChange={(e) => handleData(e)}    
                />
                <Collapsible/>
              </fieldset>
              <fieldset>
                <p>3. Use anything else to get high (like other illegal drugs, prescription or over-the-counter medications, and things that you sniff, huff, vape, or inject)?</p>
                <Slider 
                  defaultValue={0}
                  style={{ width: 550 ,marginLeft:50}}
                  step={1}
                  valueLabelDisplay="auto"
                  name = "Q3"
                  marks={neverToDaily}
                  min={0}
                  max={4}
                  color="secondary"
                  onChange={(e) => handleData(e)}    
                />
                
                <Collapsible/>
              </fieldset>
              <fieldset>
                <p>4. Use any tobacco or nicotine products (for example, cigarettes, e-cigarettes, hookahs or smokeless tobacco)?</p>
                <Slider 
                  style={{ width: 550 ,marginLeft:50}} 
                  defaultValue = {0} 
                  step={1} 
                  valueLabelDisplay="auto" 
                  marks={neverToDaily} 
                  min={0} 
                  max={4} 
                  color="secondary"  
                  name = "Q4" 
                  onChange={(e) => {handleData(e); }}
                />
                <Collapsible/>
              </fieldset>
              <fieldset>
                <p>5. Have you ever ridden in a CAR driven by someone (including yourself) who was “high” or had been using alcohol or drugs?</p>
                <RadioGroup 
                  row name = "Q5" 
                  //value={q5}
                  onChange={(e) => {
                    //setQ5(e.target.value);
                    handleData(e);
                  }}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <Collapsible/>
              </fieldset>
            </fieldset>               
            {greaterThanZero && 
            <FollowUpQuestions 
              updateForm = {handleData}
              stepperForward = {props.stepperForwardFunction}
              stepperState = {props.stepperState}
              // q6={q6}
              // setQ6 = {setQ6value}
              // q7={q7}
              // setQ7 = {setQ7}
              // q8={q8}
              // setQ8 = {setQ8}
              // q9={q9}
              // setQ9 = {setQ9}
              // q10={q10}
              // setQ10 = {setQ10}
              // q11={q11}
              // setQ11 = {setQ11}
              // q12={q12}
              // setQ12 = {setQ12}
              // q13={q13}
              // setQ13 = {setQ13}
            />}
          <button className="btn-square" type="submit">Submit</button> 
        </form>
        <div>
          <br></br>
          <h3>Summary: </h3>
          <ul>
            {/* {formData} */}
            {/* {`q1: ${q1}`}
            <br/>
            {`q2: ${q2}`}
            <br/>
            {`q3: ${q3}`}
            <br/>
            {`q4: ${q4}`}
            <br/>
            {`q5: ${q5}`}
            <br/>
            {`q6: ${q6}`}
            <br/>
            {`q7: ${q7}`}
            <br/>
            {`q8: ${q8}`}
            <br/>
            {`q9: ${q9}`}
            <br/>
            {`q10: ${q10}`}
            <br/>
            {`q11: ${q11}`}
            <br/>
            {`q12: ${q12}`}
            <br/>
            {`q13: ${q13}`}
            <br/>
            {`Date of Birth: ${dateOfBirth}`} */}
            { Object.entries(formData).map(([name, value]) => (<li key={name}><strong>{name}</strong>:{value.toString()}</li>))}
          </ul>
        </div>
    </div>
  </div>
  )
}

export default Form;
//import React components;
import React, { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//import Pages and Components
import "../App.css";
import useCollapse from "react-collapsed";
import Countries from "../Components/Countries";
import SixSliderQuestion from "./SixSliderQuestion";
import SliderQuestion from "./SliderQuestion";
import BooleanQuestion from "./BooleanQuestion";
import FollowUpQuestions from "./FollowUpQuestions";
import RenderSection from "./RenderSection";
import { writeToDatabase, getFormDefaults } from "./WriteToDatabase";
import LandingPage from "../Pages/LandingPage";
import { sectionScreening, sectionRisks, sectionTrauma, sectionProtective, sectionFamily, sectionDepression, sectionChangeReadiness } from './QuestionData'

//datepicker
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
//import mui components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateMomentUtils from "@date-io/moment";
import {
  Select,
  FormHelperText,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import Slider from "@mui/material/Slider";

//import Firebase components
import { db } from "../database/firebase";

import {
  getDoc,
  doc,
  
} from "firebase/firestore";
import { useAuthValue } from "../database/AuthContext";

// export const setGender = (chosenGender) => {
//   gender = chosenGender;
// };

export const GetValue = (value, num) => {
  val = value;

  //console.log(`I am here ${val}`);

  if (value === 1) {
    //console.log("I am here");
    FollowUpQuestions();
  }
};

function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = (newDate = newDate.getFullYear());

  return `${date}${separator}${month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
}

const interviewerName = "Danny Guttmann";
let val = 0;

export function Collapsible() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "-" : "+"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <p>Type comment below</p>
          <textarea
            className="commentBox"
            name="Extra-Comment"
            onBlur={setFormData}
          />
        </div>
      </div>
    </div>
  );
}

const neverToDaily = [
  {
    value: 0,
    label: "Never",
  },
  {
    value: 1,
    label: "Once or Twice",
  },
  {
    value: 2,
    label: "Monthly",
  },
  {
    value: 3,
    label: "Weekly",
  },
  {
    value: 4,
    label: "Daily/Almost Daily",
  },
];

const [DisagreetoAgree] = [
  {
    value: 0,
    label: "Strongly Disagree",
  },
  {
    value: 1,
    label: "Disagree",
  },
  {
    value: 2,
    label: "Somewhat Disagree",
  },
  {
    value: 3,
    label: "Slightly Agree",
  },
  {
    value: 4,
    label: "Agree",
  },
  {
    value: 5,
    label: "Strongly Agree",
  },
];

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Form(props) {
  const { currentUser } = useAuthValue();
  const [formData, setFormData] = useReducer(formReducer, []);
  



  const getForm = async() => {

    const tempSnap = await getDoc(doc(db, 'Responses', props.docID))
    
    
    if(tempSnap.exists)
    {

    let json = tempSnap.data()
      //console.log("Document data:", json);
      //console.log("Document keys:", Object.keys(json));

      Object.keys(json).forEach((name) => {
        setFormData({
          name: name,
          value: json[name]
          
        });
      });
    }
    else{}
  }       
  if (props.docID === "")
  {
    //pass
  }
  else
  {
    getForm()
  }
  

 

  // loop for each fieldset  
  //     setFormData({
    //       name: fieldname from snap
    //       value: fieldvalue from snap
        
  //     })

  

  const [submitting, setSubmitting] = useState(false);
  const [hasAcceptedTsAndCs, setHasAcceptedTsAndCs] = useState(false);
  const [valueDate, setValueDate] = React.useState(null);
  const [greaterThanZero, setGreaterThanZero] = useState(false);

  let navigate = useNavigate();

  const showAssessment = () => {
    //let ans1 = formData["Q1"] + formData["Q2"] + formData["Q3"] + formData["Q4"];

    let count = 0;

    for (let i=6; i<11; ++i){
      if (formData["Q" + String(i)] === "Yes"){
        count++;
      }
    } 

    let show = (count >= 2);
    console.log(show);
    // console.log(ans1);
    return show;
  }

  const handleDatabase = (event) => {
    
    let fd = formData;
    formData["email"] = getEmail();
    if(form.length < )
    writeToDatabase(event, fd, getCurrentDate());
    navigate("../ReportPage", {state:{formData:formData}});
  };

  const getEmail = () => {
    return currentUser.email;
  };

  // Method called when un/checking check box
  const handleChange = (event) => {
    setHasAcceptedTsAndCs((current) => !current);
  };

  useEffect(() => {
    let val = false;
    let fd = formData;
    let vals = ["Q1", "Q2", "Q3", "Q4"];
    let sum = 0;

    for (let i = 0; i < 4; ++i) if (fd[vals[i]]) sum += fd[vals[i]];

    if (sum > 0) val = true;

    setGreaterThanZero(val);
  });

  function isGreaterThanZero(l) {

    let ans1 = formData["Q1"] + formData["Q2"] + formData["Q3"] + formData["Q4"] + formData["Q5"] + formData["Q6"] + formData["Q7"] + formData["Q8"] + formData["Q9"];
    console.log(ans1)
    return Boolean(ans1 >= 2);
  }

  //Show submitting message while submitting
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset(); //Clears form after submitting
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);

    navigate("/ReportPage");
  };

  const handleData = (event) => {
    console.log(`Name: ${event.target.name}`);
    console.log(`Value: ${event.target.value}`);

    setFormData({
      name: event.target.name,
      value: event.target.value,
      
    });

  };

  const handleExtraData = (event) => {
    console.log(`Name: ${event.target.name}`);
    console.log(`Value: ${event.target.value}`);

    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  function handleDateData(datevalue) {
    setFormData({
      name: "DateOfBirth",
      value: String(datevalue),
    });
    //setValueDate(datevalue);
  }

  function handleCountry(country) {
    setFormData({
      name: "Country",
      value: country,
    });
  }

  return (
    <div className="wrapper">
      <h1>SCREENING</h1>
      <Box
        sx={{
          p: 2,
          border: "1px black solid",
          margin: 5,
          backgroundColor: "#eff4f7fd",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ textAlign: "justify" }}>
          Hi, nice to meet you. The following questions are about your
          experience with using alcohol, tobacco products and other substances
          across your lifetime and in the past three months. These substances
          can be smoked, swallowed, snorted, inhaled or injected. Some of the
          substances listed may be prescribed by a doctor (like amphetamines,
          sedatives, pain medications). We also want to know more about your
          mental and emotional health. Lastly, we will be asking you questions
          about your family history and personal life experiences as it pertains
          to SUDs. This information will help us to assist you by providing any
          services and/or treatment that you might need. While we are interested
          in knowing more about you, please be assured that information provided
          will be treated as strictly confidential.
        </h3>
        <br />
        <label>
          <input
            type="checkbox"
            value={hasAcceptedTsAndCs}
            onChange={e => { props.stepperForwardFunction(props.stepperState); handleChange(e) }}
          />
          I have read the above to the client being screened, and have obtained
          his/her consent to proceed with the screening process.
        </label>
      </Box>
      <br />
      {/* {submitting &&
        <div>
          Submitting Form...
          <ul>
              {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
      } */}
      <div className=".input-container"></div>
      <div className=".input-container">
        <form onSubmit={handleSubmit}>
          <fieldset disabled={!hasAcceptedTsAndCs}>
            <label>
              <p>Interview Details</p>
            </label>
            <fieldset>
              <label>
                <h3> Client Name:</h3>
                <TextField
                  required
                  value = {formData["ClientName"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="big"
                  name="ClientName"
                  variant="filled"
                  //value={clientName}
                  onBlur={(e) => {
                    //setClientName(e.target.value);
                    handleData(e);
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <h3> Client ID number:</h3>
                <TextField
                  required
                  value = {formData["ClientID"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="big"
                  name="ClientID"
                  variant="filled"
                  onBlur={(e) => {
                    handleData(e);
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <h3>Place of Interview:</h3>
                <TextField
                  required
                  value = {formData["PlaceOfInterview"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="small"
                  name="PlaceOfInterview"
                  variant="filled"
                  //value={placeOfInterview}
                  onBlur={(e) => {
                    handleData(e);
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <h3>Interviewer:</h3> {getEmail()}
              <label></label>
            </fieldset>
            <fieldset>
              <label>
                <h3>Date of Interview:</h3>
                {getCurrentDate()}
              </label>
            </fieldset>
            <Collapsible />
          </fieldset>
          <fieldset disabled={!hasAcceptedTsAndCs}>
            <label>
              <p>DEMOGRAPHICS</p>
            </label>
            <fieldset>
              <label>
                <p>Gender</p>
                <Select
                  required

                  name="Gender"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["Gender"]}
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
                <Collapsible />
              </label>
            </fieldset>
            <fieldset>
              <p>Date Of Birth</p>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={formData["DateOfBirth"]}
                  onChange={(date) => { handleDateData(date); }}
                  renderInput={(params) => <TextField color="secondary" variant="filled" sx={{ width: 300 }} {...params} />}
                />
              </LocalizationProvider>
              {/* <MuiPickersUtilsProvider utils={DateMomentUtils}>
                  <DatePicker
                    value={formData["DateOfBirth"]}
                    name="DateOfBirth"
                    onChange={(date) => {
                      handleDateData(date);
                    }}
                  />
                </MuiPickersUtilsProvider> */}
              <Collapsible />

            </fieldset>
            <fieldset>
              <label>
                <p>Country of Origin</p>
                <Countries
                  name="Country"
                  value={formData["Country"]}
                  updateForm={handleExtraData}
                  onChange={(e) => {
                    handleData(e);
                  }}
                />
                <Collapsible />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Community or Place of Residence:</p>
                <TextField
                  required
                  color="secondary"
                  sx={{ width: 300 }}
                  focused
                  size="small"
                  name="Residence"
                  variant="filled"
                  value={formData["Residence"]}
                  onChange={(e) => {
                    handleData(e);
                  }}
                />
                <Collapsible />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Primary Language</p>
                <TextField
                  required
                  color="secondary"
                  sx={{ width: 300 }}
                  focused
                  size="small"
                  name="Langauge"
                  variant="filled"
                  value={formData["Langauge"]}
                  onBlur={(e) => {
                    //setPrimaryLanguage(e.target.value);
                    handleData(e);
                  }}
                />
                <Collapsible />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Current Housing Situation:</p>
                <Select
                  required
                  name="HousingSituation"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["HousingSituation"]}
                  onChange={(e) => {
                    handleData(e);
                  }}
                >
                  <MenuItem value={""}>--Please Select an Option--</MenuItem>
                  <MenuItem value={"Rent or Own current House or Apartment"}>
                    Rent or Own current House or Apartment
                  </MenuItem>
                  <MenuItem value={"Living with Relatives or Friends"}>
                    Living with Relatives or Friends
                  </MenuItem>
                  <MenuItem value={"Renting a Room or Shared Space"}>
                    Renting a Room or Shared Space
                  </MenuItem>
                  <MenuItem value={"Group Home"}>Group Home</MenuItem>
                  <MenuItem value={"Shelter"}>Shelter</MenuItem>
                  <MenuItem value={"Transitional Shelter"}>
                    Transitional Shelter
                  </MenuItem>
                  <MenuItem value={"Outdoors, Homeless or Streets"}>
                    Outdoors, Homeless or Streets
                  </MenuItem>
                  <MenuItem value={"Other (Moving from Place to Place)"}>
                    Other (Moving from Place to Place)
                  </MenuItem>
                </Select>
                <FormHelperText>Select the Most Applicable</FormHelperText>
                <Collapsible />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Highest Level of Education</p>
                <Select
                  required
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
                  <MenuItem value={"College/University"}>
                    College/University
                  </MenuItem>
                </Select>
                <FormHelperText>Select the Most Applicable</FormHelperText>
                <Collapsible />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>
                  In Police Holding or Prison or Conflict with the Law in the
                  past 12 months
                </p>
                <Select
                  required
                  name="RecentConflict"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["RecentConflict"]}
                  onChange={(e) => {
                    handleData(e);
                  }}
                >
                  <MenuItem value={""}>--Please Select an Option--</MenuItem>
                  <MenuItem value={"Police Holding"}>Police Holding</MenuItem>
                  <MenuItem value={"Prison"}>Prison</MenuItem>
                  <MenuItem value={"Conflict with the Law"}>
                    Conflict with the Law
                  </MenuItem>
                  <MenuItem value={"Prefer not to Answer"}>
                    Prefer not to Answer
                  </MenuItem>
                </Select>
                <FormHelperText>Select the Most Applicable</FormHelperText>
                <Collapsible />
              </label>
            </fieldset>
          </fieldset>
  
          <fieldset name="screening">

            {/* <fieldset>
              <p>
                1. Drink more than a few sips of beer, wine, or any drink
                containing alcohol?
              </p>
              <Slider
                defaultValue={0}
                style={{ width: 550, marginLeft: 50 }}
                step={1}
                valueLabelDisplay="auto"
                name="Q1"
                marks={neverToDaily}
                min={0}
                max={4}
                color="secondary"
                onChange={(e) => handleData(e)}
              />
              <Collapsible />
            </fieldset>
            <fieldset>
              <p>
                {" "}
                2.Use any marijuana (weed, oil, wax, or hash by smoking, vaping,
                dabbing, or in food) or “synthetic marijuana” (like “K2,”
                “Spice”)?
              </p>
              <Slider
                defaultValue={0}
                style={{ width: 550, marginLeft: 50 }}
                step={1}
                valueLabelDisplay="auto"
                name="Q2"
                marks={neverToDaily}
                min={0}
                max={4}
                color="secondary"
                onChange={(e) => handleData(e)}
              />
              <Collapsible />
            </fieldset>
            <fieldset>
              <p>
                3. Use anything else to get high (like other illegal drugs,
                prescription or over-the-counter medications, and things that
                you sniff, huff, vape, or inject)?
              </p>
              <Slider
                defaultValue={0}
                style={{ width: 550, marginLeft: 50 }}
                step={1}
                valueLabelDisplay="auto"
                name="Q3"
                marks={neverToDaily}
                min={0}
                max={4}
                color="secondary"
                onChange={(e) => handleData(e)}
              />
              <Collapsible />
            </fieldset>
            <fieldset>
              <p>
                4. Use any tobacco or nicotine products (for example,
                cigarettes, e-cigarettes, hookahs or smokeless tobacco)?
              </p>
              <Slider
                style={{ width: 550, marginLeft: 50 }}
                defaultValue={0}
                step={1}
                valueLabelDisplay="auto"
                marks={neverToDaily}
                min={0}
                max={4}
                color="secondary"
                name="Q4"
                onChange={(e) => {
                  handleData(e);
                }}
              />
              <Collapsible />
            </fieldset>
            <fieldset>
              <p>
                5. Have you ever ridden in a CAR driven by someone (including
                yourself) who was “high” or had been using alcohol or drugs?
              </p>
              <RadioGroup
                row
                name="Q5"
                onChange={(e) => {
                  handleData(e);
                }}
              > */}
            {/* <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
              <Collapsible />
            </fieldset>*/}
          </fieldset> 
            {/* {greaterThanZero && (
            <FollowUpQuestions
              updateForm={handleExtraData}
              stepperForward={props.stepperForwardFunction}
              stepperState={props.stepperState}
            />
          )} */}
            {console.log("Here")}
            <RenderSection
              show={true}
              sectionQuestions={sectionScreening}
              form={formData}
              updateForm={handleData}
            />

              <RenderSection
                show={showAssessment()}
                sectionQuestions={sectionRisks}
                form={formData}
                updateForm={handleData}
              />
            <RenderSection
              show={showAssessment()}
              sectionQuestions={sectionTrauma}
              form={formData}
              updateForm={handleData}
            />
            <RenderSection
              show={showAssessment()}
              sectionQuestions={sectionDepression}
              form={formData}
              updateForm={handleData}
            />
            <RenderSection
              show={showAssessment()}
              sectionQuestions={sectionFamily}
              form={formData}
              updateForm={handleData}
            />
            <RenderSection
              show={showAssessment()}
              sectionQuestions={sectionProtective}
              form={formData}
              updateForm={handleData}
            />
            <RenderSection
              show={showAssessment()}
              sectionQuestions={sectionChangeReadiness}
              form={formData}
              updateForm={handleData}
            />
            <button className="btn-square" type="submit" onClick={handleDatabase}>
              Submit
            </button>
        </form>
        <div>
          <br></br>
          <h3>Summary: </h3>
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Form;
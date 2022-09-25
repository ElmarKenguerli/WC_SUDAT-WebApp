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
import CommentBox from "./CommentBox";
import RenderSection from "./RenderSection";
import { writeToDatabase, getFormDefaults } from "./WriteToDatabase";
import LandingPage from "../Pages/LandingPage";

import { sectionScreening, sectionRisks, sectionTrauma, sectionProtective, sectionFamily, sectionDepression, sectionChangeReadiness } from './QuestionData'
import ScreeningMessage from "./ScreeningMessage";

//datepicker
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
//import mui components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
import CloseFullscreenTwoToneIcon from '@mui/icons-material/CloseFullscreenTwoTone';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateMomentUtils from "@date-io/moment";
import {
  Select,
  FormHelperText,
  MenuItem,
  Button
} from "@material-ui/core";
import Slider from "@mui/material/Slider";

//import Firebase components
import { db } from "../database/firebase";

import {
  getDoc,
  doc,

} from "firebase/firestore";
import { useAuthValue } from "../database/AuthContext";

export const GetValue = (value, num) => {
  val = value;

  if (value === 1) {
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
        {isExpanded ? <CloseFullscreenTwoToneIcon /> : <AddCommentTwoToneIcon />}
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
  const [formData, setFormData] = useReducer(formReducer, getFormDefaults(""));
  const[isOpen, setIsOpen] = useState(false)
  const dv = formData;

  const getForm = async () => {
    const tempSnap = await getDoc(doc(db, 'Responses', props.docID))

    if (tempSnap.exists && !isOpen) {
      setIsOpen(true)
      let json = tempSnap.data()

      Object.keys(json).forEach((name) => {
        setFormData({
          name: name,
          value: json[name]

        });
      });
    }
    else { }
    }
    if (props.docID === "") {
      //pass
    }
    else {
      getForm()
    }

  const [submitting, setSubmitting] = useState(false);
  const [hasAcceptedTsAndCs, setHasAcceptedTsAndCs] = useState(false);
  const [valueDate, setValueDate] = React.useState(null);
  const [greaterThanZero, setGreaterThanZero] = useState(false);

  let navigate = useNavigate();

  const showAssessment = () => {

    let count = 0;

    for (let i = 1; i < 11; ++i) {
      if (formData["Q" + String(i)] === "Yes") {
        count++;
      }
    }

    if(count>=2){
      props.showAllSteps();
    }
   
    return (count >= 2);
  }

  const isScreeningComplete =()=>{
    let bool = true;
    for (let i = 1; i < 11; ++i) {
      if (formData["Q" + String(i)] === "" ||formData["Q" + String(i)] === undefined) {
        bool = false
      }
    }
    return bool;
  }

  function getSteps(){
    let countN = 0;
    let countQ = 0;
    if(countQ==0){
      for(let i = 1; i<13;i++){
        if(formData["N"+String(i)] === "" || formData[["N"+String(i)] === undefined] ){
          countN = i-1
          break;
        }

        

      }
      console.log("CountN is: " + countN);
    }
    for (let i=1; i<70; ++i){
      // console.log("In get steps");
      if(formData["Q" + String(i)] === undefined ||(formData["Q" + String(i)] === "")){
        countQ = i -1;
        break;
      }
    }

    if(countQ<=10 && countQ == 0){
      props.goToStep(3);
    }

    else if(countQ>10 && countQ<=16){
      props.goToStep(4)
    }
    else if(countQ>16 && countQ<=29){
      props.goToStep(5)
    }
    else if(countQ>29 && countQ<=42){
      props.goToStep(6)
    }
    else if(countQ>42 && countQ<=55){
      props.goToStep(7)
    }

    else if(countQ>55 && countQ<=75){
      props.goToStep(8)
    }


    // else if(16<=count <25){
    //   props.goToStep(3)
    // }

    // else if(17<=count <28){
    //   props.goToStep(4)
    // }
  
    // return steps;
  }

  const handleDatabase = (event) => {
    let fd = formData;
    formData["email"] = getEmail();

    writeToDatabase(event, fd);
    navigate("../ReportPage", { state: { formData: formData } });
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

    setFormData({
      name: event.target.name,
      value: event.target.value,

    });

    getSteps()
  };

  const handleExtraData = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  function handleDateData(datevalue) {
    setFormData({
      name: "N5",
      value: String(datevalue),
    });
  }

  function handleCountry(country) {
    setFormData({
      name: "Country",
      value: country,
    });
  }
  
  if((!isScreeningComplete()) || showAssessment()){
  return (
    <div className="wrapper">
      <h1 style = {{color: "black"}}>Substance Use Disorder Assessment</h1>
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
            onChange={e => {if(hasAcceptedTsAndCs===true){
              props.goToStep(1);
            }; handleChange(e) }}
          />
          I have read the above to the client being screened, and have obtained
          his/her consent to proceed with the screening process.
        </label>
      </Box>
      <br />
      
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
                  value={formData["N1"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="big"
                  name="N1"
                  variant="filled"
                  onBlur={(e) => {
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
                  value={formData["N2"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="big"
                  name="N2"
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
                  value={formData["N3"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="small"
                  name="N3"
                  variant="filled"
                  onBlur={(e) => {
                    handleData(e);
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <h3>Interviewer:</h3> {"getEmail()"}
              <label></label>
            </fieldset>
            <fieldset>
              <label>
                <h3>Date of Interview:</h3>
                {getCurrentDate()}
              </label>
            </fieldset>
            <CommentBox
              name="commentInterview"
              updateForm={handleData}
            />
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
                  name="N4"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["N4"]}
                  onChange={(e) => {
                    handleData(e);
                  }}
                >
                  <MenuItem value={""}>--Please Select an Option--</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <FormHelperText>Select your sex</FormHelperText>
                <CommentBox
                  name="commentGender"
                  updateForm={handleData}
                />
              </label>
            </fieldset>
            <fieldset>
              <p>Date Of Birth</p>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={formData["N5"]}
                  onChange={(date) => { handleDateData(date); }}
                  renderInput={(params) => <TextField color="secondary" variant="filled" sx={{ width: 300 }} {...params} />}
                
                />
              </LocalizationProvider>
              
              <Collapsible />

              <CommentBox 
                name="N6"
                updateForm={handleData}
              />
            </fieldset>
            <fieldset>
              <label>
                <p>Country of Origin</p>
                <Countries
                  name="N7"
                  value={formData["N7"]}
                  updateForm={(e) => handleExtraData(e)}
                  onChange={(e) => {
                    handleData(e);
                  }}
                />
                <CommentBox
                  name="commentCountry"
                  updateForm={handleData}
                />
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
                  name="N8"
                  variant="filled"
                  value={formData["N8"]}
                  onChange={(e) => {
                    handleData(e);
                  }}
                />
                <CommentBox
                  name="commentResidence"
                  updateForm={handleData}
                />
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
                  name="N9"
                  variant="filled"
                  value={formData["N9"]}
                  onBlur={(e) => {
                    handleData(e);
                  }}
                />
                <CommentBox
                  name="commentLanguage"
                  updateForm={handleData}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Current Housing Situation:</p>
                <Select
                  required
                  name="N10"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["N10"]}
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
                <CommentBox
                  name="commentHousingSituation"
                  updateForm={handleData}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Highest Level of Education</p>
                <Select
                  required
                  name="N11"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["N11"]}
                  onChange={(e) => {
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
                <CommentBox
                  name="commentEducation"
                  updateForm={handleData}
                />
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
                  name="N12"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["N12"]}
                  onChange={(e) => {
                    handleData(e);
                    props.goToStep(1);
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
                <CommentBox
                  name="commentRecentConflict"
                  updateForm={handleData}
                />
              </label>
            </fieldset>
          </fieldset>

          <fieldset name="screening">

           
          </fieldset>
         
          <RenderSection
            show={true}
            sectionQuestions={sectionScreening}
            formData={formData}
            updateForm={(e) => handleData(e)}
            defaultValues={dv}
          />
          <RenderSection
            show={showAssessment()}
            sectionQuestions={sectionRisks}
            formData={formData}
            updateForm={(e) => handleData(e)}
          />
          <RenderSection
            show={showAssessment()}
            sectionQuestions={sectionTrauma}
            formData={formData}
            updateForm={(e) => handleData(e)}
          />
          <RenderSection
            show={showAssessment()}
            sectionQuestions={sectionDepression}
            formData={formData}
            updateForm={(e) => handleData(e)}
          />
          <RenderSection
            show={showAssessment()}
            sectionQuestions={sectionFamily}
            formData={formData}
            updateForm={(e) => handleData(e)}
          />
          <RenderSection
            show={showAssessment()}
            sectionQuestions={sectionProtective}
            formData={formData}
            updateForm={(e) => handleData(e)}
          />
          <RenderSection
            show={showAssessment()}
            sectionQuestions={sectionChangeReadiness}
            formData={formData}
            updateForm={(e) => handleData(e)}
          />
          <Button 
            variant="contained"
            onClick={handleDatabase}
            sx={{bgColor :"green" , color : "white", border: "2px solid #82d4e4be"}} 
            type='submit'>Submit Assessment Form
          </Button>

         
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
   else{
    return(<ScreeningMessage
          formData = {formData}
      />)
   }
}

export default Form;
//import React components;
import React, { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//import Pages and Components
import "../App.css";
import useCollapse from "react-collapsed";
import Countries from "../Components/Countries";

import CommentBox from "./CommentBox";
import RenderSection from "./RenderSection";
import {
  writeToDatabase,
  setFormDefaults,
} from "./WriteToDatabase";

import {
  sectionScreening,
  sectionRisks,
  sectionTrauma,
  sectionProtective,
  sectionFamily,
  sectionDepression,
  sectionChangeReadiness,
} from "./QuestionData";
import ScreeningMessage from "./ScreeningMessage";

//datepicker
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

//import mui components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Select, FormHelperText, MenuItem, Button } from "@material-ui/core";
import Slider from "@mui/material/Slider";

//import Firebase components
import { db } from "../database/firebase";

import { getDoc, doc } from "firebase/firestore";
import { useAuthValue } from "../database/AuthContext";

/**
 * This function returns a string representing the current date in the f
 */
function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = (newDate = newDate.getFullYear());

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

/**
 * This function renders the assessment screening form
 */
function Form(props) {
  const { currentUser } = useAuthValue();
  const [formData, setFormData] = useReducer(formReducer, setFormDefaults());
  const [isOpen, setIsOpen] = useState(false);
  const dv = formData;
  formData["DateOfInterview"] = getCurrentDate();
  const [showAnyway, setShowAnyway] = useState(false);

  const getForm = async () => {
    const tempSnap = await getDoc(doc(db, "Responses", props.docID));

    if (tempSnap.exists && !isOpen) {
      setIsOpen(true);
      let json = tempSnap.data();

      Object.keys(json).forEach((name) => {
        setFormData({
          name: name,
          value: json[name],
        });
      });
    } else {
    }
  };
  if (props.docID === "") {
    //pass
  } else {
    getForm();
  }

  const [submitting, setSubmitting] = useState(false);
  const [hasAcceptedTsAndCs, setHasAcceptedTsAndCs] = useState(false);
  const [valueDate, setValueDate] = React.useState(null);
  const [greaterThanZero, setGreaterThanZero] = useState(false);

  let navigate = useNavigate();


  
  const showContinue = () => {
    let count = 0;

    for (let i = 1; i < 11; ++i) {
      if (formData["Q" + String(i)] === "No") {
        count++;
      }
    }

    if (count >= 5) {
      console.log(count)
      return true
    }
    else{
      return false
    }
    
  };

  const showAssessment = () => {
    let count = 0;

    for (let i = 1; i < 11; ++i) {
      if (formData["Q" + String(i)] === "Yes") {
        count++;
      }
    }

    if (count >= 2) {
      props.showAllSteps();
    }
    if (showAnyway === false) {
      return Boolean(count >= 2);
    }

    if (showAnyway === true) {
      props.showAllSteps();
      return true;
    }

    return count >= 2;
  };

  const isScreeningComplete = () => {
    let bool = true;
    for (let i = 1; i < 11; ++i) {
      if (
        formData["Q" + String(i)] === "" ||
        formData["Q" + String(i)] === undefined
      ) 
      {
        bool = false;
      }
    }
    return bool;
  };

  const fields = [
    "ClientName",
    "ClientID",
    "PlaceOfInterview",
    "email",
    "Gender",
    "DateOfBirth",
    "Country",
    "Residence",
    "HousingSituation",
    "Education",
    "RecentConflict",
    "Language",
  ];

  function getSteps() {
    let countN = 0;
    let countQ = 0;
    if (countQ == 0) {
      for (let i = 1; i < 13; i++) {
        if (formData[fields[i]] === "" || formData[[fields[i]] === undefined]|| formData[[fields[i]] == 0]) {
          countN = i - 1;
          break;
        }
      }
    }
    for (let i = 1; i < 70; ++i) {
      if (
        formData["Q" + String(i)] === undefined ||
        formData["Q" + String(i)] === ""
      ) {
        countQ = i - 1;
        break;
      }
    }

    if (countQ == 10) {
      props.goToStep(4);
    } else if (countQ == 16) {
      props.goToStep(5);
    } else if (countQ == 29) {
      props.goToStep(6);
    } else if (countQ == 42) {
      props.goToStep(7);
    } else if (countQ == 55) {
      props.goToStep(8);
    } else if (countQ == 56) {
      props.goToStep(9);
    }
  }

  /**
   * This function writes the contents of formData to the database
   */
  const handleDatabase = (event) => {
    let fd = formData;
    formData["email"] = getEmail();

    writeToDatabase(event, fd);
    navigate("../ReportPage", { state: { formData: formData } });
  };

  /**
   * This function returns the email of the logged-in user as a string
   */
  const getEmail = () => {
    return currentUser.email;
  };

  /**
   * Method called when un/checking check box
   */
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
    let ans1 =
      formData["Q1"] +
      formData["Q2"] +
      formData["Q3"] +
      formData["Q4"] +
      formData["Q5"] +
      formData["Q6"] +
      formData["Q7"] +
      formData["Q8"] +
      formData["Q9"];
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

  /**
   * This function updates formData with the parsed data
   */
  const handleData = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });

    getSteps();
  };

  const handleExtraData = (event) => {
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
  }

  function handleCountry(country) {
    setFormData({
      name: "Country",
      value: country,
    });
  }

  return (
    <div className="wrapper">
      <h1 style={{ color: "black" }}>Substance Use Disorder Assessment</h1>
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
            onChange={(e) => {
              if (hasAcceptedTsAndCs === true) {
                props.goToStep(2);
              }
              handleChange(e);
            }}
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
                <h3> Client File Number:</h3>
                <TextField
                  required
                  value={formData["ClientFileNumber"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="big"
                  name="ClientFileNumber"
                  variant="filled"
                  onChange={(e) => {
                    handleData(e);
                    props.goToStep(1);
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <h3> Client Name:</h3>
                <TextField
                  required
                  value={formData["ClientName"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="big"
                  name="ClientName"
                  variant="filled"
                  onChange={(e) => {
                    handleData(e);
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <h3> Client ID number:</h3>
                <TextField
                  value={formData["ClientID"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="big"
                  name="ClientID"
                  variant="filled"
                  onChange={(e) => {
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
                  value={formData["PlaceOfInterview"]}
                  color="secondary"
                  focused
                  sx={{ width: 300 }}
                  size="small"
                  name="PlaceOfInterview"
                  variant="filled"
                  onChange={(e) => {
                    props.goToStep(2);
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
            <CommentBox name="commentInterview" updateForm={handleData} />
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
                    handleData(e);
                  }}
                >
                  <MenuItem value={""}>--Please Select an Option--</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <FormHelperText>Select your sex</FormHelperText>
                <CommentBox name="commentGender" updateForm={handleData} />
              </label>
            </fieldset>
            <fieldset>
              <p>Date Of Birth</p>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={formData["DateOfBirth"]}
                  onChange={(date) => {
                    handleDateData(date);
                  }}
                  renderInput={(params) => (
                    <TextField
                      color="secondary"
                      variant="filled"
                      sx={{ width: 300 }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              <CommentBox name="DateOfBirth" updateForm={handleData} />
            </fieldset>
            <fieldset>
              <label>
                <p>Country of Origin</p>
                <Countries
                  name="Country"
                  value={formData["Country"]}
                  updateForm={(e) => handleExtraData(e)}
                  onChange={(e) => {
                    handleData(e);
                  }}
                />
                <CommentBox name="commentCountry" updateForm={handleData} />
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
                <CommentBox name="commentResidence" updateForm={handleData} />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <p>Primary Language</p>
                <Select
                  required
                  name="Language"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["Language"]}
                  onChange={(e) => {
                    handleData(e);
                  }}
                >
                  <MenuItem value={""}>--Please Select an Option--</MenuItem>
                  <MenuItem value={"Afrikaans"}>Afrikaans</MenuItem>
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"Ndebele"}>Ndebele</MenuItem>
                  <MenuItem value={"Northern Sotho"}>Northern Sotho</MenuItem>
                  <MenuItem value={"Southern Sotho"}>Southern Sotho</MenuItem>
                  <MenuItem value={"Swati"}>Swati</MenuItem>
                  <MenuItem value={"Tsonga"}>Tsonga</MenuItem>
                  <MenuItem value={"Tswana"}>Tswana</MenuItem>
                  <MenuItem value={"Venda"}>Venda</MenuItem>
                  <MenuItem value={"Xhosa"}>Xhosa</MenuItem>
                  <MenuItem value={"Zulu"}>Zulu</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <FormHelperText>Select your Primary Language</FormHelperText>
                <CommentBox name="commentLanguage" updateForm={handleData} />
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
                  name="Education"
                  style={{ width: 300 }}
                  variant="filled"
                  value={formData["Education"]}
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
                <CommentBox name="commentEducation" updateForm={handleData} />
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
                    props.goToStep(3);
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

          <RenderSection
            show={true}
            sectionQuestions={sectionScreening}
            formData={formData}
            updateForm={(e) => handleData(e)}
            defaultValues={dv}
          />
          
          <ScreeningMessage
            show={isScreeningComplete()}
            setShowAnyway={setShowAnyway}
            showContinue={showContinue()}
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
            sx={{
              bgColor: "green",
              color: "white",
              border: "2px solid #82d4e4be",
            }}
            type="submit"
          >
            Submit Assessment Form
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;

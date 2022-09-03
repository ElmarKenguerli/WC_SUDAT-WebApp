import React, { useReducer, useState } from 'react';
//import React from "react";
import '../App.css';
import useCollapse from 'react-collapsed';
//mui components
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

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

  //Show submitting message while submitting
  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();   //Clears form after submitting
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const [checked, setChecked] = React.useState(false);
  const handleCheck = () => {
    setChecked(!checked);
    
  };

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
  
    <div className="wrapper">
      <h1>Part 1 of 2</h1>
      <h2>SCREENING</h2>
      <div className=".title">
      <h3> Hi,  nice  to  meet  you.  The following questions ask about your experience of using alcohol, tobacco products and other substances across your lifetime and in the past three months. These substances can be smoked, swallowed, snorted, inhaled or injected. Some of the substances listed may be prescribed by a doctor (like amphetamines, sedatives, pain medications). We also  want  to  know more  about  your mental and  emotional  health. Lastly,  we  will be asking  you  questions  about  your  family  history  and  personal  life  experiences  as  it pertains to SUD’s. This information will help us in assisting you with providing any service/s and treatment that you might need. While  we  are  interested  in  knowing  more  about  you,  please  be  assured  that information provided will be treated as strictly confidential.</h3>
      </div>
      <br/>
      <input name= "Agreement" type="checkbox" checked={checked} onChange={handleCheck} />
      <small>Do you agree to continue, having acknowledged the above?</small>

       
      {submitting &&
        <div>
        Submitting Form...
        <ul>
            {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
           {/* Check to see that checkbox works by adding to submit output*/}
           <li>{checked.toString()}</li> 
        </ul>

        </div>
      }

        <div className =".input-container">
            <form onSubmit={handleSubmit}>
                
                <fieldset>
                <label>
                    <p>Full Name</p>
                    <TextField required color="secondary" focused size="small" name = "fullName" variant="filled" onChange={handleChange} />
                </label>
                </fieldset>

                <h2> DEMOGRAPHICS</h2>

                <fieldset>
                <label>
                    <p>Sex</p>
                    <select name="Sex" onChange={handleChange}>
                      <option value="">--Please Select an Option--</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Intersex">Intersex</option>
                    </select>
                    
                    <Collapsible/>
                </label>
                </fieldset>
        

                <fieldset>
                <label>
                    <p>Age</p>
                    <input name="Age" onChange={handleChange}/><Collapsible/>
                </label>
                </fieldset>


                <fieldset>
                <label>
                    <p>Country of Origin</p>
                    <input name="Country" onChange={handleChange}/><Collapsible/>
                </label>
                </fieldset>


                <fieldset>
                <label>
                    <p>Community or Place of Residence:</p>
                    <input name="Residence" onChange={handleChange}/><Collapsible/>
                </label>
                </fieldset>


                <fieldset>
                <label>
                    <p>Primary Language</p>
                    <input name="lang" onChange={handleChange}/><Collapsible/>
                </label>
                </fieldset>


                <fieldset>
                <label>
                    <p>Current Housing Situation:</p>
                    <select name="Housing" onChange={handleChange}>
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
                    
                    
                    <Collapsible/>

                </label>
                </fieldset>


                <fieldset>
                <label>
                    <p>Highest Level of Education</p>
                    <input name="education" onChange={handleChange}/><Collapsible/>
                </label>
                </fieldset>


                <fieldset>
                <label>
                    <p>In Police Holding or Prison or Conflict with the Law in the past 12 months</p>
                    <select name="Conflict" onChange={handleChange}>
                      <option value="">--Please Select an Option--</option>
                      <option value="Police Holding">Police Holding</option>
                      <option value="Prison">Prison</option>
                      <option value="Conflict with the Law">Conflict with the Law</option>
                      <option value="Prefer not to Answer">Prefer not to Answer </option>
                    </select>
                </label>
                </fieldset>

                <h2> Substance Use Screening </h2>

                <fieldset>
                <label>
                    <p>In Police Holding or Prison or Conflict with the Law in the past 12 months</p>
                    
                </label>
                </fieldset>
                
                   <button className="btn-square" type="submit">Submit</button> 
                
                
            </form>
        </div>
    </div>
  )
}

export default Form;
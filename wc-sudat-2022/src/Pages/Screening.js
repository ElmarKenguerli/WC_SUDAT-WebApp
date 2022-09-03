<<<<<<< HEAD
import React, { useReducer, useState } from 'react';
//import React from "react";
import '../App.css';
import useCollapse from 'react-collapsed';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Do you agree?' } };

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
                    <textarea name="Extra-Comment" onChange={setFormData}/>
                    
                </div>
            </div>
        </div>
        );
}


const formReducer = (state, event) => {
 return {
   ...state,
   [event.target.name]: event.target.value
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

 
  return(
  
    <div className="wrapper">
      <h1>Part 1 of 2</h1>
      <h2>SCREENING</h2>
      <h3> Hi,  nice  to  meet  you.  The following questions ask about your experience of using alcohol, tobacco products and other substances across your lifetime and in the past three months. These substances can be smoked, swallowed, snorted, inhaled or injected. Some of the substances listed may be prescribed by a doctor (like amphetamines, sedatives, pain medications). We also  want  to  know more  about  your mental and  emotional  health. Lastly,  we  will be asking  you  questions  about  your  family  history  and  personal  life  experiences  as  it pertains to SUD’s. This information will help us in assisting you with providing any service/s and treatment that you might need. While  we  are  interested  in  knowing  more  about  you,  please  be  assured  that information provided will be treated as strictly confidential.</h3>
      <br/>
    
    {/* <Checkbox {...label} defaultChecked />
    <Checkbox {...label} />
    <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked /> */}
       
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

                <fieldset>
                <label>
                    <p>Name</p>
                    <input name="Name" onChange={setFormData}/><Collapsible/>
                </label>
                </fieldset>
                

                <fieldset>
                <label>
                    <p>Surname</p>
                    <input name="Surname" onChange={setFormData}/><Collapsible/>
                </label>
                </fieldset>
        

                
                   <button className="btn-square" type="submit">Submit</button> 
                
                
            </form>
        </div>
    </div>
  )
}

=======
import React, { useReducer, useState } from 'react';
import '../App.css';
import useCollapse from 'react-collapsed';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Do you agree?' } };

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
                    <input name="Extra-Comment" type="textarea" onChange={setFormData}/>
                    
                </div>
            </div>
        </div>
        );
}


const formReducer = (state, event) => {
 return {
   ...state,
   [event.target.name]: event.target.value
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

 
  return(
  
    <div className="wrapper">
      <h1>Part 1 of 2</h1>
      <h2>SCREENING</h2>
      <h3> Hi,  nice  to  meet  you.  The following questions ask about your experience of using alcohol, tobacco products and other substances across your lifetime and in the past three months. These substances can be smoked, swallowed, snorted, inhaled or injected. Some of the substances listed may be prescribed by a doctor (like amphetamines, sedatives, pain medications). We also  want  to  know more  about  your mental and  emotional  health. Lastly,  we  will be asking  you  questions  about  your  family  history  and  personal  life  experiences  as  it pertains to SUD’s. This information will help us in assisting you with providing any service/s and treatment that you might need. While  we  are  interested  in  knowing  more  about  you,  please  be  assured  that information provided will be treated as strictly confidential.</h3>
      <br/>
    
    <Checkbox {...label} defaultChecked />
    <Checkbox {...label} />
    <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked />
       
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

                <fieldset>
                <label>
                    <p>Name</p>
                    <input name="Name" onChange={setFormData}/><Collapsible/>
                </label>
                </fieldset>
                

                <fieldset>
                <label>
                    <p>Surname</p>
                    <input name="Surname" onChange={setFormData}/><Collapsible/>
                </label>
                </fieldset>
        

                
                   <button className="btn-square" type="submit">Submit</button> 
                
                
            </form>
        </div>
    </div>
  )
}

>>>>>>> 37f482eb013721507c20723fce81ffeec0a66199
export default Form;
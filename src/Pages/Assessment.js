import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import Questionaire from '../Components/Questionaire'
import VerticalLinearStepper from '../Components/Stepper'

const Assessment = props => {
  return (
    <>
    <div className="row">
        <div className="leftnav col-md-2">
        {/* <ul class="list-group">
        <li class="list-group-item">Substance Use Assessment</li>


        <li class="list-group-item list-group-item-primary">Introduction</li>
        <li class="list-group-item list-group-item-primary">Client Details</li>
        <li class="list-group-item list-group-item-primary">Demographics</li>
        <li class="list-group-item list-group-item-primary">Substance Use Screening</li>
        <li class="list-group-item list-group-item-primary">Assessment of Risk Factors</li>
        <li class="list-group-item list-group-item-primary">Assessment of Protective Factors</li>
        <li class="list-group-item list-group-item-primary">Change Readiness and Treatment Eagerness</li>
        <li class="list-group-item list-group-item-primary">Results</li>
        </ul> */}
        <VerticalLinearStepper/>
            <div className="row">
            
            </div>
        </div>
        <div className="col-md-10">
            <><Screening/></>
        
        </div>
    </div>
</>
  )
}

Assessment.propTypes = {}

export default Assessment
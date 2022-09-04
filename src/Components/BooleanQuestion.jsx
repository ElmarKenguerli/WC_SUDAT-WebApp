import React, { Component } from 'react'
import Slider from '@mui/material/Slider';

export class BooleanQuestion extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
        <div>
            <p>{this.props.question}</p>
            <input type="radio" value="Yes" name="boolean"/> Yes
            <input type="radio" value="No" name="boolean"/> No
        </div>
    )
  }
}
export default BooleanQuestion
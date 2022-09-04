import React, { Component } from 'react'
import Slider from '@mui/material/Slider';
import { GetValue } from "./Screening";

export class SliderQuestion extends Component {
  num;

  constructor(props){
    
    super(props);
    this.state = {attribute : 0};
  }
  
  render() {
      
    const handleChange = (event, value) => {
      this.setState({value: event.target.value}); 
      GetValue(value, this.num);
      console.log(value);
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
      
    return (
        <div>
            <p>{this.props.question}</p>
            <Slider
                style={{ width: 550 ,marginLeft:50}}

                defaultValue = {0}
                
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={4}
                color="secondary" 
                onChange={handleChange}            
            />
        </div>
    )
  }
}

export default SliderQuestion
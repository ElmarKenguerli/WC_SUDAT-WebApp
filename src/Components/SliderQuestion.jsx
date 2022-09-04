import React, { Component } from 'react'
import Slider from '@mui/material/Slider';

export class SliderQuestion extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
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
                        
                defaultValue={0}
                style={{ width: 550 ,marginLeft:50}}
                
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={4}
                color="secondary"             
            />
        
        </div>
    )
  }
}

export default SliderQuestion
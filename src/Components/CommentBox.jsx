import React,{ useReducer, useState } from 'react'
import useCollapse from 'react-collapsed';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value
    }
   }

const CommentBox = () => {
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

export default CommentBox
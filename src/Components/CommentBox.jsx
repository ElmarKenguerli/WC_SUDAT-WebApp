import React, { useReducer } from "react";
import useCollapse from "react-collapsed";
import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";
import CloseFullscreenTwoToneIcon from "@mui/icons-material/CloseFullscreenTwoTone";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const CommentBox = (props) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? (
          <CloseFullscreenTwoToneIcon />
        ) : (
          <AddCommentTwoToneIcon />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <p>Type comment below</p>
          <textarea
            className="commentBox"
            name={props.name}
            onBlur={props.updateForm}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CommentBox);

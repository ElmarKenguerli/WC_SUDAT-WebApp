import React from "react";

const Header = (props) => {
  return <div>
    <h2>{props.header}</h2>
    <h3>{props.explanation}</h3>
  
  </div>;
};

export default Header;
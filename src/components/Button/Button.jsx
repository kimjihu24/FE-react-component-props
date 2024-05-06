import "./Button.css";
import React from "react";

const Button = ({children, onClick, style}) => {
  return (<button className="btn" onClick={onClick} style={style}>
    {children}
  </button>
  );
};

export default Button;

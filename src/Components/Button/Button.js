import React from 'react';
import './Button.css';
import cx from "classnames";
const Button =(props) => {
const {buttonType} = props;

  return (<button 
    {...props}
    onClick={props.onClick}
    className={cx(props.className,
      {"primary" : buttonType=="primary" },{ "secondary" : buttonType=="secondary"})}
      
     style={props.style}
     >
    {props.label && <span>{props.label}</span>}
  </button>
  
)};
export default Button;

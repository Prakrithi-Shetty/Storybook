import React from 'react';
import "./Textfield.css";
import cx from "classnames";


const EmailTextfield =(props)=>{
    const {type="text"} = props;
    const {value=""}=props;
    const {name=""}=props;


    return(

        
         <div>
      
    {props.label && <div  className={cx(props.className, {"title" : type=="email" },{"title" : type=="password"})}>{props.label}</div>}
        <div className={"middiv"}></div>
        <div>
        <input type={props.type} value={props.value} name={props.name}  {...props} onChange={props.onChange}style={props.style}
       className={cx(props.className,
        {"text" : type=="text" },{ "text" : type=="password"})}
        />
        </div>
      </div>
        
  
        

    );
}


export default EmailTextfield;
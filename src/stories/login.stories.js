import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "../Components/Button/Button";
// import { Button } from '@storybook/react/demo';
import EmailTextfield from "../Components/Textfield/Textfield";

export default {
  title: 'Login',
  component: EmailTextfield,
};


let login=()=>{
    window.alert("login successful")
}


export const  Loginbutton = () => (
  <Button
  
    onClick={login}
    label="LOG IN"
    variant="contained"
  
    
  />
);


export const  emailtextfield = () => (
    
    <EmailTextfield

    label="Email"
    
    />
    
    
  );

  export const  password = () => (
    
    <EmailTextfield
    type="password"
    
    label="Password"/>
    
  );


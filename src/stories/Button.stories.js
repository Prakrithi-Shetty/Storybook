import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "../Components/Button/Button";
// import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};



export const Text = () => <Button >Hello Button</Button>;

export const  Primary = () => (
  <Button
    onClick={action('click')}
    label="Primary Button"
  />
);


export const outline=()=>(
<Button
    label="Ouline Button"
    onClick={action('click')}
    style={{ background: 'transparent', border: '3px solid #fecd43' }}
  />)

  export const Rounded=()=>(
    <Button
    label="Rounded Button"
    onClick={action('click')}
    style={{ borderRadius: '15px' }}
  />)
  
  export const disabled =()=>(
    <Button disabled
    label="Disabled Button"
    onClick={action('click')}
    style={{ background: 'gray' , border: 'gray', cursor: 'not-allowed' }}
  />
  )

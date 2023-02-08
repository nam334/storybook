import React from "react";
import Button from "./Button";

//component story format 

export default {
    title: 'Form/Button',
    component: Button
}

//a menu item is created for each of the named export (variant - react comp)

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>

const Template = args => <Button {...args}></Button>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant:'primary', 
    children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant:'secondary',
    children:'Secondary Argss'
}


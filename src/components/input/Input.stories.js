import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
}

export const sm = () => <Input size='sm' placeholder="Small size"/>
export const md = () => <Input size='md'></Input>
export const Large = () => <Input size='lg'></Input>

sm.storyName = 'Small Input' 
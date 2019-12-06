import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';
import { withKnobs, object, number, text } from '@storybook/addon-knobs/react';
import { green } from 'ansi-colors';

export default {
    title: 'buttons',
    component: Button
}

export const Basic = () => <Button id={"hello"} content={"some text for button here"}/>;
export const Primary = () => <Button id={"hello"} style={{backgroundColor:"green", color: "#fff"}} content={"some text for button here"}/>;


// storiesOf('Button', module)
//     .add('hello', () => <Button id={"hello"} />)

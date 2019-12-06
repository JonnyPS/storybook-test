import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';
import { withKnobs, object, number, text } from '@storybook/addon-knobs/react';
import { green } from 'ansi-colors';
import { blockParams } from 'handlebars';

export default {
    title: 'buttons',
    component: Button,
}


const Basic = () => <Button className={"button"} id={"hello"} content={"some text for button here"}/>;
const Primary = () => <Button className={"button primary-button"} id={"hello"} content={"some text for button here"}/>;
const Secondary = () => <Button className={"button secondary-button"} id={"hello"} content={"some text for button here"}/>;
const All = () => <div><Basic /> <Primary /> <Secondary /></div>;

export  {Basic, Primary, Secondary, All}; // export all components individually, and then export them all together

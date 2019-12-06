import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Paragraph from './Paragraph';
import { withKnobs, object, number, text } from '@storybook/addon-knobs/react';


class Para {
    constructor(id, title, classNameString) {
        this.id = id;
        this.title = title;
        this.classNameString = classNameString;
    }
}

export const helloPara = new Para(1, "Title for hello-para", 'hello-para-class');
export const goodbyePara = new Para("2", 'Title for goodbye-para', 'goodbye-para-class');
export const maybePara = new Para(3, 'Title for maybe-para', 'maybe-para-class');

export const actions = {
    onClickPara: action('onClickPara'),
    onClickButton: action('onClickButton'),
};

storiesOf('Paragraph', module)
    .addDecorator(withKnobs)
    .add('hello', () => <Paragraph id={number('ID', 3)} title={text('Title', 'Title inline')} classNameString={text('ClassName', 'hello-para-class')} {...actions} />)
    .add('goodbye', () => <Paragraph Para={object('Para', {...goodbyePara})}  {...actions} />)
    .add('maybe', () => <Paragraph Para={object('Para', {...maybePara})}  {...actions} />)
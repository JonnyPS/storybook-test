import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddMoreButton from '../components/AddMoreButton';
import { withKnobs, object, number, text } from '@storybook/addon-knobs/react';

export const actions = {
    onClickButton: action('onClickButton'),
};

storiesOf('AddMoreButton', module)
    .addDecorator(withKnobs)
    .add('add more', () => <AddMoreButton someText={'alert some text here.....'} {...actions} />)

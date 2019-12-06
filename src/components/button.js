import React from 'react';
import PropTypes from 'prop-types';

export default function Button( { id, style, content } ) {
  return (
    <button id={id} style={style}>{content}</button>
  );
}
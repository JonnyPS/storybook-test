import React from 'react';
import PropTypes from 'prop-types';

export default function Button( { className, id, style, content } ) {
  return (
    <button className={className} id={id} style={style}>{content}</button>
  );
}
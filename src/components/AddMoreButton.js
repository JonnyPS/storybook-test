import React from 'react';

export default function AddMoreButton( { someText, onClickButton } ) {
  return (
    <button onClick={() => onClickButton(alert(someText))}>{someText}</button>
  );
}
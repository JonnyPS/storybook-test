import React from 'react';
import PropTypes from 'prop-types';
// import { withKnobs, text, number } from "@storybook/addon-knobs";

// export const knobsConfig = {
//   title: "Storybook Knobs",
//   decorators: [withKnobs]
// };
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// had to change to export const as opposed to export default.


export default function Paragraph( { id, title, classNameString, padding, onClickPara } ) {
  return (
    <p className={classNameString} onClick={() => onClickPara(classNameString, id, title, classNameString)}>{title}</p>
  );
}

Paragraph.propTypes = {
    Para: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        classNameString: PropTypes.string.isRequired,
    }),
    onClickPara: PropTypes.func,
};
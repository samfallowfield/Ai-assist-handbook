import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({ text }) => {
  return (
    <button id="submit-button" data-testid="submit-button">
      {text}
      <FontAwesomeIcon icon={faArrowRight}/>
    </button>
  );
};

export default Button

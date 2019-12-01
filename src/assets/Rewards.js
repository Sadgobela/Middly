import React from 'react';
import PropTypes from 'prop-types';

const Rewards = ({width, height, stroke}) => (
  <svg width={width} height={height} viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 5C14.1944 5 18 4.10457 18 3C18 1.89543 14.1944 1 9.5 1C4.80558 1 1 1.89543 1 3C1 4.10457 4.80558 5 9.5 5Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={stroke}
    />
    <path
      d="M18 3V8C18 9.106 14.1954 10 9.5 10C4.8046 10 1 9.106 1 8V3"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 8V13.25C18 14.2177 14.1954 15 9.5 15C4.8046 15 1 14.2177 1 13.25V8"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 12V18C18 19.106 14.1954 20 9.5 20C4.8046 20 1 19.106 1 18V12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Rewards.defaultProps = {
  width: 19,
  height: 21,
  stroke: 'black'
};

Rewards.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string
};

export default Rewards;

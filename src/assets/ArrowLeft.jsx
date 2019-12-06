import React from 'react';
import { string } from 'prop-types';

const Arrow = ({ color }) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.0346 14.1426L8.24951 14.1426" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.1421 20.0351L8.24951 14.1426L14.1421 8.25002" stroke="#C3C3C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Arrow.propTypes = {
  color: string
};

Arrow.defaultProps = {
  color: "#C3C3C3"
};

export default Arrow;

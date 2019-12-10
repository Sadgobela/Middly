import React from 'react';
import { string, number } from 'prop-types';

const ArrowAccept = ({ width, height, stroke }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.3334 11.3333L4.66675 4.66663" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.66675 11.3333V4.66663H11.3334" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowAccept.propTypes = {
  width: number,
  height: number,
  stroke: string
};

ArrowAccept.defaultProps = {
  width: 16,
  height: 16,
  stroke: '#A7A7A7'
};

export default ArrowAccept;

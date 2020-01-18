import React from 'react';
import { bool, string } from 'prop-types';

const Filter = ({ width, height, stroke }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M10 5.50195C11.1046 5.50195 12 4.60652 12 3.50195C12 2.39738 11.1046 1.50195 10 1.50195C8.89543 1.50195 8 2.39738 8 3.50195C8 4.60652 8.89543 5.50195 10 5.50195Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.998 3.50195H18.521" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.521 3.50195H7.996" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6 12.002C7.10457 12.002 8 11.1065 8 10.002C8 8.89738 7.10457 8.00195 6 8.00195C4.89543 8.00195 4 8.89738 4 10.002C4 11.1065 4.89543 12.002 6 12.002Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.99609 10.002H18.5211" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.521 10.002H3.996" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8 18.502C9.10457 18.502 10 17.6065 10 16.502C10 15.3974 9.10457 14.502 8 14.502C6.89543 14.502 6 15.3974 6 16.502C6 17.6065 6.89543 18.502 8 18.502Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99609 16.502H18.5211" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.521 16.502H6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Filter.defaultProps = {
  width: 20,
  height: 20,
  stroke: '#000'
};

Filter.propTypes = {
  width: bool,
  height: bool,
  stroke: string
};

export default Filter;

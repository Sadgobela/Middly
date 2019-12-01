import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = ({width, height, stroke, style}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9999 21.4995L12.5 22.4995L13.5 18.9996L19.4823 13.0173C19.9289 12.5707 20.5797 12.3963 21.1898 12.5598C21.7998 12.7232 22.2763 13.1997 22.4397 13.8097C22.6032 14.4198 22.4288 15.0707 21.9822 15.5172L15.9999 21.4995Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 14.5H9.5L5.5 18.5V14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H20.5C21.0523 1.5 21.5 1.94772 21.5 2.5V9.5"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

AddMessage.defaultProps = {
  width: 24,
  height: 24,
  stroke: '#999999'
};

AddMessage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string
};

export default AddMessage;

import React from 'react';
import PropTypes from 'prop-types';

const Message = ({width, height, fill}) => (
  <svg width={width} height={height} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.91507 2.27016C2.06541 1.97948 2.37457 1.77778 2.72725 1.77778H17.2726C17.6253 1.77778 17.9345 1.97951 18.0848 2.27024L10 7.80389L1.91507 2.27016ZM1.81817 4.37389V13.3333C1.81817 13.8202 2.22933 14.2222 2.72725 14.2222H17.2726C17.7705 14.2222 18.1817 13.8202 18.1817 13.3333V4.374L10.5213 9.61712C10.2083 9.83136 9.79169 9.83136 9.47867 9.61712L1.81817 4.37389ZM19.9998 2.68242V13.3333C19.9998 14.802 18.7747 16 17.2726 16H2.72725C1.22519 16 0 14.802 0 13.3333V2.66667C0 1.19797 1.22519 0 2.72725 0H17.2726C18.7674 0 19.988 1.18641 19.9998 2.64538C20 2.65773 20.0001 2.67008 19.9998 2.68242Z"
      fill={fill}
    />
  </svg>
);

Message.defaultProps = {
  width: 20,
  height: 16,
  fill: 'black'
};

Message.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export default Message;

import React from 'react';
import { string, number } from 'prop-types';
import { primaryColor } from '../constants/colors';

const Arrow = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.781963 17.0923C0.299241 16.632 0.299241 15.8858 0.781964 15.4256L7.32444 9.1875L0.781964 2.94945C0.299242 2.48919 0.299242 1.74296 0.781964 1.2827C1.26469 0.822435 2.04733 0.822435 2.53006 1.2827L9.94658 8.35412C10.4293 8.81438 10.4293 9.56061 9.94658 10.0209L2.53006 17.0923C2.04733 17.5526 1.26469 17.5526 0.781963 17.0923Z"
      fill={color}
    />
  </svg>
);

Arrow.propTypes = {
  width: number,
  height: number,
  color: string
};

Arrow.defaultProps = {
  width: 11,
  height: 18,
  color: primaryColor
};

export default Arrow;

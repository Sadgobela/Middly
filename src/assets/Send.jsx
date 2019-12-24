import React from 'react';
import {number} from 'prop-types';

const Send = ({width, height}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.00761934 13L16 6.5L0.00761934 0L0 5.05556L11.4286 6.5L0 7.94442L0.00761934 13Z"/>
  </svg>
);

Send.defaultProps = {
  width: 16,
  height: 13
};

Send.propTypes = {
  width: number,
  height: number
};

export default Send;
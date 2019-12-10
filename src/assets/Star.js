import React from 'react';
import PropTypes from 'prop-types';

const Star = ({width, height, fill}) => (
  <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9.2918L2.90983 11L3.5 7.38197L1 4.81966L4.45492 4.2918L6 1L7.54509 4.2918L11 4.81966L8.5 7.38197L9.09017 11L6 9.2918Z"
      fill={fill}
    />
  </svg>
);

Star.defaultProps = {
  width: 12,
  height: 12,
  fill: '#CCC'
};

Star.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export default Star;

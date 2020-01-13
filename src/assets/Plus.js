import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({width, height, color}) => (
  <svg width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.33337 9.00016C4.33337 9.36835 4.63185 9.66683 5.00004 9.66683C5.36823 9.66683 5.66671 9.36835 5.66671 9.00016V5.66683H9.00004C9.36823 5.66683 9.66671 5.36835 9.66671 5.00016C9.66671 4.63197 9.36823 4.3335 9.00004 4.3335H5.66671V1.00016C5.66671 0.631973 5.36823 0.333496 5.00004 0.333496C4.63185 0.333496 4.33337 0.631972 4.33337 1.00016L4.33337 4.3335H1.00004C0.631851 4.3335 0.333374 4.63197 0.333374 5.00016C0.333374 5.36835 0.631851 5.66683 1.00004 5.66683H4.33337L4.33337 9.00016Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.33337 9.00016C4.33337 9.36835 4.63185 9.66683 5.00004 9.66683C5.36823 9.66683 5.66671 9.36835 5.66671 9.00016V5.66683H9.00004C9.36823 5.66683 9.66671 5.36835 9.66671 5.00016C9.66671 4.63197 9.36823 4.3335 9.00004 4.3335H5.66671V1.00016C5.66671 0.631973 5.36823 0.333496 5.00004 0.333496C4.63185 0.333496 4.33337 0.631972 4.33337 1.00016L4.33337 4.3335H1.00004C0.631851 4.3335 0.333374 4.63197 0.333374 5.00016C0.333374 5.36835 0.631851 5.66683 1.00004 5.66683H4.33337L4.33337 9.00016Z"
      fill={color}
    />
  </svg>
);

Plus.defaultProps = {
  width: 10,
  height: 10,
  color: '#ED484F'
};

Plus.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default Plus;

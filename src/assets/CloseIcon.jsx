import React from 'react';
import { string, number } from 'prop-types';

const CloseIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ><path fillRule="evenodd" clipRule="evenodd" d="M17.7489 7.46323C18.0837 7.1285 18.0837 6.58579 17.7489 6.25105C17.4142 5.91632 16.8715 5.91632 16.5368 6.25105L12 10.7878L7.46323 6.25105C7.1285 5.91632 6.58579 5.91632 6.25105 6.25105C5.91632 6.58579 5.91632 7.1285 6.25105 7.46323L10.7878 12L6.25105 16.5368C5.91632 16.8715 5.91632 17.4142 6.25105 17.7489C6.58579 18.0837 7.1285 18.0837 7.46323 17.7489L12 13.2122L16.5368 17.7489C16.8715 18.0837 17.4142 18.0837 17.7489 17.7489C18.0837 17.4142 18.0837 16.8715 17.7489 16.5368L13.2122 12L17.7489 7.46323Z" fill={color} />
  </svg>
);

CloseIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

CloseIcon.defaultProps = {
  width: 24,
  height: 24,
  color: '#C3C3C3'
};

export default CloseIcon;

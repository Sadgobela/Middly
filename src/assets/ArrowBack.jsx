import React from 'react';

const ArrowBack = () => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#ArrowBackClip)">
      <path d="M20.0346 14.1426L8.24951 14.1426" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.1421 20.0351L8.24951 14.1426L14.1421 8.25002" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="ArrowBackClip">
        <rect y="14.1426" width="20" height="20" transform="rotate(-45 0 14.1426)" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

ArrowBack.propTypes = {

};

ArrowBack.defaultProps = {

};

export default ArrowBack;
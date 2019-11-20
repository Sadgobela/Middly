import React from 'react';
import { bool } from 'prop-types';
import {
  primaryColor,
  mainWhiteColor,
  secondaryTextColor
} from '../constants/colors';

const Heart = ({ isLiked }) => (
  <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7986 3.44786C15.4961 3.15332 16.2444 3.00146 17.0006 3.00146C17.7567 3.00146 18.505 3.15332 19.2025 3.44786C19.9 3.74239 20.5325 4.17355 21.0643 4.71577C21.5961 5.25763 22.017 5.89994 22.3039 6.60553C22.5908 7.31123 22.7383 8.06699 22.7383 8.82979C22.7383 9.5926 22.5908 10.3484 22.3039 11.0541C22.017 11.7597 21.596 12.4021 21.0641 12.944L13.4518 20.7018C13.2638 20.8935 13.0066 21.0015 12.7381 21.0015C12.4696 21.0015 12.2123 20.8935 12.0243 20.7018L4.41202 12.944C3.33823 11.8497 2.73828 10.3694 2.73828 8.82979C2.73828 7.2902 3.33823 5.80993 4.41202 4.7156C5.48644 3.62063 6.94774 3.00193 8.47553 3.00193C10.0033 3.00193 11.4646 3.62063 12.539 4.7156L12.7381 4.91842L12.9369 4.71577C13.4687 4.17363 14.1012 3.74236 14.7986 3.44786Z"
      fill={isLiked ? primaryColor : mainWhiteColor}
      stroke={isLiked ? primaryColor : secondaryTextColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Heart.propTypes = {
  isLiked: bool.isRequired
};

export default Heart;

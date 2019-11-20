import React from 'react';
import { bool } from 'prop-types';
import {
  mainWhiteColor,
  bookmarkFillColor,
  mainBlackColor,
  transparentTextColor
} from '../constants/colors';

const Bookmark = ({ isWished }) => (
  <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.91602 4.00104C7.6508 4.00104 7.39644 4.10637 7.20891 4.29387C7.02137 4.48136 6.91602 4.73566 6.91602 5.00082V19.0546L12.3348 15.1849C12.6825 14.9366 13.1496 14.9366 13.4973 15.1849L18.916 19.0546V5.00082C18.916 4.73566 18.8107 4.48136 18.6231 4.29387C18.4356 4.10637 18.1812 4.00104 17.916 4.00104H7.91602ZM5.7947 2.87996C6.3573 2.31747 7.12037 2.00146 7.91602 2.00146H17.916C18.7117 2.00146 19.4747 2.31747 20.0373 2.87996C20.5999 3.44245 20.916 4.20534 20.916 5.00082V20.9974C20.916 21.3719 20.7067 21.715 20.3736 21.8864C20.0405 22.0578 19.6396 22.0286 19.3348 21.811L12.916 17.2271L6.49725 21.811C6.19244 22.0286 5.79151 22.0578 5.45843 21.8864C5.12536 21.715 4.91602 21.3719 4.91602 20.9974V5.00082C4.91602 4.20534 5.23209 3.44245 5.7947 2.87996Z"
      fill={isWished ? bookmarkFillColor : mainWhiteColor}
      stroke={isWished ? mainBlackColor : transparentTextColor}
    />
  </svg>
);

Bookmark.propTypes = {
  isWished: bool.isRequired
};

export default Bookmark;

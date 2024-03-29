import React from 'react';
import { bool } from 'prop-types';
import {
  bookmarkFillColor,
} from '../constants/colors';

const Bookmark = ({ isWished }) => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V17.0568L7.41876 13.1863C7.76646 12.9379 8.23354 12.9379 8.58124 13.1863L14 17.0568V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H3ZM0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H13C13.7956 0 14.5587 0.31607 15.1213 0.87868C15.6839 1.44129 16 2.20435 16 3V19C16 19.3746 15.7907 19.7178 15.4576 19.8892C15.1245 20.0606 14.7236 20.0315 14.4188 19.8137L8 15.2289L1.58124 19.8137C1.27642 20.0315 0.875489 20.0606 0.542418 19.8892C0.209347 19.7178 0 19.3746 0 19V3C0 2.20435 0.31607 1.44129 0.87868 0.87868Z"
      fill={isWished ? bookmarkFillColor : '#545454'}
    />
  </svg>
);

Bookmark.propTypes = {
  isWished: bool.isRequired
};

export default Bookmark;

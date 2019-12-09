import React from 'react';

const Search = ({width, height, color}) => (
  <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.70213 8C1.70213 4.52178 4.52178 1.70213 8 1.70213C11.4782 1.70213 14.2979 4.52178 14.2979 8C14.2979 11.4782 11.4782 14.2979 8 14.2979C4.52178 14.2979 1.70213 11.4782 1.70213 8ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C9.70098 16 11.278 15.4691 12.5743 14.564L18.439 19.8981C18.7952 20.222 19.3451 20.194 19.6672 19.8354C19.9893 19.4768 19.9617 18.9235 19.6055 18.5996L13.8963 13.4069C15.2027 11.9831 16 10.0846 16 8C16 3.58172 12.4183 0 8 0Z"
      fill={color}
    />
  </svg>
);

Search.defaultProps = {
  width: 20,
  height: 21,
  color: '#ED484F'
};

export default Search;

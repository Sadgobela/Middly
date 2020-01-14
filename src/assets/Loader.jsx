import React from 'react';

const Loader = ({
                      className, width, height, style, fill,
                    }) => (
  <svg
    className={`icon icon--loader${className ? ` ${className}` : ''}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 40 8"
  >
    <circle fill={fill} stroke="none" cx="4" cy="4" r="4">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.1"/>
    </circle>
    <circle fill={fill} stroke="none" cx="20" cy="4" r="4">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.2"/>
    </circle>
    <circle fill={fill} stroke="none" cx="36" cy="4" r="4">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.3"/>
    </circle>
  </svg>
);

Loader.defaultProps = {
  className: '',
  width: 40,
  height: 8,
  fill: '#fff',
};

export default Loader;
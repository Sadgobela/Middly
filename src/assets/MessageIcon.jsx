import React from 'react';
import {number} from 'prop-types';

const Message = ({width, height}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 9.44968L18 9.44446L18 8.94732C17.8877 7.14216 17.1201 5.43939 15.8404 4.15964C14.5606 2.87989 12.8578 2.11226 11.0527 2.00003H10.5503C9.39881 1.99702 8.26287 2.26606 7.23503 2.78523L7.22745 2.78906C5.99102 3.407 4.95105 4.35697 4.22402 5.53257C3.497 6.70818 3.11164 8.06299 3.11111 9.44524L3.11111 9.44968C3.1081 10.6012 3.37714 11.7371 3.8963 12.765C4.13672 13.241 4.1771 13.7932 4.00847 14.2991L3.16228 16.8377L5.70087 15.9915C6.20676 15.8229 6.75905 15.8633 7.23503 16.1037C8.26287 16.6229 9.39881 16.8919 10.5503 16.8889L10.5548 16.8889C11.937 16.8884 13.2918 16.503 14.4674 15.776C15.643 15.049 16.593 14.009 17.211 12.7726L17.2148 12.765C17.7339 11.7371 18.003 10.6012 18 9.44968ZM1.89737 19.3675C1.11561 19.6281 0.37187 18.8844 0.632456 18.1026L2.11111 13.6667C1.44992 12.3577 1.10729 10.911 1.11111 9.44446C1.11179 7.69086 1.60068 5.97208 2.52302 4.48064C3.44536 2.98919 4.76472 1.78399 6.33332 1.00003C7.64234 0.338844 9.08902 -0.00379195 10.5555 3.16534e-05H11.1111C13.427 0.1278 15.6145 1.10532 17.2546 2.74543C18.8947 4.38553 19.8722 6.57297 20 8.88891V9.44446C20.0038 10.911 19.6612 12.3577 19 13.6667C18.216 15.2353 17.0108 16.5546 15.5194 17.477C14.0279 18.3993 12.3091 18.8882 10.5555 18.8889C9.08902 18.8927 7.64234 18.5501 6.33332 17.8889L1.89737 19.3675Z"
    />
  </svg>
);

Message.defaultProps = {
  width: 20,
  height: 20
};

Message.propTypes = {
  width: number,
  height: number
};

export default Message;
import React from 'react';
import { string } from 'prop-types';
import { primaryColor } from '../constants/colors';

const Like = ({ color }) => (
	<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.0603 0.446398C12.7578 0.151857 13.5061 0 14.2623 0C15.0185 0 15.7668 0.151857 16.4643 0.446398C17.1617 0.74092 17.7942 1.17208 18.326 1.71431C18.8578 2.25617 19.2788 2.89847 19.5656 3.60406C19.8526 4.30976 20 5.06552 20 5.82833C20 6.59113 19.8526 7.34689 19.5656 8.05259C19.2787 8.75825 18.8577 9.40062 18.3258 9.94251L10.7135 17.7004C10.5255 17.892 10.2683 18 9.99977 18C9.73127 18 9.47405 17.892 9.286 17.7004L1.67373 9.94251C0.599945 8.84819 0 7.36792 0 5.82833C0 4.28873 0.599945 2.80847 1.67373 1.71414C2.74815 0.619169 4.20946 0.000469327 5.73725 0.000469327C7.26504 0.000469327 8.72634 0.619169 9.80076 1.71414L9.99977 1.91696L10.1986 1.71431C10.7304 1.17216 11.3629 0.74089 12.0603 0.446398Z" fill={color}/>
	</svg>
);

Like.propTypes = {
	color: string
};

Like.defaultProps = {
	color: primaryColor
};

export default Like;
import {number} from 'prop-types';

const Like = ({width, height}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0603 0.446398C12.7578 0.151857 13.5061 0 14.2623 0C15.0185 0 15.7668 0.151857 16.4643 0.446398C17.1617 0.74092 17.7942 1.17208 18.326 1.71431C18.8578 2.25617 19.2788 2.89847 19.5656 3.60406C19.8526 4.30976 20 5.06552 20 5.82833C20 6.59113 19.8526 7.34689 19.5656 8.05259C19.2787 8.75825 18.8577 9.40062 18.3258 9.94251C18.3258 9.94257 18.3259 9.94246 18.3258 9.94251L10.7135 17.7004C10.5255 17.892 10.2683 18 9.99977 18C9.73127 18 9.47405 17.892 9.286 17.7004L1.67373 9.94251C0.599945 8.84819 0 7.36792 0 5.82833C0 4.28873 0.599945 2.80847 1.67373 1.71414C2.74815 0.619169 4.20946 0.000469327 5.73725 0.000469327C7.26504 0.000469327 8.72634 0.619169 9.80076 1.71414L9.99977 1.91696L10.1986 1.71431C10.1987 1.71425 10.1986 1.71436 10.1986 1.71431C10.7304 1.17216 11.3629 0.74089 12.0603 0.446398ZM16.8981 3.11473C16.5503 2.76006 16.1383 2.47975 15.6862 2.28886C15.2342 2.09799 14.7504 2 14.2623 2C13.7742 2 13.2904 2.09799 12.8384 2.28886C12.3863 2.47975 11.9743 2.76006 11.6265 3.11473L10.7135 4.04513C10.5255 4.23678 10.2683 4.34476 9.99977 4.34476C9.73127 4.34476 9.47405 4.23678 9.286 4.04513L8.37321 3.11489C7.67082 2.39907 6.72225 2.00047 5.73725 2.00047C4.75225 2.00047 3.80367 2.39907 3.10128 3.11489C2.39826 3.83136 2 4.80707 2 5.82833C2 6.84959 2.39826 7.82529 3.10128 8.54176L9.99977 15.5722L16.8983 8.54176C17.2463 8.18723 17.5235 7.7651 17.7129 7.29932C17.9023 6.83352 18 6.33361 18 5.82833C18 5.32304 17.9023 4.82314 17.7129 4.35733C17.5235 3.89156 17.2461 3.46926 16.8981 3.11473Z"
    />
  </svg>
);

Like.defaultProps = {
  width: 20,
  height: 18
};

Like.propTypes = {
  width: number,
  height: number
};

export default Like;

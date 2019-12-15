import React from 'react';
import { string } from 'prop-types';

const Bags = ({ color }) => (
	<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M8.00131 1.29922C6.27211 1.29922 4.87914 2.61651 4.81148 4.24213L4.79951 4.52965H1.43529C1.3486 4.52965 1.3002 4.59209 1.3002 4.64881V17.1556C1.3002 18.4656 2.40778 19.5484 3.79537 19.5484H9.86475C9.95584 19.5484 10.0042 19.4817 10.0042 19.4292C10.0042 19.3725 9.95584 19.3101 9.86915 19.3101H3.79976C2.58071 19.3101 1.57478 18.3517 1.57478 17.1556V4.76796H4.81174V6.64719C4.81174 6.70391 4.86015 6.76634 4.94684 6.76634C5.03353 6.76634 5.08193 6.70391 5.08193 6.64719V4.76796H10.9251V6.64719C10.9251 6.70391 10.9735 6.76634 11.0602 6.76634C11.1469 6.76634 11.1953 6.70391 11.1953 6.64719V4.76796H14.4322V5.89356C14.4322 5.95028 14.4806 6.01271 14.5673 6.01271C14.654 6.01271 14.7024 5.95028 14.7024 5.89356V4.64881C14.7024 4.59209 14.654 4.52965 14.5673 4.52965H11.2031L11.1911 4.24216C11.1235 2.62049 9.73023 1.29922 8.00131 1.29922ZM4.23557 3.92966C4.45981 2.10307 6.0687 0.699219 8.00131 0.699219C9.93397 0.699219 11.5425 2.10683 11.767 3.92966H14.5673C14.9641 3.92966 15.3024 4.2398 15.3024 4.64881V5.89356C15.3024 6.30257 14.9641 6.61271 14.5673 6.61271C14.1706 6.61271 13.8322 6.30257 13.8322 5.89356V5.36796H11.7953V6.64719C11.7953 7.05619 11.4569 7.36634 11.0602 7.36634C10.6634 7.36634 10.3251 7.0562 10.3251 6.64719V5.36796H5.68193V6.64719C5.68193 7.0562 5.34359 7.36634 4.94684 7.36634C4.55008 7.36634 4.21174 7.0562 4.21174 6.64719V5.36796H2.17478V17.1556C2.17478 18.0003 2.89167 18.7101 3.79976 18.7101H9.86915C10.2659 18.7101 10.6042 19.0202 10.6042 19.4292C10.6042 19.834 10.2659 20.1484 9.86475 20.1484H3.79537C2.09772 20.1484 0.700195 18.8179 0.700195 17.1556V4.64881C0.700195 4.2398 1.03854 3.92966 1.43529 3.92966H4.23557ZM5.08241 4.21279C5.16651 2.71626 6.45293 1.53749 8.00131 1.53749C9.54969 1.53749 10.8361 2.71626 10.9202 4.21279L10.938 4.52963H5.0646L5.08241 4.21279ZM5.72331 3.92963H10.2793C10.0671 2.9169 9.13263 2.13749 8.00131 2.13749C6.87 2.13749 5.93551 2.9169 5.72331 3.92963ZM17.0073 6.12781C18.6701 6.12781 19.9889 7.55376 19.9889 9.2661V9.45952H21.9373C22.3457 9.45952 22.6457 9.80225 22.6457 10.1918V17.7766C22.6457 19.153 21.5866 20.2992 20.2458 20.2992H13.7728C12.432 20.2992 11.3729 19.153 11.3729 17.7766V10.1918C11.3729 9.80225 11.6729 9.45952 12.0814 9.45952H14.0298V9.2661C14.0298 7.55322 15.3497 6.13271 17.0073 6.12781ZM17.0077 6.72781C15.7116 6.73191 14.6298 7.85266 14.6298 9.2661V10.0595H12.0814C12.036 10.0595 11.9729 10.1011 11.9729 10.1918V17.7766C11.9729 18.8542 12.7951 19.6992 13.7728 19.6992H20.2458C21.2236 19.6992 22.0457 18.8542 22.0457 17.7766V10.1918C22.0457 10.1011 21.9827 10.0595 21.9373 10.0595H19.3889V9.2661C19.3889 7.8521 18.3068 6.72804 17.0077 6.72781ZM14.8467 9.26606C14.8467 8.02937 15.8027 6.99236 17.0115 6.99236H17.0128C18.2157 6.9975 19.1721 8.0286 19.1721 9.26606V10.0595H14.8467V9.26606ZM17.0109 7.59236C16.1654 7.59272 15.4467 8.32841 15.4467 9.26606V9.45949H18.5721V9.26606C18.5721 8.32921 17.8539 7.59634 17.0109 7.59236ZM12.1897 10.3241H14.6297V11.6983C14.6297 11.789 14.6927 11.8306 14.7381 11.8306C14.7835 11.8306 14.8466 11.789 14.8466 11.6983V10.3241H19.1719V11.6983C19.1719 11.789 19.235 11.8306 19.2804 11.8306C19.3258 11.8306 19.3888 11.789 19.3888 11.6983V10.3241H21.8288V17.7766C21.8288 18.6777 21.1321 19.4346 20.2457 19.4346H13.7727C12.881 19.4346 12.1897 18.672 12.1897 17.7766V10.3241ZM12.7897 10.9241V17.7766C12.7897 18.3745 13.2453 18.8346 13.7727 18.8346H20.2457C20.7703 18.8346 21.2288 18.3776 21.2288 17.7766V10.9241H19.9888V11.6983C19.9888 12.0878 19.6888 12.4306 19.2804 12.4306C18.8719 12.4306 18.5719 12.0878 18.5719 11.6983V10.9241H15.4466V11.6983C15.4466 12.0878 15.1465 12.4306 14.7381 12.4306C14.3297 12.4306 14.0297 12.0878 14.0297 11.6983V10.9241H12.7897Z" fill={color}/>
	</svg>
);

Bags.propTypes = {
	color: string
};

Bags.defaultProps = {
	color: '#464646'
};

export default Bags;

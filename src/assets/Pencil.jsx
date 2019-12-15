import React from 'react';
import { string } from 'prop-types';

const Pencil = ({ color }) => (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M9.19494 0.528636C9.45529 0.268287 9.8774 0.268287 10.1377 0.528636L13.4711 3.86197C13.5961 3.98699 13.6663 4.15656 13.6663 4.33337C13.6663 4.51019 13.5961 4.67975 13.4711 4.80478L4.80441 13.4714C4.67939 13.5965 4.50982 13.6667 4.33301 13.6667H0.999674C0.631485 13.6667 0.333008 13.3682 0.333008 13V9.66671C0.333008 9.4899 0.403246 9.32033 0.52827 9.1953L9.19494 0.528636ZM9.66634 1.94285L1.66634 9.94285V12.3334H4.05687L12.0569 4.33337L9.66634 1.94285Z" fill="white"/>
	</svg>
);

Pencil.propTypes = {
	color: string
};

export default Pencil;

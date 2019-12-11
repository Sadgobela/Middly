import React from 'react';

const Star = ({color}) => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.99984 9.84075L2.39464 11.8337L3.08317 7.61262L0.166504 4.62326L4.19724 4.00742L5.99984 0.166992L7.80244 4.00742L11.8332 4.62326L8.9165 7.61262L9.60504 11.8337L5.99984 9.84075Z" fill={color || '#FFC131'}/>
	</svg>
);

export default Star;
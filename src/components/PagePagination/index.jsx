import React from 'react';
import {
	ControlButton,
	PageCount,
} from './styled';
import Grid from 'components/Grid';
import Icons from 'components/Icon';

const Pagination = ()=>{
	return (
		<Grid jcfe aic margin='60px 0'>
			<ControlButton prev><Icons type='arrow' />Previous</ControlButton>
			<PageCount>122 / 118</PageCount>
			<ControlButton>Next <Icons type='arrow' /></ControlButton>
		</Grid>
	)
};

export default Pagination;

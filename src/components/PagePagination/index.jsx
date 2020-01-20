import React from 'react';
import {
	Controls,
	Dots,
	Counter,
} from './styled';
import Grid from 'components/Grid';
import Icons from 'components/Icon';

const Pagination = ()=>{
	return (
		<Grid center margin='60px 0'>
			<Controls>Previous</Controls>
			<Controls prev>
				<Icons type='arrow' />
			</Controls>
			<Counter active>1</Counter>
			<Counter>2</Counter>
			<Counter>3</Counter>
			<Dots>...</Dots>
			<Counter>10</Counter>
			<Counter>11</Counter>
			<Counter>12</Counter>
			<Controls>
				<Icons type='arrow' />
			</Controls>
			<Controls>Next</Controls>
		</Grid>
	)
};

export default Pagination;

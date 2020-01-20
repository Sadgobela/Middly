import React from 'react';
import {
	Container,
	Title,
	Filter,
	FilterOption,
	SelectedFilter,
	Clear,
} from './styled';
import Grid from 'components/Grid';

const filters = ['Location', 'Category', 'Brand', 'Price', 'Sort by'];

function getFilters() {
	return(
		filters.map( item =>
			<Filter defaultValue={item}>
				<FilterOption value='option'>option</FilterOption>
			</Filter>)
	)
}

const Filters = ()=> {
	return (
		<Container>
			<Grid aic>
				<Title>Filters</Title>
				{getFilters()}
			</Grid>
			<Grid sb margin='24px 0 0 0'>
				<Grid>
					<SelectedFilter>
						Women's clothing X
					</SelectedFilter>
					<SelectedFilter>
						All brands X
					</SelectedFilter>
					<SelectedFilter>
						Off White X
					</SelectedFilter>
				</Grid>

				<Clear>
					Clear all filters
				</Clear>
			</Grid>
		</Container>
	)
};

export default Filters;

import React from 'react';
import {
	Container,
	Title,
	Filter,
	FilterOption,
	SelectedFilter,
	SelectedList,
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
			<Grid type='row'>
				<Title>Filters</Title>
				{getFilters()}
			</Grid>
			<SelectedList>
				<SelectedFilter>
					Women's clothing
				</SelectedFilter>
				<Clear>
					Clear all filtres
				</Clear>
			</SelectedList>
		</Container>
	)
};

export default Filters;

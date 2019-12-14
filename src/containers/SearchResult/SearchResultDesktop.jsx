import React from 'react';
import {
	Title,
	TabList,
} from './styled';
import Grid from 'components/Grid';
import Breadcrumbs from 'components/Breadcrumbs';
import ListHeading from 'components/ListHeading';
import Tabs from 'components/Tabs';
import Filters from './components/Filters';

const locations = ['Home', 'Categories', 'Clothing'];
const tabs = ['Products (2 780)', 'Stores (2 786)', 'Posts (5 678)'];

function getTabs() {
	return (
		tabs.map( (text, i) => <Tabs active={i === tabs.length - 1}>{text}</Tabs>)
	)
}

const SearchResultDesktop = ()=> {
	return (
		<Grid type='pageContainer'>
			<Breadcrumbs locations={locations} />
			<ListHeading heading='Search Results:' customStyles='padding-top: 10px'>
				<Title>Showing: 4 567 Items</Title>
			</ListHeading>
			<TabList>
				{getTabs()}
			</TabList>
			<Filters />

		</Grid>
	)
};

export default SearchResultDesktop;

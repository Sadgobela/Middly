import React from 'react';
import {
	TabList,
	Tab,
	Content,
} from './styled';
import {shoes, clothes} from './data/women';

function Women({getContent}) {
	return (
		<>
			<TabList>
				<Tab>Clothing</Tab>
				<Tab active>Shoes</Tab>
			</TabList>
			<Content>
				{getContent(shoes)}
			</Content>

		</>
	);
}

export default Women;
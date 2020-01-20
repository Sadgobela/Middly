import React from 'react';
import PropTypes from "prop-types";
import {
	TabList,
	Tab,
	Content,
} from './styled';
import { shoes } from './data/women';

function Women({ getContent }) {
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

Women.propTypes = {
	getContent: PropTypes.func.isRequired
}

export default Women;
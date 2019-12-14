import React from 'react';
import {
	Tab,
} from './styled';

const Tabs = ({children, active})=> {
	return (
		<Tab active={active}>
			{children}
		</Tab>
	)
};

export default Tabs;

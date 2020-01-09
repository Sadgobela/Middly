import React from 'react';
import {
	Tab,
} from './styled';

const Tabs = ({children, active, onClick})=> {
	return (
		<Tab active={active} onClick={onClick}>
			{children}
		</Tab>
	)
};

export default Tabs;

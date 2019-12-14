import React from 'react';
import {
	PageContainer,
	Row,
} from './styled';

const components = {
	pageContainer: PageContainer,
	row: Row,

};

const Grid = ({type, props, children})=> {
	const Component = components[type];
	return (
		<Component {...props}>
			{children}
		</Component>
	)
};

export default Grid;

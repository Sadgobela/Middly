import React from 'react';
import {
	PageContainer,
	Container,
} from './styled';

const components = {
	pageContainer: PageContainer,
	container: Container,
};

const Grid = ({container, aic, children, sb, center, column, margin, padding, width, wrap, height})=> {
	const Component = container ? Container : PageContainer;
	return (
		<Component
			width={width}
			aic={aic}
			sb={sb}
			center={center}
			column={column}
			margin={margin}
			padding={padding}
			wrap={wrap}
			height={height}
		>
			{children}
		</Component>
	)
};

export default Grid;

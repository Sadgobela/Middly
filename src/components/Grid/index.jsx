import React from 'react';
import {
	PageContainer,
	Container,
} from './styled';

const components = {
	pageContainer: PageContainer,
	container: Container,
};

const Grid = ({pageContainer, aic, aife, children, sb, center, column, margin, padding, width, wrap, height, bg, bsh, bd})=> {
	const Component = pageContainer ? PageContainer : Container;
	return (
		<Component
			aife={aife}
			width={width}
			aic={aic}
			sb={sb}
			center={center}
			column={column}
			margin={margin}
			padding={padding}
			wrap={wrap}
			height={height}
			bg={bg}
			bsh={bsh}
			bd={bd}
		>
			{children}
		</Component>
	)
};

export default Grid;

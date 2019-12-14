import React from 'react';
import {
	Container,
	Heading
} from './styled';

export default function ({heading,children, customStyles}) {
	return (
		<Container customStyles={customStyles}>
			<Heading>{heading}</Heading>
			{children}
		</Container>
	)
};
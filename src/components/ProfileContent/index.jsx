import React from 'react';
import {
	Container,
	Header,
	Heading
} from './styled';

function ProfileContent({heading, children, height}) {
	return (
		<Container height={height}>
			<Header>
				<Heading>{heading}</Heading>
			</Header>
			{children}
		</Container>
	);
}

export default ProfileContent;
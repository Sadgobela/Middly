import React from 'react';
import {
	Container,
	Location,
} from './styled';
import Arrow from 'assets/Arrow';

export default function ({locations, isSearchPage }) {
	return (
		<Container>
			{
				locations.map( (item, i) =>
					<Location current={i === locations.length - 1} isSearchPage={isSearchPage}>
						{item}
						{i !== locations.length - 1 ? <Arrow color='#656565' /> : null}
					</Location>
				)
			}

		</Container>
	)
};
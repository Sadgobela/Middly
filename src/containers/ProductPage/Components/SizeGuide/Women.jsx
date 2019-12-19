import React from 'react';
import {
	Title,
	Row,
	Item,

} from './styled';
import {shoes} from './data/women';

function Women(props) {
	return (
		<>
			{
				shoes.map( item =>
					<div>
						<Title>{item.title}</Title>
						<Row>
							{
								item.list.map(item =>
									<Item>{item}</Item>
								)
							}
						</Row>
					</div>
				)
			}
		</>
	);
}

export default Women;
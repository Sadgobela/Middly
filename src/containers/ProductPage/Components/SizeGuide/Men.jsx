import React from 'react';
import {
	Title,
	Row,
	Item, Column, Wrap, Unit,
	Wrapper,
	TableWrapper,

} from './styled';
import {tops, trousers, jackets, shorts, shoes} from './data/men';

const menTabs = [
	tops, trousers, jackets, shorts
];

function getTableContent(data) {
	return(
		data.map( item =>
			<Column>
				<Title>{item.title}</Title>
				{
					item.units ?
						<Wrap>
							{
								item.units.map( item =>
									<Row double>
										<Unit>{item.title}</Unit>
										{
											item.list.map( item => <Item>{item}</Item> )
										}
									</Row>
								)
							}
						</Wrap>
						:
						<Row single>
							{
								item.list.map( item => <Item bold>{item}</Item> )
							}
						</Row>
				}
			</Column>
		)
	)
}

function Men(props) {
	return (
		<Wrapper>
			{

					shoes.map( item =>
						<div>
							<Title paddingBottom>{item.title}</Title>
							<Row>
							{
								item.list.map(item =>
									<Item>{item}</Item>
									)
							}
						</Row>
				</div>
				)

				// <TableWrapper>{getTableContent(tops)}</TableWrapper>
				// menTabs.map(data => <div>{getTableContent(data)}</div>)
			}
		</Wrapper>
	);
}

export default Men;


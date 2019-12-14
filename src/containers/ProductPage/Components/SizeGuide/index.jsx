import React from 'react';
import {
	Overlay,
	Guide,
	Heading,
	TabList,
	Tab,
	Column,
	Item,
	Table,
	Unit,
	Title,
	Wrap,
	Row,
} from './styled';
import tableData from './tableData';

function getTableContent() {
	return(
		tableData.map( item =>
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

const SizeGuide = ({close})=> (
	<Overlay onClick={ev => close(false)}>
		<Guide>
			<Heading>Size guide</Heading>
			<TabList>
				<Tab active>Clothing</Tab>
				<Tab>Shoes</Tab>
			</TabList>
			<Table>
				{ getTableContent() }
			</Table>
		</Guide>
	</Overlay>
);

export default SizeGuide;

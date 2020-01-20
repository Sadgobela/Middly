import React from 'react';
import Icon from 'components/Icon';
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
	Close,
} from './styled';
import Women from './Women';

function getTableContent(data) {
	return (
		data.map((item, i) =>
			<Column>
				<Title>{item.title}</Title>
				{
					item.units ?
						<Wrap>
							{
								item.units.map(item =>
									<Row double>
										<Unit>{item.title}</Unit>
										{
											item.list.map(item => <Item>{item}</Item>)
										}
									</Row>
								)
							}
						</Wrap>
						:

						<Wrap>
							<Row single>
								{
									item.list.map(item => <Item single bold={!i}>{item}</Item>)
								}
							</Row>
						</Wrap>
				}
			</Column>
		)
	)
}

const SizeGuide = ({ close }) => (
	<Overlay onClick={ev => close(false)}>
		<Guide>
			<Close>
				<Icon type='close' color='#000' />
			</Close>

			<Heading>Size guide</Heading>
			<TabList>
				<Tab main active>Women</Tab>
				<Tab main>Men</Tab>
				<Tab main>Kids</Tab>
			</TabList>
			<Table>
				{/* { getTableContent() } */}
				<Women getContent={getTableContent} />
				{/* <Men/> */}
			</Table>
		</Guide>
	</Overlay>
);

export default SizeGuide;

import React from 'react';
import {
	Content,
	Nav,
	Tab,
	Wrap,
	Table,
	Item,
	Create,
	Title,
	Pic,
	PicGroup,
	Group,
	Details,
	Icon,
	Settings,
	Dot,
	Bold,
	Shops,
	EditList,
	Function,
	Heading,
	View,
	Line,
} from './styled';
import pic1 from './img/pic1.png';
import pic2 from './img/pic2.png';
import eye from './img/eye.svg';
import settings from './img/settings.svg';

const tabs = ['Posts', 'Lists', 'Activity'];
const titles = ['Fancy Trends 2020', 'Woman', 'Make Up', 'Twin Peaks', 'Personal', 'Ariana Grande', 'Lipsticks - MAC'];

function Lists() {
	return (
		<Wrap>
			<Content>
				<Nav>
					{
						tabs.map(tab =>
							<Tab>{tab}</Tab>
						)
					}
				</Nav>
				<Table>
					<Item empty>
						<Create>Create new list</Create>
					</Item>
						{
							titles.map((title,i) =>
								<Item>
									<Title>{title}</Title>
									<Group>
									<PicGroup><Pic big src={pic1}/></PicGroup>
									<PicGroup right>
										<Pic src={pic2}/>
										<Pic src={pic2}/>
									</PicGroup>
								</Group>
									<Group bottom>
										<Details><Bold>701</Bold> Saved</Details>
										<Details purchased>890 Purchased</Details>
										<Icon src={eye}/>
										<Settings>
											<Dot/>
										</Settings>
									</Group>
									{
										!i ?
											<EditList>
												<Function><Icon settings src={settings}/>Edit List</Function>
												<Function><Icon settings src={settings}/>Reorder List Sequence</Function>
												<Function><Icon settings src={settings}/>Reorder Cover Images</Function>
												<Function><Icon settings src={settings}/>Share / Invite</Function>
												<Function><Icon settings src={settings}/>Delete List</Function>
											</EditList>
											:
											null
									}
								</Item>
							)
						}
				</Table>
			</Content>
			<Shops>
				<Line>
					<Heading>Shops to follow</Heading>
					<View>View All ></View>
				</Line>
				<Line></Line>
				<Line></Line>
				<Line></Line>
				<Line></Line>
			</Shops>
		</Wrap>

	)
}

export default Lists;
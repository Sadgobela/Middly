import React from 'react';
import {
	Container,
} from './styled';
import Grid from "components/Grid";
import Breadcrumbs from "components/Breadcrumbs";
import SideBar from "./components/SIdebar";
import Content from "components/ProfileContent";
///////////////
import {
	ItemDescription,
	ItemHeading,
	ItemPic, ItemReplied,
	ItemTitle,
	NotificationsItem, PostTitle
} from "components/NotificationBar/styled";
////////////////

import exampleData from "./exampleData";

function getItems() {
	return (
		exampleData.map( item =>
			<NotificationsItem>
				<ItemPic src={item.avatar} />
				<ItemDescription>
					<ItemHeading info={item.info} >{item.name}</ItemHeading>
					<ItemTitle>
						{item.message}
					</ItemTitle>
					<PostTitle>{item.date}</PostTitle>
				</ItemDescription>
				<ItemReplied src={item.preview} />
			</NotificationsItem>
		)
	)
}

const locations = ['Home', 'Profile', 'My profile'];

const MyProfileDesktop = ()=> {
	return (
		<Grid pageContainer>
			<Breadcrumbs locations={locations} />
			<Grid>
				<SideBar />
				<Content heading='Notifications'>
					{getItems()}
				</Content>
			</Grid>
		</Grid>
	)
};

export default MyProfileDesktop;

import React from 'react';
import Grid from "components/Grid";
import Breadcrumbs from "components/Breadcrumbs";
import SideBar from "./components/SIdebar";

import ListsOwner from "./components/ListsOwner";
import Information from "./components/Information";
import MovePopup from "./components/MovePopup";
import EditOwnerPopup from "./components/EditOwnerPopup";

/* function getItems() {
	return (
		exampleData.map(item =>
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
} */

const locations = ['Home', 'Profile', 'My profile'];

const MyProfileDesktop = () => {
	return (
		<Grid pageContainer>
			<Breadcrumbs locations={locations} />
			<Grid>
				<div>
					<SideBar />
					<Information />
					<MovePopup />
				</div>
				{/* <Content heading='Notifications'> */}
				{/*	{getItems()} */}
				{/* </Content> */}
				{/* <Lists/> */}
				<ListsOwner />
			</Grid>
			{/* <EditPopup/> */}
			<EditOwnerPopup />
		</Grid>
	)
};

export default MyProfileDesktop;

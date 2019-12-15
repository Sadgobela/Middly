import React from 'react';
import {
	Container,
	Header,
	Heading,
	List,
} from './styled';
import Grid from "components/Grid";
import {
	ItemDescription, ItemFollowing,
	ItemHeading,
	ItemPic, ItemReplied,
	ItemTitle,
	NotificationsItem, PostTitle
} from "../../../../components/NotificationBar/styled";
import exampleData from './exampleData';

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

const Content = ()=> {
	return (
		<Container>
			<Header>
				<Heading>Notifications</Heading>
			</Header>
			<List>
				{getItems()}
			</List>
		</Container>
	)
};

export default Content;

import React from 'react';
import {
	NotificationsLabel,
	Title,
	CancelBtn,
	SaveBtn
} from "./styled";
import Grid from 'components/Grid';

const categories = [
	{
		heading: 'Posts',
		list: [
			'I publish a post',
			'My post gets a like',
			'My post gets a comment',
			'Someone reacts to my comment'
		]
	},
	{
		heading: 'Lists',
		list: [
			'My list is followed',
			'My list gets a like',
		]
	},
	{
		heading: 'Profile',
		list: [
			'Someone sends me a message',
			'I send a message',
			'Someone follows me',
			'My reward coins change',
			'Reward coins earned',
		]
	},
	{
		heading: 'Friends',
		list: [
			'Someone joins Middly by my invite',
			'My friend from connected social network joins Middly',
			'Upcoming birthdays of my friend',
		]
	},
];

function Notifications() {
	return (
		<Grid column padding='29px 26px 26px 44px'>
			{
				categories.map(item =>
					<Grid column>
						<Title>{item.heading}</Title>
						{
							item.list.map( (item, i) =>
								<NotificationsLabel active={i % 2}>
									{item}
								</NotificationsLabel>
							)
						}
					</Grid>
				)
			}
			<Grid aic margin='0 0 0 auto'>
				<CancelBtn>Cancel</CancelBtn>
				<SaveBtn>Save</SaveBtn>
			</Grid>
		</Grid>

	);
}

export default Notifications;
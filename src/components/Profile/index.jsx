import React from 'react';
import {
	Container,
	Header,
	Heading,
	FollowInfo,
	FollowCounter,
	Title,
	ProfileLink
} from "./styled";
import Coins from 'assets/Profile/Coins';
import LogOut from 'assets/Profile/LogOut';
import Orders from 'assets/Profile/Orders';
import Recently from 'assets/Profile/Recently';
import Settings from 'assets/Profile/Settings';
import User from 'assets/Profile/User';

const icons = [Coins, User, Orders, Recently, Settings, LogOut];
const links = ['Mid Coins', 'My Profile', 'Orders', 'Recently Viewed', 'Settings', 'Log Out'];

function getIcon(i) {
	const Icon = icons[i];
	return <Icon />
}

const Profile = ()=> (
	<Container>
		<Header>
			<Heading>My Profile</Heading>
		</Header>
		<FollowInfo>
			<Title>
				<FollowCounter>90</FollowCounter>
				New Followers
			</Title>
			<Title last>
				<FollowCounter>15k</FollowCounter>
				Followers
			</Title>
		</FollowInfo>
			{
				links.map( (text, i) =>
					<ProfileLink>
						{getIcon(i)}
						<Title bold={!i} withIcon>{text}</Title>
					</ProfileLink>
				)
			}
	</Container>
);

export default Profile;
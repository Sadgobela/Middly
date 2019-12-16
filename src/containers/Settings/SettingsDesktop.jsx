import React from 'react';
import {
	Aside,
	BackTo,
	MenuBar,
	Heading,

} from './styled';
import Grid from "components/Grid";
import Breadcrumbs from "components/Breadcrumbs";
import {List, Item, Link} from "containers/MyProfile/components/ProfileMenu/styled";
import Icon from "components/Icon";
import Addresses from "./components/Addresses";
import Notifications from "./components/Notifications";
import ProfileContent from "components/ProfileContent";
import Preferences from "./components/Preferences";

const locations = ['Home', 'Profile', 'Account Settings', 'Notifications'];
const links = ['Preferences','Addresses','Notifications'];

function getLinks() {
	return (
		links.map( (item, i) =>
			<Item key={item}>
				<Link active={i === 2}>{item}</Link>
			</Item>)
	)
}

const MyProfileDesktop = ()=> {
	return (
		<Grid pageContainer>
			<Breadcrumbs locations={locations} />
			<Grid>
				<Aside>
					<BackTo>
						<Icon type='arrow' />
						Back to Profile
					</BackTo>
					<MenuBar>
						<Heading>Account Settings</Heading>
						<List>
							{getLinks()}
						</List>
					</MenuBar>
				</Aside>

				{/*<ProfileContent heading='Notifications for email'>*/}
				{/*	/!*<Notifications />*!/*/}
				{/*	/!*<Addresses />*!/*/}
				{/*</ProfileContent>*/}
				<Preferences />
			</Grid>
		</Grid>
	)
};

export default MyProfileDesktop;

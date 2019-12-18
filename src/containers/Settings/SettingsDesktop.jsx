import React, {useState} from 'react';
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

function getLinks(activeLink, setActiveLink) {
	return (
		links.map( (item, i) =>
			<Item key={item}>
				<Link
						name={item}
						onClick={ev => changeContent(ev, setActiveLink)}
						active={item === activeLink}>{item}</Link>
			</Item>)
	)
}

function changeContent(ev, setActiveLink) {
	const activeLink = ev.target.getAttribute('name');
	setActiveLink(activeLink);
}

const MyProfileDesktop = ()=> {
	const [activeLink, setActiveLink] = useState('Preferences');
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
							{getLinks(activeLink, setActiveLink)}
						</List>
					</MenuBar>
				</Aside>
				{
					activeLink === 'Notifications' ?
						<ProfileContent heading='Notifications for email'>
							<Notifications />
						</ProfileContent>
						: null
				}
				{
					activeLink === 'Addresses' ?

						<ProfileContent heading='Addresses'>
							<Addresses />
						</ProfileContent>
						: null
				}
				{
					activeLink === 'Preferences' ?
						<Preferences />
						: null
				}
			</Grid>
		</Grid>
	)
};

export default MyProfileDesktop;

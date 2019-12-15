import React from 'react';
import {

} from './styled';
import Grid from "components/Grid";
import Breadcrumbs from "components/Breadcrumbs";
import {
	Aside,
	BackTo,
	MenuBar,
	Heading,
	EmailNotifications,
	Header,
	Content,
	Wrap,
	NotificationsLabel,
	Title,
	Buttons,
	CancelBtn,
	SaveBtn,
	Addresses,
	ContentWrap,
	AddressesItem,
	AddressTop,
	AddressText,
	Signature,
	Settings,
	SettingsBtn,
	Dot,
	AddressAdd,

} from './styled';
import {List, Item, Link} from "containers/MyProfile/components/ProfileMenu/styled";
import Icon from "components/Icon";
import Notifications from "../../components/Header/components/Notifications";
import {UserAvatar} from "../ProductPage/Components/Feedback/styled";

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
		<Grid>
			<Breadcrumbs locations={locations} />
			<Grid container>
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
				<EmailNotifications>
					<Header>
						Notifications for email
					</Header>
					<Content>
						<Wrap>
							<Title>Posts</Title>
							<NotificationsLabel>
								I publish a post
							</NotificationsLabel>
							<NotificationsLabel>
								My post gets a like
							</NotificationsLabel>
							<NotificationsLabel active>
								My post gets a comment
							</NotificationsLabel>
							<NotificationsLabel>
								Someone reacts to my comment
							</NotificationsLabel>
						</Wrap>
						<Wrap>
							<Title>Lists</Title>
							<NotificationsLabel active>
								My list is followed
							</NotificationsLabel>
							<NotificationsLabel>
								My list gets a like
							</NotificationsLabel>
						</Wrap>
						<Wrap>
							<Title>Profile</Title>
							<NotificationsLabel>
								Someone sends me a message
							</NotificationsLabel>
							<NotificationsLabel>
								I send a message
							</NotificationsLabel>
							<NotificationsLabel active>
								Someone follows me
							</NotificationsLabel>
							<NotificationsLabel active>
								My reward coins change
							</NotificationsLabel>
							<NotificationsLabel>
								Reward coins earned
							</NotificationsLabel>
						</Wrap>
						<Wrap>
							<Title>Friends</Title>
							<NotificationsLabel active>
								Someone joins Middly by my invite
							</NotificationsLabel>
							<NotificationsLabel active>
								My friend from connected social network joins Middly
							</NotificationsLabel>
							<NotificationsLabel active>
								Upcoming birthdays of my friend
							</NotificationsLabel>
						</Wrap>
						<Wrap flexEnd>
							<Buttons>
								<CancelBtn>Cancel</CancelBtn>
								<SaveBtn>Save</SaveBtn>
							</Buttons>
						</Wrap>
					</Content>
				</EmailNotifications>

				<Addresses>
					<Header>
						Shipping Addresses
					</Header>
					<Content>
						<ContentWrap>
							<AddressesItem center>
								<AddressAdd>Add new address</AddressAdd>
							</AddressesItem>
							<AddressesItem>
								<AddressTop>
									<Wrap>
										<AddressText>Home</AddressText>
										<Signature>Primary</Signature>
									</Wrap>
									<Settings>
										<SettingsBtn>
											<Dot />
										</SettingsBtn>
									</Settings>
								</AddressTop>
								<AddressText main>
									7480 Mockingbird Hill undefined Ironville, Oklahoma 41284 United States
								</AddressText>
							</AddressesItem>
						</ContentWrap>
						<ContentWrap>
							<AddressesItem>
								<AddressTop>
									<AddressText>Work</AddressText>
									<Settings>
										<SettingsBtn>
											<Dot />
										</SettingsBtn>
									</Settings>
								</AddressTop>
								<AddressText main>
									7480 Mockingbird Hill undefined Ironville, Oklahoma 41284 United States
								</AddressText>
							</AddressesItem>
							<AddressesItem>
								<AddressTop>
									<AddressText>Address3</AddressText>
									<Settings>
										<SettingsBtn>
											<Dot />
										</SettingsBtn>
									</Settings>
								</AddressTop>
								<AddressText main>
									7480 Mockingbird Hill undefined Ironville, Oklahoma 41284 United States
								</AddressText>
							</AddressesItem>
						</ContentWrap>
					</Content>
				</Addresses>
			</Grid>
		</Grid>
	)
};

export default MyProfileDesktop;

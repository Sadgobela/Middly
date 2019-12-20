import React, {useState} from 'react';
import {
	List,
	Item,
	Link,
} from './styled';
import Grid from "components/Grid";

const links = ['My Profile','My Orders','My Rewards','Messages','Notifications','Settings'];

function getLinks() {
	return (
		links.map( (item, i) =>
			<Item key={item}>
				<Link active={i === 4}>{item}</Link>
			</Item>)
	)
}

const ProfileMenu = ()=>{

	return (
		<List>
			{getLinks()}
		</List>
	)
};

export default ProfileMenu;

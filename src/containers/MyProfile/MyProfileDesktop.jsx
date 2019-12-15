import React from 'react';
import {
	Container,
} from './styled';
import Grid from "components/Grid";
import Breadcrumbs from "components/Breadcrumbs";
import SideBar from "./components/SIdebar";
import Content from "./components/Content";

const locations = ['Home', 'Profile', 'My profile'];

const MyProfileDesktop = ()=> {
	return (
		<Grid>
			<Breadcrumbs locations={locations} />
			<Grid container>
				<SideBar />
				<Content />
			</Grid>
		</Grid>
	)
};

export default MyProfileDesktop;

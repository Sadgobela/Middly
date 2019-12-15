import React from 'react';
import {
	Container,
	Logo,
	About,
	Name,
	Title,
	Date
} from './styled';
import Grid from "components/Grid";
import Icons from "components/Icon";

export default function () {
	return(
		<Container>
			<Grid container aic>
				<Logo>
					<Icons type='shop'/>
				</Logo>
				<About>
					<Name>valentino</Name>
					<Title>To your shop</Title>
				</About>
				<Icons type='arrow'/>
			</Grid>
			<Date>Joined 12 Sep, 2019</Date>
		</Container>
	)
};

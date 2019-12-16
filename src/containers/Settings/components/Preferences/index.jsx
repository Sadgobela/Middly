import React from 'react';
import {
	Container,
} from './styled';
import Grid from 'components/Grid';
import LocalPreferences from "../LocalPreferences";
import Password from "../Password";
import ChangeEmail from "../ChangeEmail";
import Social from "../Social";

function Preferences() {
	return (
		<Grid column>
			<Container>
				<LocalPreferences />
			</Container>
			<Container>
				<Password/>
			</Container>
			<Container>
				<ChangeEmail/>
			</Container>
			<Container>
				<Social />
			</Container>
		</Grid>
	);
}

export default Preferences;
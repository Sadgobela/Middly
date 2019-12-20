import React from 'react';
import {
	Container,
} from './styled';
import Grid from 'components/Grid';
import LocalPreferences from "../LocalPreferences";
import Password from "../Password";
import ChangeEmail from "../ChangeEmail";
import Social from "../Social";
import Interests from "../Interests";
import {CancelBtn, SaveBtn} from "../Notifications/styled";

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
			<Container>
				<Interests />
			</Container>
			<Grid aic margin='0 0 0 auto'>
				<CancelBtn>Cancel</CancelBtn>
				<SaveBtn>Save</SaveBtn>
			</Grid>
		</Grid>
	);
}

export default Preferences;
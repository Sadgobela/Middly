import React from 'react';
import {
	InputField,
	Label
} from './styled';
import Grid from 'components/Grid';
import ProfileContent from "components/ProfileContent";

function ChangeEmail() {
	return (
		<ProfileContent heading='Change Password'>
			<Grid aic sb padding='24px 58px 24px 44px'>
				<Label>New e-mail</Label>
				<InputField type='email' />
			</Grid>
		</ProfileContent>

	);
}

export default ChangeEmail;
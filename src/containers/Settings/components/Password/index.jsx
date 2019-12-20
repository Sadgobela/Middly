import React from 'react';
import {
	Label,
	InputField,
	EyeIcon
} from './styled';
import Grid from "components/Grid";
import Icon from "components/Icon";
import ProfileContent from "components/ProfileContent";

const password = ['Old', 'New Password', 'Repeat New Password'];

function getFields() {
	return(
		password.map( (item, i) =>
			<Grid aic sb margin='0 0 20px 0' width='100%'>
				<Label>{item}</Label>
				<Grid>
					<InputField type='password' />
					{i ?
						<EyeIcon>
							<Icon type='eye'/>
						</EyeIcon>
						: null
					}
				</Grid>
			</Grid>
		)
	)
}

function Password() {
	return (
		<ProfileContent heading='Change Password'>
			<Grid column padding='24px 58px 24px 44px'>
				{ getFields() }
			</Grid>
		</ProfileContent>
	);
}

export default Password;
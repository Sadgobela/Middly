import React from 'react';
import {
	InputField,
	Label,
	AddSocial,
} from './styled';
import Grid from 'components/Grid';

function Social() {
	return (
		<Grid column
					padding='24px 58px 24px 44px'
					bg='#fff'
					bsh='0px 2px 4px rgba(0, 0, 0, 0.1)'
					margin='0 0 0 16px'
					width='600px'
		>
			<Grid aic sb width='100%' margin='0 0 20px 0'>
				<Label>Facebook</Label>
				<InputField value='@thosesunnydays' />
			</Grid>
			<Grid aic sb width='100%'>
				<Label>Instagram</Label>
				<InputField value='@thosesunnydays' />
			</Grid>
			<AddSocial>Add Social Network</AddSocial>
		</Grid>
	);
}

export default Social;
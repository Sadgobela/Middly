import React from 'react';
import {
	Field,
	Label
} from './styled';
import Grid from "../../../../components/Grid";
import ProfileContent from "components/ProfileContent";

const local = [
	{
		label: 'Country',
		value: 'Bahrain'
	},
	{
		label: 'Timezone',
		value: '(GTM + 3:00) Manama'
	},
	{
		label: 'Currency',
		value: 'BHD (Bahraini dinar)'
	},
	{
		label: 'Language',
		value: 'English'
	},
];

function getFields() {
	return(
		local.map( item =>
			<Grid aic sb margin='0 0 20px 0' width='100%'>
				<Label>{item.label}</Label>
				<Field defaultValue={item.value}>

				</Field>
			</Grid>
		)
	)
}

function LocalPreferences() {
	return (
		<ProfileContent heading='Local Preferences'>
			<Grid column padding='24px 58px 24px 44px'>
				{ getFields() }
			</Grid>
		</ProfileContent>
	);
}

export default LocalPreferences;
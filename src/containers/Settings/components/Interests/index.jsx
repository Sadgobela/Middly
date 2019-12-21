import React from 'react';
import {
	InputField,
	Add,
	Selected,
	AddNew,
} from './styled';
import Grid from 'components/Grid';
import ProfileContent from "components/ProfileContent";

function Interests() {
	return (
		<ProfileContent heading='Interests'>
			<Grid column padding='24px 58px 24px 44px'>
				<Grid wrap>
					<Selected>Fashion X</Selected>
					<Selected>Movie X</Selected>
					<Selected>Fashion X</Selected>
					<Selected>Fashion X</Selected>
					<Selected>AD X</Selected>
				</Grid>
				<AddNew>
					<InputField placeholder='Please write here' />
					<Add>Add new</Add>
				</AddNew>

			</Grid>
		</ProfileContent>

	);
}

export default Interests;
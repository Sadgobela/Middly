import React from 'react';
import FormTemplate from "../FormTemplate";

const formData =
	{
		heading: 'Sign In',
		title: "Don't have an account yet?",
		submitTitle: 'Sign In',
		fields: [
			{
				label: 'Email', type: 'email', errorMessage: 'Please enter your Email', isRequired: true,
			},
			{
				label: 'Password', type: 'password', errorMessage: 'Please enter a password (minimum 8 symbols)', isRequired: true,
			},
		],
	}
;

const SignIn = () => {

	return (
		<FormTemplate formData={formData} formType='signIn' />
	)
};
export default SignIn;

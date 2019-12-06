import React from 'react';
import FormTemplate from "../FormTemplate";

const formData =
	{
		heading: 'Create Account',
		title: 'Already have a Middly account?',
		submitTitle: 'Register',
		fields: [
			{
				label: 'First Name', type: 'text', errorMessage: 'Please enter your First Name', isRequired: true, width: 165,
			},
			{
				label: 'Last Name', type: 'text', errorMessage: 'Please enter your Last Name', isRequired: true, width: 168,
			},
			{
				label: 'Email', type: 'email', errorMessage: 'Please enter your Email', isRequired: true,
			},
			{
				label: 'Select Username', type: 'text', errorMessage: 'Please enter Username', isRequired: true,
			},
			{
				label: 'Password', type: 'password', errorMessage: 'Please enter a password (minimum 8 symbols)', isRequired: true,
			},
		],
	}

;

const SignUp = () => {

	return (
		<FormTemplate formData={formData} formType='signUp' />
	)
};

export default SignUp;

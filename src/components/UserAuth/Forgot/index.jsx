import React from 'react';
import FormTemplate from '../FormTemplate';

const formData =
	{
		heading: 'Forgot Password?',
		title: 'Please enter your email address to reset your password',
		submitTitle: 'Submit',
		fields: [
			{
				label: 'Email', type: 'email', errorMessage: 'Please enter your Email', isRequired: true,
			},
		],
	}
;

const Forgot = () => {

	return (
		<FormTemplate formData={formData} formType='forgot' />
	)
};

export default Forgot;

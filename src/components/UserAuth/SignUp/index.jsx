import React, {useEffect} from 'react';
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
				label: 'Select Username', name: 'username', type: 'text', errorMessage: 'Please enter Username', isRequired: true,
			},
			{
				label: 'Password', type: 'password', errorMessage: 'Please enter a password (minimum 8 symbols)', isRequired: true,
			},
		],
	}

;

const SignUp = () => {

	const checkUsername = ev =>{
		if(ev.target.value.length > 3){
			ev.target.parentNode.querySelector('.username-field').classList.add('validUsername');
		} else {
			ev.target.parentNode.querySelector('.username-field').classList.remove('validUsername');
		}
	};

	useEffect(() => {
		const field = document.querySelector('.username-field').parentNode.querySelector('input');
		field.addEventListener('input', checkUsername);
		return () => {
			field.removeEventListener('input', checkUsername);
		};
	});

	return (
		<FormTemplate formData={formData} formType='signUp' />
	)
};

export default SignUp;

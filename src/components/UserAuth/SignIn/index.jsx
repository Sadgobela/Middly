import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import CreateFields from "../CreateFields";
import Close from '../CloseButton';
import {
	Overlay,
	SignForm,
	Submit,
	Heading,
	FieldsWrap,
	Title,
	Line,
	LinkTo,
} from './styled';

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

const SignIn = ({ form }) => {

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'visible';
		};
	});

	const { validateFields } = form;

	const onSubmitHandler = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	return (
		<Overlay>
			<SignForm onSubmit={onSubmitHandler}>
				<Close />
				<Heading>{formData.heading}</Heading>
				<Title>{formData.title} <LinkTo block='true' to="/sign-up" >Create account</LinkTo></Title>
				<FieldsWrap>
					{CreateFields(form, formData)}
					<LinkTo right="true" to="/forgot">Forgot Password?</LinkTo>
				</FieldsWrap>
				<Submit type="primary" htmlType="submit">
					{formData.submitTitle}
				</Submit>
				<Line/>
				<Social />
			</SignForm>
		</Overlay>
	)
};

const WrappedSignIn = SignForm.create({ name: 'sign_in' })(SignIn);

SignIn.propTypes = {
	form: PropTypes.isRequired,
};

export default WrappedSignIn;

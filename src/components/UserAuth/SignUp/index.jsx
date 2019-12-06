import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import CreateFields from "../CreateFields";
import Close from '../CloseButton';
import {
	Overlay,
	SignForm,
	Submit,
	FormItem,
	Checked,
	Heading,
	FieldsWrap,
	Title,
	Agreement,
	Line,
	LinkTo,
} from './styled';

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

const SignUp = ({ form }) => {

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'visible';
		};
	});

	const { getFieldDecorator, validateFields } = form;

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
				<Title>{formData.title} <LinkTo block to="/sign-in" >Log in</LinkTo></Title>
				<FieldsWrap>
					{CreateFields(form, formData)}
					<FormItem checkbox>
						{getFieldDecorator('agreement',
							{
								valuePropName: 'checked',
								rules: [{ required: true, message: 'Please accept terms and conditions', type: 'boolean' }],
							})(<Checked>
								<Agreement>
									I have read and I agree to comply with the&#160;
									<LinkTo to="/sign-up" >Terms & Conditions</LinkTo>&#160;
									of the&#160;
									<LinkTo to="/sign-up" >seller agreement</LinkTo>
								</Agreement>
							</Checked>
						)
						}
					</FormItem>
				</FieldsWrap>
				<Submit type="primary" htmlType="submit">
					{formData.submitTitle}
				</Submit>
				<Line/>
				<Social />
				<Title>Already have an account? <LinkTo to="/sign-in" >Sign In</LinkTo></Title>
			</SignForm>
		</Overlay>
	)
};

const WrappedSignUp = SignForm.create({ name: 'sign_up' })(SignUp);

SignUp.propTypes = {
	form: PropTypes.isRequired,
};

export default WrappedSignUp;

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CreateFields from "../CreateFields";
import Close from '../CloseButton';
import Arrow from 'assets/ArrowLeft';
import {
	Overlay,
	SignForm,
	Submit,
	Heading,
	FieldsWrap,
	Title,
	BackToSign,
} from './styled';

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

const Forgot = ({ form }) => {

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
				<BackToSign to='/sign-in'>
					<Arrow />
				</BackToSign>
				<Close />
				<Heading>{formData.heading}</Heading>
				<Title>{formData.title}</Title>
				<FieldsWrap>
					{CreateFields(form, formData)}
				</FieldsWrap>
				<Submit type="primary" htmlType="submit">
					{formData.submitTitle}
				</Submit>
			</SignForm>
		</Overlay>
	)
};

const WrappedForgot = SignForm.create({ name: 'forgot' })(Forgot);

Forgot.propTypes = {
	form: PropTypes.isRequired,
};

export default WrappedForgot;

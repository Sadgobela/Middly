import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CreateFields from "../CreateFields";
import {
	Overlay,
	SignForm,
	Submit,
	Heading,
	FieldsWrap,
	Title,
} from './styled';

const formData =
	{
		heading: 'Forgot Password?',
		title: 'Please enter your email address to reset your password',
		submitTitle: 'Submit',
		fields: [
			{
				label: 'Email', type: 'text', errorMessage: 'Error text', isRequired: true,
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

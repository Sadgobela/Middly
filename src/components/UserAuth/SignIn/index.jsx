import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
	Overlay,
	SignForm,
	Field,
	Submit,
	FormItem,
	Heading,
	FieldsWrap,
	Title,
	WithGoogle,
	WithFacebook,
	SocialName,
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
				label: 'Email / Username', type: 'text', errorMessage: 'Error text', isRequired: true,
			},
			{
				label: 'Password', type: 'password', errorMessage: 'Error text', isRequired: true,
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
				<Heading>{formData.heading}</Heading>
				<Title>{formData.title} <LinkTo to="/sign-up" >Create account</LinkTo></Title>
				<FieldsWrap>
					{
						formData.fields.map( field =>
							<FormItem key={field.label} style={{width: `${field.width  }px` || null}} label={field.label}>
								{
									getFieldDecorator(field.label.replace(/ /gi, ''), {
										rules: [{ required: field.isRequired, message: field.errorMessage }],
									})( <Field type={field.type} />,)
								}
							</FormItem>
						)
					}
					<LinkTo right to="/forgot" >Forgot Password?</LinkTo>
				</FieldsWrap>
				<Submit type="primary" htmlType="submit">
					{formData.submitTitle}
				</Submit>
				<Line/>
				<WithGoogle>
					Continue with <SocialName color="#287BDD">Google</SocialName>
				</WithGoogle>
				<WithFacebook>
					Continue with <SocialName color="#175195">Facebook</SocialName>
				</WithFacebook>
			</SignForm>
		</Overlay>
	)
};

const WrappedSignIn = SignForm.create({ name: 'sign_in' })(SignIn);

SignIn.propTypes = {
	form: PropTypes.isRequired,
};

export default WrappedSignIn;

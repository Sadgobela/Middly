import React from 'react';
// import PropTypes from 'prop-types';
import {
	Overlay,
	SignForm,
	Icons,
	Field,
	Submit,
	FormItem,
	Checked,
	Heading,
	FieldsWrap,
	Title,
	WithGoogle,
	WithFacebook,
	SocialName,
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
				label: 'First Name', type: 'text', errorMessage: 'Please enter your First Name', isRequired: true, width: 164,
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

class SignUp extends React.Component {
	onSubmitHandler = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	componentDidMount() {
		document.body.style.overflow = 'hidden';
	}

	componentWillUnmount() {
		document.body.style.overflow = 'hidden';
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Overlay>
				<SignForm onSubmit={this.onSubmitHandler}>
					<Heading>{formData.heading}</Heading>
					<Title>{formData.title} <LinkTo to="/sign-in" >Log in</LinkTo></Title>
					<FieldsWrap>
						{
							formData.fields.map( field =>
								<FormItem key={field.label} style={{width: field.width + 'px' || null}} label={field.label}>
									{
										getFieldDecorator(field.label.replace(/ /gi, ''), {
											rules: [{ required: field.isRequired, message: field.errorMessage }],
										})( <Field type={field.type} />,)
									}
								</FormItem>
							)
						}
						<FormItem>
							{getFieldDecorator('agreement', {
								valuePropName: 'checked',
								initialValue: false,
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
					<WithGoogle>
						Continue with <SocialName color="#287BDD">Google</SocialName>
					</WithGoogle>
					<WithFacebook>
						Continue with <SocialName color="#175195">Facebook</SocialName>
					</WithFacebook>
					<Title>Already have an account? <LinkTo to="/sign-in" >Sign In</LinkTo></Title>
				</SignForm>
			</Overlay>
		);
	}
}

const WrappedSignUp = SignForm.create({ name: 'sign_up' })(SignUp);

// SignIn.propTypes = {

// };

export default WrappedSignUp;

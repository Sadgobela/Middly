import React from 'react';
// import PropTypes from 'prop-types';
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

class Forgot extends React.Component {
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
					<Title>{formData.title}</Title>
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
					</FieldsWrap>
					<Submit type="primary" htmlType="submit">
						{formData.submitTitle}
					</Submit>
				</SignForm>
			</Overlay>
		);
	}
}

const WrappedForgot = SignForm.create({ name: 'forgot' })(Forgot);

// SignIn.propTypes = {

// };

export default WrappedForgot;

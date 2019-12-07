import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import CreateFields from "../CreateFields";
import Close from '../CloseButton';
import Arrow from 'assets/ArrowLeft';
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
	BackToSign,
} from './styled';

const FormTemplate = ({ form, formData, formType }) => {

	useEffect(() => {
		document.querySelector('body').classList.add('overflow-hidden');
		document.querySelector('html').classList.add('overflow-hidden');
		try{
			document.querySelector('.testLinksContainer').style.top = '-100%';
			document.querySelector('.testLinksContainer').nextElementSibling.style.background = 'transparent';
		} catch (e) { }
		return () => {
			document.querySelector('body').classList.remove('overflow-hidden');
			document.querySelector('html').classList.remove('overflow-hidden');
			try{
				document.querySelector('.testLinksContainer').style.top = '';
				document.querySelector('.testLinksContainer').nextElementSibling.style.background = '';
			} catch (e) { }
		};
	});

	const { getFieldDecorator, validateFields } = form;

	const isSignIn = formType === 'signIn';
	const isSignUp = formType === 'signUp';
	const isForgot = formType === 'forgot';

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
				{isForgot
					?
					<BackToSign to='/sign-in'>
						<Arrow />
					</BackToSign>
				: null
				}
				<Heading>{formData.heading}</Heading>
				<Title forgot={isForgot}>{formData.title}&#160;
					{
						!isForgot
						? <LinkTo block='true' to={formType === 'signIn' ? '/sign-up' : '/sign-in'} >
								{formType === 'signIn' ? ' Create account' : 'Log in'}
							</LinkTo>
							: null
					}
				</Title>
				<FieldsWrap>
					{CreateFields(form, formData)}
					{
						isSignUp
						?
							<FormItem checkbox>
								{getFieldDecorator('agreement',
									{
										valuePropName: 'checked',
										rules: [{ required: true, message: 'Please accept terms and conditions', type: 'boolean' }],
									})(<Checked>
										<Agreement>
											I have read and I agree to comply with the&#160;
											<LinkTo to="/" >Terms & Conditions</LinkTo>&#160;
											of the&#160;
											<LinkTo to="/" >seller agreement</LinkTo>
										</Agreement>
									</Checked>
								)
								}
							</FormItem>
							: null
					}
					{
						isSignIn ? <LinkTo right="true" to="/forgot">Forgot Password?</LinkTo> : null
					}
				</FieldsWrap>
				<Submit forgot={isForgot} type="primary" htmlType="submit">
					{formData.submitTitle}
				</Submit>
				<Line signIn={isSignIn} hide={isForgot}/>
				{
					!isForgot
						?
						<>
							<Social />
						</>
						: null
				}
			</SignForm>
		</Overlay>
	)
};

const WrappedFormTemplate = SignForm.create({ name: 'auth' })(FormTemplate);

FormTemplate.propTypes = {
	form: PropTypes.isRequired,
};

export default WrappedFormTemplate;

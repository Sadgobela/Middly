import React from 'react';
import {
	EyeIcon,
	Field,
	FormItem,
} from './styled';

const CreateFields = (form, data) => {

	const typeToggle = el => {
		const input = el.closest('.ant-input-affix-wrapper').querySelector('input');
		input.focus();
		const type = input.getAttribute('type');
		input.setAttribute('type', type === 'password' ? 'text' : 'password');
		el.classList.toggle('suffix-showPassword');
	};

	const clear = el => {
		const input = el.closest('.ant-input-affix-wrapper').querySelector('input');
		input.focus();
		input.value = '';
	};

	const { getFieldDecorator } = form;

	const setIcon = type => {
		if(type === 'password'){
			return <EyeIcon type={type} onClick={ ev => typeToggle(ev.target)} />
		}
		if(type === 'email'){
			return <EyeIcon type={type} onClick={ ev => clear(ev.target)} />
		}
		return null;
	};

	return (
			<>
				{
					data.fields.map( field =>
						<FormItem key={field.label} width={field.width || null} label={field.label}>
							{
								getFieldDecorator(field.label.replace(/ /gi, ''), {
									rules: [{ required: field.isRequired, message: field.errorMessage }],
								})( <Field suffix={setIcon(field.type)} type={field.type} />,)
							}
						</FormItem>
					)
				}
			</>
	)
};

export default CreateFields;

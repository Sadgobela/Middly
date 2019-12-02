import React from 'react';
import {
	EyeIcon,
	Field,
	FormItem,
} from './styled';

const CreateFields = (form, data) => {

	const { getFieldDecorator } = form;

	const setIcon = type => {
		if(type === 'password'){
			return <EyeIcon type={type} onClick={()=>console.log('ok')} />
		}
		if(type === 'email'){
			return <EyeIcon type={type} onClick={()=>console.log('ok')} />
		}
		return null;
	};

	return (
			<>
				{
					data.fields.map( field =>
						<FormItem key={field.label} style={{width: `${field.width  }px` || null}} label={field.label}>
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

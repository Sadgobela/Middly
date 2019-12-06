import React from 'react';
import { CloseButton } from './styled';
import CloseIcon from 'assets/CloseIcon';

const Close = () => {

	return (
		<CloseButton to='/'>
			<CloseIcon />
		</CloseButton>
	)

};

export default Close;

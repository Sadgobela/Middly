import React from 'react';
import {
	Wrap,
	Text,
	Link,
	TextWrap,
	Pic,

} from './styled';
import done from './img/done.svg';


function MovePopup() {
	return (
		<Wrap>
			<Pic src={done}/>
			<TextWrap>
				<Text>You moved this product to new list!</Text>
				<Text><Link>Click here</Link> to see a new updated list!</Text>
			</TextWrap>
		</Wrap>

	)
}

export default MovePopup;
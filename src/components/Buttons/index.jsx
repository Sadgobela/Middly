import React from 'react';
import {
	AddToCart,
	Buy,
	SeeMore,
} from './styled';
import Arrow from 'assets/Arrow';

const components = {
	addToCart: AddToCart,
	buy: Buy,
	seeMore: SeeMore,
};

const Button = ({type, action, withText=null})=> {
	if(type === 'addToCart'){
		return (
			<AddToCart onClick={action} >Add to Cart</AddToCart>
		) 
	}
	if(type === 'buy'){
		return (
			<Buy onClick={action}>Buy Now</Buy>
		)
	}
	if(type === 'seeMore'){
		return (
			<SeeMore withText={withText} onClick={action}>
				<Arrow />
			</SeeMore>
		)
	}

};

export default Button;
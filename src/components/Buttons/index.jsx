import React from 'react';
import {
	AddToCart,
	Buy,
	SeeMore,
	Follow,
	Following,
} from './styled';
import Icons from "../Icon";

const components = {
	addToCart: {
		component: AddToCart,
		text: 'Add to cart'
	},
	buy: {
		component: Buy,
		text: 'Buy now'
	},
	seeMore: {
		component: SeeMore,
		icon: 'arrow'
	},
	follow: {
		component: Follow,
		text: 'Follow',
		icon: 'plus'
	},
	following: {
		component: Following,
		text: 'Following',
	},
};

const Button = ({type, props})=> {

	const Component = components[type].component;
	const text = components[type].text || null;
	const icon = components[type].icon;

	return(
		<Component {...props}>
			{ icon ? <Icons type={icon} /> : null}
			{text}
		</Component>
	)



};

export default Button;
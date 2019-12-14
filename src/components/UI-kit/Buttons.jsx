import React from 'react';
import Button from '../Buttons';

export default function (){
	return (
		<>
			<Button type='addToCart' />
			<Button type='buy'  />
			<Button type='seeMore' props={{withText: true}} />
			<Button type='seeMore' />
			<Button type='follow' />
			<Button type='following' />
		</>
	)
};
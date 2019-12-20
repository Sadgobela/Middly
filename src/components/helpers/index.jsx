import React from 'react';
import Star from "../../assets/ProductPage/Star";

export const setRating = 	value => {
	let Rating = [];
	for(let i = 0; i < value; i++){
		Rating.push(<Star />)
	}
	if(value < 5){
		for(let i = 0; i < 5 - value; i++){
			Rating.push(<Star color='#efefef' />)
		}
	}
	return Rating;
};
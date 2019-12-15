import React from 'react';
import {
} from './styled';
import Grid from 'components/Grid';
import Post from 'components/Cards/Post';
import exampleData from "./exampleData";

function getCards() {
	return(
		exampleData.map( item => <Post content={item} margin='0 0 40px 0' />)
	)
}

const Result = ()=>{
	return (
		<Grid container sb wrap margin='40px 0 0 0'>
			{getCards()}
		</Grid>
	)
};

export default Result;

import React from 'react';
import Grid from 'components/Grid';
import Post from 'components/Cards/Product';
import exampleData from "./exampleData";

function getCards() {
	return(
		exampleData.map( item => <Post content={item} margin='0 0 40px 0' />)
	)
}

const Result = ()=>{
	return (
		<Grid sb wrap margin='40px 0 0 0'>
			{getCards()}
		</Grid>
	)
};

export default Result;

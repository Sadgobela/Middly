import React from 'react';
import {
	Card,
	Avatar,
	About,
	AvatarLogo,
	Name,
	Time,
	Poster,
	PosterPic,
	Shop,
	Likes,
	Prices,
	PriceValue,
	Shipping,
	Bookmark
} from './styled';
import Icons from "../../Icon";
import Grid from "components/Grid";

const Post = ({content, margin})=>{

	const { name, poster, original_price, likes, discount_price } = content;

	return (
		<Card margin={margin}>
			<Poster>
				<PosterPic src={poster[0]} />
			</Poster>
			<Grid sb padding="0 8px" margin="8px 0">
				<Prices>
					<PriceValue isDiscounted>${discount_price}</PriceValue>
					<PriceValue>${original_price}</PriceValue>
				</Prices>
				<Shipping>Free Shipping</Shipping>
			</Grid>
			<Grid aic padding='0 10px 0 8px'>
				<Name>{name}</Name>
			</Grid>
			<Grid sb aic margin="25px 0 20px 0" padding='0 15px'>
				<Likes>
					<Icons type='like'/>
					{likes}
				</Likes>
				<Bookmark>
					<Icons type='bookmark'/>
				</Bookmark>
			</Grid>

		</Card>
	)
};

export default Post;

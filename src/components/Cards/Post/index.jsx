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
} from './styled';
import {setRating} from "../../helpers";
import Icons from "../../Icon";
import Grid from "components/Grid";

const Post = ({content, margin})=>{
	const {logo, name, poster, time, shop, likes, rating} = content;
	return (
		<Card margin={margin}>
			<Time>{time}</Time>
			<Grid container aic height={64} padding='0 0 0 16px'>
				<Avatar>
					<AvatarLogo src={logo} />
				</Avatar>
				<About>
					<Name>{name}</Name>
					{setRating(rating)}
				</About>
			</Grid>
			<Poster>
				<PosterPic src={poster} />
			</Poster>
			<Grid container sb aic height={43} padding='0 15px'>
				<Shop>
					<Icons type='bags'/>
					{shop}
				</Shop>
				<Likes>
					<Icons type='like'/>
					{likes}
				</Likes>
			</Grid>

		</Card>
	)
};

export default Post;

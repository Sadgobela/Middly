import React, {useState} from 'react';
import {
	Aside,
	About,
	Avatar,
	AvatarPic,
	Location,
	Name,
	Statistic,
	StatisticCount,
	Description,
	Profession,
	EditAvatar,
	AvatarWrap,
} from './styled';
import Grid from "components/Grid";
import avatar from './img/avatar.jpg';
import ProfileMenu from "../ProfileMenu";
import MyShop from "../MyShop";
import Icon from "components/Icon";

const profile = {
	avatar,
	name: 'Kathryn Mccoy',
	location: 'Kiev, Ukraine',
	followers: 234,
	following: 345,
	profession: 'stylist',
	description: 'Trendy overview for last season, tenden collaboration, FW The magazine covers international, national and local fashion and beauty trends and news.',
};

function cutWords(word) {
	let text = word.split('').map( (word, i) => i < 57 ? word : null ).join().replace(/,/gi, '');
	return text + '...';
}

const SideBar = ()=>{
	const [isLess, setIsLess] = useState(true);
	return (
		<Aside>
			<About>
				<AvatarWrap>
					<Avatar>
						<AvatarPic src={profile.avatar}/>
					</Avatar>
					<EditAvatar>
						<Icon type='pencil' />
					</EditAvatar>
				</AvatarWrap>
				<Name>{profile.name}</Name>
				<Location>
					<Icon type='marker' />
					{profile.location}
				</Location>
				<Grid sb>
					<Statistic margin>
						<StatisticCount>{profile.followers}</StatisticCount>
						followers
					</Statistic>
					<Statistic>
						<StatisticCount>{profile.following}</StatisticCount>
						following
					</Statistic>
				</Grid>
				<Profession>{profile.profession}</Profession>
				<Description less={isLess} onClick={()=> setIsLess(!isLess)}>
					{isLess ? cutWords(profile.description): profile.description}
				</Description>
			</About>
			<ProfileMenu />
			<MyShop />
		</Aside>
	)
};

export default  SideBar;

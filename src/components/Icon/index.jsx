import React from 'react';
import {
	Container,
} from './styled';
import AddMessage from "assets/AddMessage";
import Arrow from "assets/Arrow";
import ArrowFooter from "assets/ArrowFooter";
import BellIcon from "assets/BellIcon";
import BurgerIcon from "assets/BurgerIcon";
import Bookmark from "assets/Bookmark";
import BoxIcon from "assets/BoxIcon";
import Check from "assets/Check";
import Plus from "assets/Plus";
import ArrowBack from "assets/ArrowBack";
import Star from "assets/Star";
import Coins from "assets/Coins";
import Like from "assets/Like";
import Message from "assets/MessageIcon";
import Share from "assets/Share";
import BookmarkIcon from "assets/BookmarkIcon";

const icons = {
	addMessage: AddMessage,
	arrow: Arrow,
	arrowFooter: ArrowFooter,
	bellIcon: BellIcon,
	burgerIcon: BurgerIcon,
	bookmark: Bookmark,
	boxIcon: BoxIcon,
	check: Check,
	plus: Plus,
	arrowBack: ArrowBack,
	star: Star,
	coins: Coins,
	like: Like,
	message: Message,
	share: Share,
	bookmarkIcon: BookmarkIcon
};

const Icons = ({type, props, svgStyle})=> {
	const Icon = icons[type];

	return (
		<Container {...props}>
			<Icon {...svgStyle}/>
		</Container>
	)
};

export default Icons;
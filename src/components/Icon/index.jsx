import React from 'react';

import AddMessage from "assets/AddMessage";
import Arrow from "assets/Arrow";
import ArrowFooter from "assets/ArrowFooter";
import BellIcon from "assets/BellIcon";
import BurgerIcon from "assets/BurgerIcon";
import Bookmark from "assets/Bookmark";
import BoxIcon from "assets/BoxIcon";
import Check from "assets/Check";
import Plus from "assets/Plus";
import Heart from "assets/Heart";
import Like from "assets/Like";
import Shop from "assets/Shop";
import Bags from "assets/Bags";
import Pencil from "assets/Pencil";
import Marker from "assets/Marker";
import Eye from "assets/Eye";
import CoinsProfile from "assets/Profile/Coins";
import Close from "assets/CloseIcon";
import ArrowBack from "assets/ArrowBack";
import Star from "assets/Star";
import Coins from "assets/Coins";
import Message from "assets/MessageIcon";
import Share from "assets/Share";
import BookmarkIcon from "assets/BookmarkIcon";
import Send from "assets/Send";
import Checkbox from "assets/Checkbox";
import ShoppingCart from "assets/ShoppingCart";
import Lock from "assets/Lock";
import Filter from "assets/Filter";

import {
	Container,
} from './styled';
import Loader from "../../assets/Loader";

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
	heart: Heart,
	like: Like,
	shop: Shop,
	bags: Bags,
	pencil: Pencil,
	marker: Marker,
	eye: Eye,
	coinsProfile: CoinsProfile,
	coins: Coins,
	close: Close,
	arrowBack: ArrowBack,
	star: Star,
	message: Message,
	share: Share,
	bookmarkIcon: BookmarkIcon,
	send: Send,
	checkbox: Checkbox,
	cart: ShoppingCart,
	lock: Lock,
	loader: Loader,
	filter: Filter
};

const Icons = ({type, props, svgStyle, color, width, height})=> {
	const Icon = icons[type];

	return (
		<Container {...props}>
			<Icon color={color} width={width} height={height} {...svgStyle}/>
		</Container>
	)
};

export default Icons;
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
import Heart from "assets/Heart";
import Like from "assets/Like";
import Shop from "assets/Shop";
import Bags from "assets/Bags";
import Pencil from "assets/Pencil";
import Marker from "assets/Marker";
import Eye from "assets/Eye";
import Coins from "assets/Profile/Coins";
import Close from "assets/CloseIcon";
import ArrowBack from "assets/ArrowBack";
import Star from "assets/Star";
import Coins from "assets/Coins";
import Like from "assets/Like";
import Message from "assets/MessageIcon";
import Share from "assets/Share";
import BookmarkIcon from "assets/BookmarkIcon";
import CloseIcon from "assets/CloseIcon";
import Send from "assets/Send";
import Checkbox from "assets/Checkbox";
import ShoppingCart from "assets/ShoppingCart";

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
	coins: Coins,
	close: Close,
};

const Icons = ({type, props, color, width, height})=> {
	arrowBack: ArrowBack,
	star: Star,
	coins: Coins,
	like: Like,
	message: Message,
	share: Share,
	bookmarkIcon: BookmarkIcon,
	close: CloseIcon,
	send: Send,
	checkbox: Checkbox,
	cart: ShoppingCart
};

const Icons = ({type, props, svgStyle})=> {
	const Icon = icons[type];

	return (
		<Container {...props}>
			<Icon color={color} width={width} height={height} />
			<Icon {...svgStyle}/>
		</Container>
	)
};

export default Icons;
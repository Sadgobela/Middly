import React from 'react';
import {
	Container,
} from './styled';
import AddMessage from "../../assets/AddMessage";
import Arrow from "../../assets/Arrow";
import ArrowFooter from "../../assets/ArrowFooter";
import BellIcon from "../../assets/BellIcon";
import BurgerIcon from "../../assets/BurgerIcon";
import Bookmark from "../../assets/Bookmark";
import BoxIcon from "../../assets/BoxIcon";
import Check from "../../assets/Check";
import Plus from "../../assets/Plus";
import Heart from "../../assets/Heart";
import Like from "../../assets/Like";
import Shop from "../../assets/Shop";
import Bags from "../../assets/Bags";
import Pencil from "../../assets/Pencil";
import Marker from "../../assets/Marker";

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
};

const Icons = ({type, props})=> {
	const Icon = icons[type];
	return (
		<Container {...props}>
			<Icon  />
		</Container>

	)
};

export default Icons;

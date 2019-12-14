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

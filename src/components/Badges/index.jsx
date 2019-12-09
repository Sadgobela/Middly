import React from 'react';
import Badge from './styled';

import LetterIcon from 'assets/LetterIcon';
import ShoppingCart from 'assets/ShoppingCart';
import BellIcon from 'assets/BellIcon';
import Search from 'assets/Search';

const Badges = ({name, counter, action}) => {

	function getIcon(name) {
		if(name === 'notifications'){
			return <BellIcon />
		}
		if(name === 'message'){
			return <LetterIcon />
		}
		if(name === 'cart'){
			return <ShoppingCart />
		}
		if(name === 'search'){
			return <Search color='#000' />
		}
	}

	function clickHandler(ev) {
		const activeBadge = ev.target.closest('div').querySelector('.badge--active');
		if(activeBadge){
			activeBadge.classList.remove('badge--active');
		}
		ev.target.classList.add('badge--active');
		action(ev);
	}

	return(
		<Badge name={name} counter={counter} onClick={ ev => clickHandler(ev)}>
			{getIcon(name)}
		</Badge>
	)

};

export default Badges;
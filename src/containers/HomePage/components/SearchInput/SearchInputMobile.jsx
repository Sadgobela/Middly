import React, {useState}  from 'react';
import { CSSTransition } from 'react-transition-group';
import {
	Search,
	SearchContainer,
	Result,
	ResultContainer,
	Response,
	ResponseTitle,
	TabList,
	Tab,
	RecentlyList,
	ClearRecently,
	RecentlyHeader,
	SearchInputWrap,
	SearchCancel,
	RecentlyItem,
	ProductItem,
	ProductItemPic,
	ProductItemDescription,
} from './styled';
import Badges from '../../../../components/Badges';

const category = ['Products', 'Stores', 'Posts', 'Lists'];

const SearchInputMobile = () => {

	return (
		<Badges action={ ()=> console.log('search') } name='search' />

	)
};

export default SearchInputMobile;

import React, { useState, useEffect } from 'react';
import {
	Container,
	BarContainer,
	BarHeader,
	BarHeading,
	BarTitle,
	NotificationsItem,
	ItemPicWrap,
	ItemPic,
	ItemDescription,
	ItemHeading,
	ItemTitle,
	ItemFollowing,
	ItemReplied,
	UserStatus,
	PostTitle,
	Cart,
	CartHeader,
	Quantity,
	QuantityAdd,
	QuantityRemove,
	QuantityTitle,
	QuantityCounter,
	CartHeading,
	CartCounter,
	CartPromo,
	SubTotal,
	SubtotalCount,
	CartCurrency,
	CartItem,
	CartCheckout,
	CartContent,
	CartItemPreview,
	CartView,
	CloseBtn,
	Actions,
	MessageDate,
	MessageCounter,
} from './styled';
import templateData from './templateData';
import Profile from '../Profile';

function getItem(name){
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	if(name === 'notifications'){

		return (
			<>
				{
					templateData[name].map((item, i) =>
						<NotificationsItem key={item.heading + i}>
							<ItemPic src={item.avatar} />
							<ItemDescription>
								<ItemHeading info={item.info} >{item.heading}</ItemHeading>
								<ItemTitle gray={item.type !== 'replied'}>
									{
										item.post ? <PostTitle>{item.post}</PostTitle> : null
									}
									{item.title}
								</ItemTitle>
							</ItemDescription>
							{
								item.type === 'follow' || item.type === 'following'
									? <ItemFollowing type={item.type}>{item.type}</ItemFollowing>
									: <ItemReplied src={item.postPreview} />
							}
						</NotificationsItem>
					)
				}
			</>
		)
	}
	if(name === 'message'){
		return (
			<>
				{
					templateData[name].map((item, i) =>
						<NotificationsItem key={item.heading + i}>
							<ItemPicWrap>
								<ItemPic message src={item.avatar} />
								{item.status ? <UserStatus /> : null}
							</ItemPicWrap>

							<ItemDescription>
								<ItemHeading info={item.info} >{item.heading}</ItemHeading>
								<ItemTitle message>
									{item.title}
								</ItemTitle>
								{ item.notRead ? <MessageCounter count={item.notRead} /> : null }
							</ItemDescription>
							<MessageDate>{item.date}</MessageDate>
						</NotificationsItem>
					)
				}
			</>
		)
	}
	if(name === 'cart'){
		return (
			<Cart>
				<CartHeader>
					<CartHeading>My cart</CartHeading>
					<CartCounter>2 item</CartCounter>
				</CartHeader>
				<CartContent>
					{
						templateData[name].list.map( item =>
							<CartItem key={item.name}>
								<CartItemPreview src={item.pic} />
								<ItemDescription>
									<ItemHeading >{item.name}</ItemHeading>
									<ItemTitle>
										<CartCurrency>{templateData[name].currency}</CartCurrency>
										{item.price}
									</ItemTitle>
									<Quantity>
										<QuantityTitle>Quantity:</QuantityTitle>
										<QuantityRemove/>
										<QuantityCounter value={1}/>
										<QuantityAdd/>
									</Quantity>
								</ItemDescription>
							</CartItem>
						)
					}
					<CartPromo>Free shipping on orders over $200</CartPromo>
					<SubTotal>
						Subtotal:
						<CartCurrency>{templateData[name].currency}</CartCurrency>
						<SubtotalCount>
							{templateData[name].list.map(item => item.price).reduce(reducer)}
						</SubtotalCount>
					</SubTotal>
					<Actions>
						<CartCheckout>View Cart</CartCheckout>
						<CartView>Checkout</CartView>
					</Actions>
				</CartContent>

			</Cart>
		)
	}
	if(name === 'profile'){
		return (
			<Profile />
		)
	}
}

const NotificationBar = ({contentType, closeHandler})=> {

	useEffect(() => {
		document.addEventListener('click', closeBar);
		return () => {
			document.removeEventListener('click', closeBar);
		};
	});

	const closeBar = ev => {
		if(!ev.target.closest('.barContainer') && !ev.target.closest('.barControls')){
			closeHandler(false);
		}
	};

	return (
		<Container>
			<BarContainer className='barContainer'>
				<CloseBtn onClick={ ()=> closeHandler(false) } >X</CloseBtn>
				{
					contentType !== 'cart' && contentType !== 'profile'
						?
						<BarHeader>
							<BarHeading>Messages</BarHeading>
							<BarTitle>View All</BarTitle>
						</BarHeader>
						: null
				}
				{getItem(contentType)}
			</BarContainer>
		</Container>
	)

};

export default NotificationBar;

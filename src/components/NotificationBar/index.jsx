import React, { useState } from 'react';
import {
	Container,
	BarContainer,
	BarHeader,
	BarHeading,
	BarTitle,
	NotificationsItem,
	ItemPic,
	ItemDescription,
	ItemHeading,
	ItemTitle,
	ItemFollowing,
	ItemReplied,
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
	MessageDate,
} from './styled';
import templateData from './templateData';

function getItem(name){
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
							<ItemPic src={item.avatar} />
							<ItemDescription>
								<ItemHeading info={item.info} >{item.heading}</ItemHeading>
								<ItemTitle>
									{item.title}
								</ItemTitle>
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
				{
					templateData[name].map( item =>
						<NotificationsItem key={item.name}>
							<ItemPic src={item.pic} />
							<ItemDescription>
								<ItemHeading >{item.name}</ItemHeading>
								<ItemTitle>
									{item.price}
								</ItemTitle>
								<Quantity>
									<QuantityTitle>Quantity:</QuantityTitle>
									<QuantityRemove/>
									<QuantityCounter value={1}/>
									<QuantityAdd/>
								</Quantity>
							</ItemDescription>
						</NotificationsItem>
					)
				}
			</Cart>
		)
	}
}

const NotificationBar = ({contentType, closeHandler})=> {

	function getBarContent(type) {
		return getItem(type);
	}

	return (
		<Container onClick={ ()=> closeHandler(false)}>
			<BarContainer className='barContainer'>
				{
					contentType !== 'cart'
						?
						<BarHeader>
							<BarHeading>Notifications</BarHeading>
							<BarTitle>View All</BarTitle>
						</BarHeader>
						: null
				}
				{getBarContent(contentType)}
			</BarContainer>
		</Container>
	)

};

export default NotificationBar;

import React from 'react';
import {
	Bottom,
	Buttons,
	Coins,
	CoinsNumber,
	Color,
	ColorWrap,
	Counter,
	CounterButton,
	Deliver,
	DeliverCity,
	DeliverCost,
	DeliverDate,
	DeliverDescription,
	Description,
	Detailes,
	Feature,
	FeatureName,
	Icon,
	LikesNumber,
	Payment,
	PaymentCash,
	Price,
	PriceDescription,
	Rating,
	Return,
	Size,
	Text,
	Title,
	VerticalDivider,
	HorizontalDivider,
	Count,
} from './styled';

import Button from 'components/Buttons';
import Likes from 'assets/ProductPage/Likes';
import Bookmarks from 'assets/ProductPage/Bookmarks';
import CoinsIcon from 'assets/ProductPage/Coins';
import Comments from 'assets/ProductPage/Comments';
import AmericanExpress from 'assets/ProductPage/AmericanExpress';
import Links from 'assets/ProductPage/Links';
import Mastercard from 'assets/ProductPage/Mastercard';
import Minus from 'assets/ProductPage/Minus';
import Plus from 'assets/ProductPage/Plus';
import Star from 'assets/ProductPage/Star';
import Paypal from 'assets/ProductPage/Paypal';
import Visa from 'assets/ProductPage/Visa';

const colors = ['#F5D823', '#139AD6', '#DB95D1', '#ED494F'];
const sizes = ['XS', 'S', 'M', 'L'];

function setRating(value) {
	let Rating = [];
	for(let i = 0; i < value; i++){
		Rating.push(<Star />)
	}
	if(value < 5){
		for(let i = 0; i < 5 - value; i++){
			Rating.push(<Star color='#efefef' />)
		}
	}
	return Rating;
}

const OrderInfo = ()=> {

	return (
		<Description>
			<Title>
				2018 Floral Dresses Vestido De Festa
			</Title>
			<Rating>
				{setRating(4)}
				<LikesNumber>(602)</LikesNumber>
			</Rating>
			<Deliver>
				<DeliverDescription>
					Deliver to
				</DeliverDescription>
				<DeliverCity>
					Dubai
				</DeliverCity>
				<VerticalDivider />
				<DeliverCost>
					Free
				</DeliverCost>
				<DeliverDescription>
					delivery by
				</DeliverDescription>
				<DeliverDate>
					Sat, Nov 23
				</DeliverDate>
			</Deliver>
			<Price>
				<PriceDescription red>
					$499
				</PriceDescription>
				<PriceDescription>
					$699
				</PriceDescription>
				<Coins>
					Mid Coins:
					<CoinsNumber>
						+19
					</CoinsNumber>
					<CoinsIcon />
				</Coins>
			</Price>
			<HorizontalDivider />
			<Detailes>
				<Feature>
					<FeatureName>
						Brand:
					</FeatureName>
					<Text>
						Zara
					</Text>
				</Feature>
				<Feature>
					<FeatureName>
						Size:
					</FeatureName>
					{
						sizes.map( (size, i) =>
							<Size key={size} active={!i}>{size}</Size>
						)
					}
					<FeatureName red>Size Guide</FeatureName>
				</Feature>
				<Feature>
					<FeatureName>
						Color:
					</FeatureName>
					{
						colors.map( color =>
							<ColorWrap key={color}>
								<Color color={color} />
							</ColorWrap>
						)
					}
				</Feature>
				<Feature>
					<FeatureName>
						Quantity:
					</FeatureName>
					<Counter>
						<CounterButton>
							<Minus/>
						</CounterButton>
						<Count>1</Count>
						<CounterButton>
							<Plus/>
						</CounterButton>
					</Counter>
				</Feature>
				<Buttons>
					<Button type='addToCart' action={()=> null} />
					<Button type='buy' action={()=> null} />
				</Buttons>
				<Feature alignTop>
					<FeatureName dark>
						Returns
					</FeatureName>
					<div>
						<Text>
							Returns and Exchanges accepted
						</Text>
						<Return>See return policy</Return>
					</div>
				</Feature>
				<Feature>
					<FeatureName dark>
						Payments
					</FeatureName>
					<Payment>
						<Mastercard />
						<Visa />
						<Paypal />
						<AmericanExpress />
						<PaymentCash> Cash </PaymentCash>
					</Payment>
				</Feature>
			</Detailes>
			<HorizontalDivider />
			<Bottom>
				<Icon> <Likes />1,232</Icon>
				<Icon><Comments />678</Icon>
				<Icon><Links />675</Icon>
				<Icon><Bookmarks />256</Icon>
			</Bottom>
		</Description>
	)
};

export default OrderInfo;

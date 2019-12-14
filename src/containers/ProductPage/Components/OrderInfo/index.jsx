import React, {useState} from 'react';
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
	SizeGuideLink,
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
import {PageWrap, Recently} from "../../styled";
import AddedPopup from "../AddedPopup";
import SizeGuide from "../SizeGuide";
import {CSSTransition} from 'react-transition-group';

const colors = ['#F5D823', '#139AD6', '#DB95D1', '#ED494F'];
const sizes = ['XS', 'S', 'M', 'L'];

const OrderInfo = ({setRating})=> {

	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const [isOpenGuide, setIsOpenGuide] = useState(false);

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
					<SizeGuideLink onClick={()=>setIsOpenGuide(true)} >Size Guide</SizeGuideLink>
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
					<Button type='addToCart' props={{onClick: ()=> setIsAddedToCart(true)}} />
					<Button type='buy'/>
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
			<CSSTransition
				in={isAddedToCart}
				timeOut={300}
				unmountOnExit
			>
				<AddedPopup close={setIsAddedToCart} />
			</CSSTransition>
			<CSSTransition
				in={isOpenGuide}
				timeOut={300}
				unmountOnExit
			>
				<SizeGuide close={setIsOpenGuide} />
			</CSSTransition>
		</Description>
	)
};

export default OrderInfo;

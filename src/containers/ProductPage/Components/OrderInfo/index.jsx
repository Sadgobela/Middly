import React from 'react';
import {
	CardAddBtn,
	CardBottom,
	CardButtons,
	CardBuyBtn,
	CardCoins,
	CardCoinsNumber,
	CardColor,
	CardColorWrap,
	CardCounter,
	CardCounterButton,
	CardDeliver,
	CardDeliverCity,
	CardDeliverCost,
	CardDeliverDate,
	CardDeliverDescription,
	CardDescription,
	CardDetailes,
	CardFeature,
	CardFeatureName,
	CardIcon,
	CardLikesNumber,
	CardPayment,
	CardPaymentCash,
	CardPaymentImg,
	CardPrice,
	CardPriceDescription,
	CardRating,
	CardReturn,
	CardSize,
	CardStar,
	CardText,
	CardTitle,
	VerticalDivider,
	HorizontalDivider,
	CardCount,
} from './styled';

import Likes from 'assets/ProductPage/Likes';
import Bookmarks from 'assets/ProductPage/Bookmarks';
import Coins from 'assets/ProductPage/Coins';
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

const OrderInfo = ()=> {

	return (
		<CardDescription>
			<CardTitle>
				2018 Floral Dresses Vestido De Festa
			</CardTitle>
			<CardRating>
				<Star />
				<Star />
				<Star />
				<Star />
				<Star />
				<CardLikesNumber>(602)</CardLikesNumber>
			</CardRating>
			<CardDeliver>
				<CardDeliverDescription>
					Deliver to
				</CardDeliverDescription>
				<CardDeliverCity>
					Dubai
				</CardDeliverCity>
				<VerticalDivider />
				<CardDeliverCost>
					Free
				</CardDeliverCost>
				<CardDeliverDescription>
					delivery by
				</CardDeliverDescription>
				<CardDeliverDate>
					Sat, Nov 23
				</CardDeliverDate>
			</CardDeliver>
			<CardPrice>
				<CardPriceDescription red>
					$499
				</CardPriceDescription>
				<CardPriceDescription>
					$699
				</CardPriceDescription>
				<CardCoins>
					Mid Coins:
					<CardCoinsNumber>
						+19
					</CardCoinsNumber>
				</CardCoins>
			</CardPrice>
			<HorizontalDivider />
			<CardDetailes>
				<CardFeature>
					<CardFeatureName>
						Brand:
					</CardFeatureName>
					<CardText>
						Zara
					</CardText>
				</CardFeature>
				<CardFeature>
					<CardFeatureName>
						Size:
					</CardFeatureName>
					{
						sizes.map( (size, i) =>
							<CardSize key={size} active={!i}>{size}</CardSize>
						)
					}
					<CardFeatureName red>Size Guide</CardFeatureName>
				</CardFeature>
				<CardFeature>
					<CardFeatureName>
						Color:
					</CardFeatureName>
					{
						colors.map( color =>
							<CardColorWrap key={color}>
								<CardColor color={color} />
							</CardColorWrap>
						)
					}
				</CardFeature>
				<CardFeature>
					<CardFeatureName>
						Quantity:
					</CardFeatureName>
					<CardCounter>
						<CardCounterButton>
							<Minus/>
						</CardCounterButton>
						<CardCount>1</CardCount>
						<CardCounterButton>
							<Plus/>
						</CardCounterButton>
					</CardCounter>
				</CardFeature>
				<CardButtons>
					<CardAddBtn>Add to Cart</CardAddBtn>
					<CardBuyBtn>Buy Now</CardBuyBtn>
				</CardButtons>
				<CardFeature alignTop>
					<CardFeatureName dark>
						Returns
					</CardFeatureName>
					<div>
						<CardText>
							Returns and Exchanges accepted
						</CardText>
						<CardReturn>See return policy</CardReturn>
					</div>
				</CardFeature>
				<CardFeature>
					<CardFeatureName dark>
						Payments
					</CardFeatureName>
					<CardPayment>
						<Mastercard />
						<Visa />
						<Paypal />
						<AmericanExpress />
						<CardPaymentCash> Cash </CardPaymentCash>
					</CardPayment>
				</CardFeature>
			</CardDetailes>
			<HorizontalDivider />
			<CardBottom>
				<CardIcon> <Likes />1,232</CardIcon>
				<CardIcon><Comments />678</CardIcon>
				<CardIcon><Links />675</CardIcon>
				<CardIcon><Bookmarks />256</CardIcon>
			</CardBottom>
		</CardDescription>
	)
};

export default OrderInfo;

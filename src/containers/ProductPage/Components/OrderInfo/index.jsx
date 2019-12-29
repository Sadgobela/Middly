import React, {useState} from 'react';
import {
	Bottom,
	Buttons,
	BuyButton,
	Coins,
	CoinsNumber,
	Color,
	Size,
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
	Option,
	Payment,
	Price,
	PriceDescription,
	Rating,
	Return,
	Text,
	ReturnTitle,
	Title,
	SizeGuideLink,
	VerticalDivider,
	HorizontalDivider,
	Wrap,
} from './styled';

import Likes from 'assets/ProductPage/Likes';
import Bookmarks from 'assets/ProductPage/Bookmarks';
import CoinsIcon from 'assets/ProductPage/Coins';
import Comments from 'assets/ProductPage/Comments';
import AmericanExpress from 'assets/ProductPage/AmericanExpress';
import Links from 'assets/ProductPage/Links';
import Mastercard from 'assets/ProductPage/Mastercard';
import Paypal from 'assets/ProductPage/Paypal';
import Visa from 'assets/ProductPage/Visa';
import AddedPopup from "../AddedPopup";
import SizeGuide from "../SizeGuide";
import {CSSTransition} from 'react-transition-group';
import Grid from "components/Grid";


const colors = ['#F5D823', '#139AD6', '#DB95D1', '#ED494F'];
const sizes = ['XS', 'S', 'M', 'L'];

const OrderInfo = ({setRating})=> {

	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const [isOpenGuide, setIsOpenGuide] = useState(false);

	return (
		<Description>
			<Wrap>
			<Title>
				2018 Floral Dresses Vestido De Festa Vestido De Festa
			</Title>
			<Rating>
				{setRating(4)}
				<LikesNumber>(602)</LikesNumber>
			</Rating>
			<Price>
				<PriceDescription red>
					$499
				</PriceDescription>
				<PriceDescription>
					$699
				</PriceDescription>
				<PriceDescription discount>
					- 40%
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
					<Grid aic margin='0 0 20px 0'>
						<FeatureName brand >
							Brand:
						</FeatureName>
						<Text>
							Zara
						</Text>
					</Grid>
					<Feature>
						<FeatureName>
							Color:
						</FeatureName>
						<Color defaultValue='Pink'>
							<Option className="pink" value="Pink">Pink</Option>
							<Option yellow value="Yellow">Yellow</Option>
							<Option red value="Red">Red</Option>
							<Option grey value="Grey">Grey</Option>
							<Option black value="Black">Black</Option>
							<Option orange value="Orange">Orange</Option>
							<Option green value="Green">Green</Option>
						</Color>
					</Feature>
					<Feature column>
						<Grid aic sb>
							<FeatureName>
								Size:
							</FeatureName>
							<SizeGuideLink onClick={()=>setIsOpenGuide(true)} >Size Guide</SizeGuideLink>
						</Grid>
						<Size defaultValue='UK XL, 48'>
							<Option value="UK XS, 42">UK XS, 42</Option>
							<Option value="UK S, 36">UK S, 36</Option>
							<Option value="UK M, 40">UK M, 40</Option>
							<Option value="UK L, 44">UK L, 44</Option>
							<Option value="UK XL, 48">UK XL, 48</Option>
							<Option value="UK XXL, 52">UK XXL, 52</Option>
							<Option value="UK XXXL, 58">UK XXXL, 58</Option>
						</Size>
					</Feature>
					<Buttons>
						<BuyButton>Add to cart</BuyButton>
						<BuyButton>Buy now</BuyButton>
					</Buttons>
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
					<Grid margin='0 0 32px 0'>
						<FeatureName dark>
							Returns
						</FeatureName>
						<div>
							<ReturnTitle>
								Returns and Exchanges accepted
							</ReturnTitle>
							<Return>See return policy</Return>
						</div>
					</Grid>
					<Grid>
						<FeatureName dark>
							Payments
						</FeatureName>
						<Payment>
							<Mastercard />
							<Visa />
							<Paypal />
							<AmericanExpress />
						</Payment>
					</Grid>
				</Detailes>
			</Wrap>
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

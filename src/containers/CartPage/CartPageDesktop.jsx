import React from 'react';
import {
	Continue,
	CartWrapper,
} from './styled';
import Grid from 'components/Grid';
import Breadcrumbs from 'components/Breadcrumbs';
import ListHeading from 'components/ListHeading';
import Icon from 'components/Icon';
import Seller from "./Components/Seller";
import Summary from "./Components/Summary";
import exampleData from './exampleData';
import { newArrivals} from "../../constants/staticData";
import CardNewArrival from "../../components/CardNewArrival";
import Slider from 'react-slick';

const locations = ['Home', 'Shopping', 'My Cart'];

function CartPageDesktop() {
	return (
		<Grid pageContainer>
			<Breadcrumbs locations={locations} />
			<ListHeading heading='My Cart' customStyles='padding-bottom:12px;'/>
			<Continue>
				<Icon type='arrow' color='#000' />
				Continue Shopping
			</Continue>
			<Grid jcc margin='24px 0 0 0'>
				<Grid column>
					{
						exampleData.map( item => <Seller data={item} />
						)
					}
				</Grid>

				<Summary />
			</Grid>


				<ListHeading  heading='Recommended for you' customStyles='padding-bottom:12px;'/>
				<CartWrapper>
					<Slider dots={true} slidesToShow={4} slidesToScroll={4}>
						{newArrivals.map((arrival, index) => (
							<CardNewArrival key={index} {...arrival} />
						))}
					</Slider>
				</CartWrapper>
		</Grid>
	);
}

export default CartPageDesktop;
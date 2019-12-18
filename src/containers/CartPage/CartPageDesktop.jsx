import React from 'react';
import {
	Continue,
} from './styled';
import Grid from 'components/Grid';
import Breadcrumbs from 'components/Breadcrumbs';
import ListHeading from 'components/ListHeading';
import Icon from 'components/Icon';
import Seller from "./Components/Seller";
import Summary from "./Components/Summary";
import exampleData from './exampleData';
import WithSlider from "../../components/WithSlider";
import {featuredProducts, newArrivals} from "../../constants/staticData";
import CardNewArrival from "../../components/CardNewArrival";

const locations = ['Home', 'Shopping', 'My Cart'];

function CartPageDesktop() {
	return (
		<Grid pageContainer>
			<Breadcrumbs locations={locations} />
			<ListHeading heading='My Cart' />
			<Continue>
				<Icon type='arrow' color='#000' />
				Continue Shopping
			</Continue>
			<Grid margin='24px 0 0 0'>
				<Grid column>
					{
						exampleData.map( item => <Seller data={item} />
						)
					}
				</Grid>

				<Summary />
			</Grid>

			<WithSlider title="Recommended for you" slidesToScroll={4} infinite={false} slidesToShow={4} marginTop={88} dots={true}>
				{newArrivals.map((arrival, index) => (
					<CardNewArrival key={index} {...arrival} />
				))}
			</WithSlider>
		</Grid>
	);
}

export default CartPageDesktop;
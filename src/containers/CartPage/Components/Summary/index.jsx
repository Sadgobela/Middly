import React from 'react';
import {
	Container,
	Title,
	Count,
	Heading,
	CoinsCounter,
	Total,
	Confirm,
	Notice,
	Accept,
} from './styled';
import Grid from 'components/Grid';
import Icon from 'components/Icon';
import {PaymentCash} from "../../../ProductPage/Components/OrderInfo/styled";
import Mastercard from "../../../../assets/ProductPage/Mastercard";
import Visa from "../../../../assets/ProductPage/Visa";
import Paypal from "../../../../assets/ProductPage/Paypal";

function Summary() {
	return (
		<Container>
			<Heading>Cart Summary</Heading>
			<Grid sb aic margin='0 0 24px 0'>
				<Title>Items Total (4)</Title>
				<Count small>
					BD
					<Count>678.00</Count>
				</Count>
			</Grid>
			<Grid sb aic margin='0 0 24px 0'>
				<Title>Estimated Shipping </Title>
				<Count small>
					BD
					<Count>68.00</Count>
				</Count>
			</Grid>
			<Title>Redemptions:</Title>
			<Grid sb aic margin='19px 0 0 0'>
				<CoinsCounter >
					Shop*Coins: -11
					<Icon type='coinsProfile' />
				</CoinsCounter>
				<Count red small>
					BD
					<Count red>68.00</Count>
				</Count>
			</Grid>
			<Total>
				<Grid sb aic>
					<Title>Total To Pay</Title>
					<Count total small>
						BD
						<Count>948.00</Count>
					</Count>
				</Grid>
				<Grid sb aic margin='12px 0 0 0'>
					<CoinsCounter>
						Shop*Coins: -11
						<Icon type='coinsProfile' />
					</CoinsCounter>
					<Count small>
						BD
						<Count>68.00</Count>
					</Count>
				</Grid>
				<Confirm>Confirm & Pay</Confirm>
				<Notice>You <Notice green bold> SAVE </Notice> <Notice bold>40% </Notice>&#160;on this order</Notice>
			</Total>
			<Accept>We Accept</Accept>
			<Grid aic sb>
				<Mastercard />
				<Visa />
				<Paypal />
				<PaymentCash> Cash </PaymentCash>
			</Grid>
		</Container>
	);
}

export default Summary;
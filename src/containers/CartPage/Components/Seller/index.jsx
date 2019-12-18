import React from 'react';
import {
	Container,
	Header,
	Logo,
	Name,
	Rating,
	Status,
	Counter,
	Buy,
	Footer,
	Total,
	TotalItem,
	Coins,
	AvailableCount,
	AvailableDate,
} from './styled';
import Grid from 'components/Grid';
import {setRating} from 'components/helpers'
import CartProduct from '../CartProduct';

function Seller({data}) {
	return (
		<Container>
			<Header>
				<Grid sb aic padding='24px 24px 16px 24px'>
					<Grid aic>
						<Logo src={data.logo} />
						<Grid column>
							<Name>{data.name}</Name>
							<Rating>
								<Status>4,9</Status>
								{setRating(5)}
								<Counter>(6.2k)</Counter>
							</Rating>
						</Grid>
					</Grid>
					<Buy>Buy from this Seller</Buy>
				</Grid>
			</Header>
			{
				data.list.map( (item, i) => <CartProduct isLast={i === data.list.length - 1} data={item} />)
			}
			<Footer>
				<Grid sb>
					<Coins>
						<AvailableCount>100 Shop*Coins</AvailableCount>
						<AvailableDate>Available (now-Nov. 20)</AvailableDate>
					</Coins>
					<Total>
						<TotalItem>Estimated Shipping: $55</TotalItem>
						<TotalItem>Items Total : $55</TotalItem>
						<TotalItem green>Shop*Coins: -$100</TotalItem>
						<TotalItem bold>Zara Total: $367</TotalItem>
					</Total>
				</Grid>
			</Footer>


		</Container>
	);
}

export default Seller;
import React from 'react';
import {
	Card,
	Preview,
	Price,
	OldPrice,
	Sale,
	Name,
	Size,
	Color,
	Count,
	MidCoins,
	ShopCoins,
	Actions,
} from './styled';
import Grid from 'components/Grid';
import Icon from 'components/Icon';

function CartProduct({data, isLast}) {
	return (
		<Card sb last={isLast}>
			<Grid>
				<Preview src={data.preview} />
				<Grid column>
					<Grid aife>
						<Price>{data.price}</Price>
						{
							data.oldPrice ?
								<>
									<OldPrice>{data.oldPrice}</OldPrice>
									<Sale>{data.sale}</Sale>
								</>
								: null
						}
					</Grid>
					<Name>{data.name}</Name>
					<Grid aic margin='0 0 16px 0'>
						<Size>{data.size}</Size>
						<Color defaultValue={data.color} />
						<Count defaultValue={data.count} />
					</Grid>
					<Grid aic>
						<MidCoins>
							Mid Coins:
							+{data.midCoins}
							<Icon type='coins' />
						</MidCoins>
						<ShopCoins>
							Shop* Coins:
							+{data.shopCoins}
							<Icon type='coins' />
						</ShopCoins>
					</Grid>
				</Grid>
			</Grid>
			<Actions>
				<Icon type='bookmark' />
				<Icon type='close' color='#545454' />
			</Actions>

		</Card>
	);
}

export default CartProduct;
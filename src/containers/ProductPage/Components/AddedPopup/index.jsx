import React from 'react';
import {
	Overlay,
	Header,
	Added,
	Item,
	Product,
	ProductItem,
	Wrap,
	Title,
	Price,
	TocartBtn,
	ContinueBtn,
	Grey,
	Heading,
	Card,
	ProductName,
	Likes,
} from './styled';

import pic from './img/item.png';

const AddedPopup = () => (
	<Overlay>
		<Added>
			<Header>1 item added to cart</Header>
			<Product>
				<Item>
					<ProductItem right/>
					<Wrap>
						<Title>Black suit for men</Title>
						<Price>$124,99</Price>
					</Wrap>
				</Item>
				<Item>
					<TocartBtn>Go to Cart</TocartBtn>
					<ContinueBtn>Continue Shopping</ContinueBtn>
				</Item>
			</Product>
			<Grey/>
			<Product>
				<Heading>People who bought this item also bought</Heading>
				<Item space>
					<Card>
						<ProductItem/>
						<ProductName>Black suit for men</ProductName>
						<Wrap flex>
							<Price small>$124,99</Price>
							<Likes>25</Likes>
						</Wrap>
					</Card>
					<Card>
						<ProductItem/>
						<ProductName>Black suit for men</ProductName>
						<Wrap flex>
							<Price small>$124,99</Price>
							<Likes>25</Likes>
						</Wrap>
					</Card>
					<Card>
						<ProductItem/>
						<ProductName>Black suit for men</ProductName>
						<Wrap flex>
							<Price small>$124,99</Price>
							<Likes>25</Likes>
						</Wrap>
					</Card>
				</Item>
			</Product>
		</Added>

	</Overlay>
);

export default AddedPopup;

import React from 'react';
import {
	Wrap,
	BackLink,
	Title,
	Heading,
	Text,
	Avatar,
	Pic,
	Follow,
	Number,
	Views,
	Product,
	Information,
	Price,
	Sale,
	Name,
	Line,
	OldPrice,
	EditList,
	Shopping,
	FollowBtn,
	MoveList,
	MoveFunction,
	MoveBtn,
	MoveLine,

} from './styled';
import {Dot, Function, Icon, Settings, Create, Table} from "../Lists/styled";
import settings from "../Lists/img/settings.svg";
import share from './img/share.svg';
import product from './img/product.png';


function ListsOwner() {
	return (
		<Wrap>
			<BackLink>-- Back to Lists</BackLink>
			<Line short>
				<Title>Ideas for New Year 2020</Title>
				<Settings>
					<Dot/>
				</Settings>
				<EditList owner>
					<Function><Icon settings src={settings}/>Edit List</Function>
					<Function><Icon settings src={settings}/>Reorder Product Sequence</Function>
					<Function><Icon settings src={settings}/>Share/Invite</Function>
					<Function><Icon settings src={settings}/>Delete List</Function>
				</EditList>
			</Line>
			<Heading>Description</Heading>
			<Text>Last month I bought these Makeup Pallette into my new collections and everybody is asking me where I get it, so here you go! </Text>
			<Line flexStart>
				<Avatar/>
				<Avatar last/>
				<Follow>Ariana Grande</Follow>
				<Follow thin>and</Follow>
				<Number>7 more</Number>
				<Follow>follow this list</Follow>
				<Views>
					<Number>472</Number>
					Views
				</Views>
				<Views shortPadding>
					<Number>472</Number>
					Orders
				</Views>
				<FollowBtn>+ Follow</FollowBtn>
				<Icon share src={share}/>
			</Line>
			<Table>
				<Product empty>
					<Create>Add Product</Create>
				</Product>
				<Product>
					<Pic src={product}/>
					<Sale>
						-40%
					</Sale>
					<Information>
						<Line marginBottom>
							<Price red>
								<OldPrice red>BD</OldPrice>134
								<OldPrice>BD212</OldPrice>
							</Price>
							<Shopping>
								1
							</Shopping>
						</Line>
						<Line>
							<Name>
								Makeup Pallette
							</Name>
							<Settings>
								<Dot/>
							</Settings>
						</Line>
					</Information>
				</Product>
				<Product>
					<Pic src={product}/>
					<Information>
						<Line marginBottom>
							<Price>
								$756
							</Price>
							<Shopping>
								2
							</Shopping>
						</Line>
						<Line>
							<Name>
								Makeup Pallette
							</Name>
							<Settings>
								<Dot/>
							</Settings>
						</Line>
					</Information>
					<EditList>
						<Function><Icon settings src={settings}/>Reorder Product Sequence</Function>
						<Function><Icon settings src={settings}/>Move to a New/Existing List</Function>
						<Function><Icon settings src={settings}/>Share/Invite</Function>
						<Function><Icon settings src={settings}/>Delete Product</Function>
					</EditList>
				</Product>
				<Product>
					<Pic src={product}/>
					<Information>
						<Line marginBottom>
							<Price>
								$756
							</Price>
							<Shopping>
								2
							</Shopping>
						</Line>
						<Line>
							<Name>
								Makeup Pallette
							</Name>
							<Settings>
								<Dot/>
							</Settings>
						</Line>
					</Information>
					<MoveList>
						<MoveFunction>My Lists</MoveFunction>
						<MoveFunction>Fashion</MoveFunction>
						<MoveFunction checked>Models</MoveFunction>
						<MoveFunction>Outfits For Me</MoveFunction>
						<MoveFunction boldBorder>Beauty & Care</MoveFunction>
						<MoveLine>
							<MoveFunction>Create New List</MoveFunction>
							<MoveBtn>Move</MoveBtn>
						</MoveLine>
					</MoveList>
				</Product>
			</Table>
		</Wrap>

	)
}

export default ListsOwner;
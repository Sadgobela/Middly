import React from 'react';
import {
	Overlay,
	Wrap,
	Header,
	CrossBtn,
	List,
	Title,
	Description,
	Item,
	CheckBox,
	Input,
	Details,
	Bottom,
	DeleteBtn,
	CancelBtn,
	SaveBtn,
	Group,
} from './styled';



function EditPopup() {
	return (
		<Overlay>
			<Wrap>
				<Header>
					Edit List
					<CrossBtn>x</CrossBtn>
				</Header>
				<List>
					<Item>
						<Title>Name *</Title>
						<Description>Fancy Trends 2020</Description>
					</Item>
					<Item>
						<Title>Description</Title>
						<Description textarea>Last month I bought these Makeup Pallette into my new collections and everybody is asking me where I get it, so here you go!</Description>
					</Item>
					<Item>
						<Title>Hashtags</Title>
						<Description>#creativity</Description>
					</Item>
					<Item>
						<Title last>Status</Title>
						<CheckBox>
							<Input checked>Public</Input>
							<Input>Private<Details> (Only owner can see)</Details></Input>
							<Input>Close Circle<Details> (Anyone you allow can see)</Details></Input>
							<Input>Block<Details> (The person you block can’t see)</Details></Input>
						</CheckBox>
					</Item>
				</List>
				<Bottom>
					<Group>
						<DeleteBtn>Delete</DeleteBtn>
					</Group>
					<Group>
						<CancelBtn>Cancel</CancelBtn>
						<SaveBtn>Save</SaveBtn>
					</Group>
				</Bottom>
			</Wrap>
		</Overlay>

	)
}

export default EditPopup;
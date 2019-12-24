import React from 'react';
import {
	Search,
	SearchInput,
	User,
	Avatar,
	UserWrap,
	Name,
	Information,
	AllowBtn,
} from './styled';
import {Overlay, Wrap, Header, List, Item, Title, Description, CheckBox, CrossBtn, Details, Input, Bottom, Group, DeleteBtn, CancelBtn, SaveBtn} from "../EditPopup/styled";
import avatar from "./img/avatar.png";


function EditOwnerPopup() {
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
							<Input>Public</Input>
							<Input>Private<Details> (Only owner can see)</Details></Input>
							<Input checked>Close Circle<Details checked> (Anyone you allow can see)</Details></Input>
							<Input>Block<Details> (The person you block can’t see)</Details></Input>
						</CheckBox>
					</Item>
				</List>
				<Search>
					<SearchInput>Search for User Name or ID</SearchInput>
					<User>
						<Group flex>
							<Avatar src={avatar}/>
							<UserWrap>
								<Name>Lara Flynn</Name>
								<Information>larafl928 | Following</Information>
							</UserWrap>
						</Group>
						<AllowBtn allowed>Allowed</AllowBtn>
					</User>
					<User>
						<Group flex>
							<Avatar src={avatar}/>
							<UserWrap>
								<Name>Lara Flynn</Name>
								<Information>larafl928 | Following</Information>
							</UserWrap>
						</Group>
						<AllowBtn>Allow</AllowBtn>
					</User>
					<User>
					<Group flex>
						<Avatar src={avatar}/>
						<UserWrap>
							<Name>Lara Flynn</Name>
							<Information>larafl928 | Following</Information>
						</UserWrap>
					</Group>
					<AllowBtn>Allow</AllowBtn>
				</User>
				</Search>
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

export default EditOwnerPopup;
import React from 'react';
import {
	Container,
	List,
	AddComment,
	UserPic,
	InputMessage,
	Send,
	Item,
	Name,
	Message,
	Date,
	Activity,
	Likes,
	Shares,
	ShowAll,
} from './styled';
import send from './img/send.svg';
import myAvatar from './img/avatar1.png';
import avatar from './img/avatar.png';
import LikeIcon from 'assets/ProductPage/Likes';

const Comments = ()=> {

	return(
		<Container>
			<List>
				<Item>
					<UserPic comment src={avatar} />
					<div>
						<Name>James Charles</Name>
						<Message>Colors will depend heavily on the
							setting the character who wears.</Message>
						<Activity>
							<Likes><LikeIcon /> 3k</Likes>
							<Shares>2 Replies</Shares>
						</Activity>
					</div>
						<Date>3 months ago</Date>
				</Item>
				<ShowAll>View all 5 comments</ShowAll>
			</List>
			<AddComment>
				<UserPic src={myAvatar} />
				<InputMessage placeholder='Add a comment' />
				<Send>
					<img src={send} />
				</Send>
			</AddComment>
		</Container>
	)
};

export default Comments;

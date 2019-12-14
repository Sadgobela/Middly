import React from 'react';
import {
	Container,
	UserAvatar,
	Wrap,
	WrapSecond,
	Header,
	Item,
	UserName,
	FollowBtn,
	InfluenceBtn,
	Text,
	Date,
	Settings,
	Dot,
	Example,
	HelpBtn,
	Heart,
	Reply,
} from './styled';

import pic from './img/feedback-avatar.png';
import pic2 from './img/example.png';
import {AddComment, InputMessage, Send, UserPic} from "../../../../components/Comments/styled";
import myAvatar from "../../../../components/Comments/img/avatar1.png";
import send from "../../../../components/Comments/img/send.svg";

const Feedback = ({setRating}) => {
	return(
		<Container>
			<Header>
				<Item flex>
					<Wrap>
						<UserAvatar src={pic} />
					</Wrap>
					<WrapSecond>
						<Wrap>
							<UserName>Raily Sempled</UserName>
							<FollowBtn>Follow</FollowBtn>
						</Wrap>
						<InfluenceBtn>Influencer</InfluenceBtn>
					</WrapSecond>
				</Item>
				<Item flex>
					<Date>a month ago</Date>
					<Settings>
						<Dot/>
					</Settings>
				</Item>
			</Header>
			<Wrap bottom>
				{setRating(5)}
				<Text left>Loved it!</Text>
			</Wrap>
			<Text block>
				This product is amazing! I have finally found a moisturizer that actually works. I have very dry 	skin year round and nothing until this product has given me enough hydration. I was having trouble with my skin being so dry, any product I put on my face would burn so I went and got a sample of this and within a few days my skin felt so much better, I went and purchased the full size. It doesn't feel heavy at all and a little goes a long way. This will be a staple in my skincare routine from now on.
			</Text>
			<Item flex>
				<Example src={pic2} />
				<Example src={pic2} />
				<Example src={pic2} />
			</Item>
			<Item flex>
				<Heart>
					<Text>2</Text>
				</Heart>
				<HelpBtn>
					Helpful (23)
				</HelpBtn>
				<HelpBtn>
					Not helpful (4)
				</HelpBtn>
			</Item>
			<Reply>
				Reply to
				<Text left>Raily Sempled</Text>
			</Reply>
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

export default Feedback;

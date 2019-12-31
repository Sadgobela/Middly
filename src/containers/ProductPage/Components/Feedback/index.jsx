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
	FeedbackItem,
	Plus,
	Send,
	AddComment,
} from './styled';

import pic from './img/feedback-avatar.png';
import pic2 from './img/example.png';
import heart from './img/heart.svg';
import heart2 from './img/heart2.svg';
import plus from './img/plus.svg';
import {InputMessage, UserPic} from "../../../../components/Comments/styled";
import myAvatar from "../../../../components/Comments/img/avatar1.png";
import send from "../../../../components/Comments/img/send.svg";

const Feedback = ({setRating}) => {
	return(
		<Container>
			<FeedbackItem>
				<Header>
					<Item flex>
						<Wrap>
							<UserAvatar src={pic} />
						</Wrap>
						<WrapSecond>
							<UserName>raily_sempled</UserName>
							<InfluenceBtn>Influencer</InfluenceBtn>
							<FollowBtn><Plus src={plus} />Follow</FollowBtn>
						</WrapSecond>
					</Item>
					<Item>
						<Wrap>
							<div>{setRating(5)}</div>
							<Date>Mar 2019</Date>
						</Wrap>
						<Text block>
							This product is amazing! I have finally found a moisturizer that actually works. I have very dry 	skin year round and nothing until this product has given me enough hydration. I was having trouble with my skin being so...
							<Text link> More</Text>
						</Text>
					</Item>
					<Item flex>
						<Settings>
							<Dot/>
						</Settings>
					</Item>
				</Header>
				<Item flex center spaceBetween>
					<div>
						<HelpBtn>
							Helpful (23)
						</HelpBtn>
						<HelpBtn>
							Not helpful (4)
						</HelpBtn>
					</div>
					<div>
						<Heart src={heart} />
						<Text>2</Text>
					</div>
				</Item>
			</FeedbackItem>
			<FeedbackItem>
				<Header>
					<Item flex>
						<Wrap>
							<UserAvatar src={pic} />
						</Wrap>
						<WrapSecond>
							<UserName>anna_smith</UserName>
							<InfluenceBtn>Influencer</InfluenceBtn>
							<FollowBtn><Plus src={plus} />Follow</FollowBtn>
						</WrapSecond>
					</Item>
					<Item>
						<Wrap>
							<div>{setRating(5)}</div>
							<Date>Mar 2019</Date>
						</Wrap>
						<Text block>
						This product is amazing! I have finally found a moisturizer that actually works. I have very dry 	skin year round and nothing until this product has given me enough hydration. I was having trouble with my skin being so...
							<Text link> More</Text>
						</Text>
					</Item>
					<Item flex>
						<Settings>
							<Dot/>
						</Settings>
					</Item>
				</Header>
				<Item flex center>
					<Example src={pic2} />
					<Example src={pic2} />
					<Example src={pic2} />
				</Item>
				<Item flex center spaceBetween>
					<div>
						<HelpBtn>
							Helpful (23)
						</HelpBtn>
						<HelpBtn>
							Not helpful (4)
						</HelpBtn>
					</div>
					<div>
						<Heart src={heart2} />
						<Text>2</Text>
					</div>
				</Item>
			</FeedbackItem>
			<Reply>
				Reply to
				<Text left>@anna_smith</Text>
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

import React from 'react';
import PropTypes from "prop-types";
import Slider from 'react-slick';
import {
	Container,
	SellerCity,
	SellerAbout,
	SellerInfoItem,
	SellerName,
	SellerPic,
	SellerProfile,
	SellerProfileItem,
	SellerProfileWrap,
	UserType,
	SellerButtons,
	SellerChatBtn,
	SellerFollowers,
	SellerFollowersImg,
	HorizontalDivider,
	SellerFollowersLink,
	SellerFollowersName,
	SellerRating,
	SellerLogo,
	SellerFollowBtn,
	MoreSameSeller,
	MoreSameSellerTitle,
	CustomerFeedbacks,
	CustomerFeedbacksHeading,
	ProductInfo,
	ProductInfoItem,
	ProductInfoBtn,
	ProductInfoHeading,
	ProductInfoText,
	FeedbackList,
	FeedbackAvatar,
	FeedbackCard,
	FeedbackCity,
	FeedbackDate,
	FeedbackInfo,
	Row,
	SliderWrapper,
	Img,
} from './styled';
import logo from './img/seller-logo.png';
import followers1 from './img/followers1.png';
import followers2 from './img/followers2.png';
import feedbackAvatar from './img/feedbackAvatar.png';
import feedbackPic from './img/feedbackPic.png';
import products from './exampleData';
import CardNewArrival from "../../../../components/CardNewArrival";
import Button from "../../../../components/Buttons";
import Statistics from "../Statisctics";
import Feedback from '../Feedback';

const feedbacks = ['', '', '', '', '', ''];

const SellerInfo = ({ setRating }) => {
	return (
		<Container>
			<SellerProfile>
				<Row>
					<SellerProfileItem>
						<SellerProfileWrap>
							<SellerAbout>
								<SellerPic>
									<SellerLogo src={logo} />
								</SellerPic>
								<SellerCity>Bahrain</SellerCity>
							</SellerAbout>
							<SellerAbout>
								<UserType>
									Seller
								</UserType>
								<SellerInfoItem>
									<SellerName>
										Margot Robbie
									</SellerName>

								</SellerInfoItem>
								<SellerInfoItem>
									<SellerRating>
										{setRating(5)}
										(602)
									</SellerRating>
									<SellerFollowers>
										8k followers
									</SellerFollowers>
									<SellerInfoItem marginTop>
										<SellerFollowersImg src={followers1} alt="" />
										<SellerFollowersImg src={followers2} alt="" />
										<SellerFollowersName>
											Sherylin Fenn and 2 others
										</SellerFollowersName>
										<SellerFollowersLink>follow that seller</SellerFollowersLink>
									</SellerInfoItem>
								</SellerInfoItem>
							</SellerAbout>
						</SellerProfileWrap>
						<SellerButtons>
							<SellerFollowBtn>Follow</SellerFollowBtn>
							<SellerChatBtn>Chat with Seller</SellerChatBtn>
						</SellerButtons>
					</SellerProfileItem>
				</Row>
				<MoreSameSeller>
					<MoreSameSellerTitle>More from this Seller </MoreSameSellerTitle>
					<SliderWrapper>
						<Slider slidesToShow={4} arrows slidesToScroll={4}>
							{
								products.map((arrival, index) => (
									index < 4 ? <CardNewArrival key={index} {...arrival} /> : null
								))
							}
							<Button margin='0 0 0 -55px' type='seeMore' props={{ withText: true }} />
						</Slider>
					</SliderWrapper>
				</MoreSameSeller>
			</SellerProfile>


			<ProductInfo>
				<ProductInfoItem>
					<ProductInfoHeading>Item description</ProductInfoHeading>
					<ProductInfoText>
						Women&apos;s Casual knitted sweater with twist effect. Back length on size S is 64cm and sleeve length is 70cm. This model features a balloon effect waist. Collar Type: Round
					</ProductInfoText>
					<ProductInfoBtn more>Show more</ProductInfoBtn>
				</ProductInfoItem>
				<HorizontalDivider middle />
				<ProductInfoItem>
					<ProductInfoHeading>Returns & Exchanges </ProductInfoHeading>
					<ProductInfoText>
						I gladly accept returns, exchanges, and cancellations
						Contact me within: 14 days of delivery
						Ship items back within: 21 days of delivery
						This pattern creates an oversized knitted cardigan, it is made to be loose fitting. It is also long, the model in photos is 5 foot 4 inches tall and it falls below the knees. You can make it shorter if you want by doing less rows than the pattern calls for, there is a brief note in the pattern on how to do this. If you are looking for a fitted cardigan this is NOT the pattern for you, but if you are looking for an oversized, comfy, blanket like cardigan then this IS for you.
					</ProductInfoText>
					<ProductInfoBtn less>Less</ProductInfoBtn>
				</ProductInfoItem>
			</ProductInfo>

			<CustomerFeedbacks>
				<CustomerFeedbacksHeading>Customer feedbacks
					<CustomerFeedbacksHeading number>(55)</CustomerFeedbacksHeading>
				</CustomerFeedbacksHeading>
				<Statistics setRating={setRating} />

				<CustomerFeedbacksHeading photos>Photos from feedback</CustomerFeedbacksHeading>
				<FeedbackList>
					<Slider slidesToShow={4} arrows slidesToScroll={4}>
						{
							feedbacks.map(() =>
								<FeedbackCard>
									<FeedbackInfo>
										<FeedbackAvatar>
											<Img src={feedbackAvatar} />
										</FeedbackAvatar>
										<div>
											<FeedbackCity>Gordon Rivera</FeedbackCity>
											<FeedbackDate>July 28</FeedbackDate>
										</div>
									</FeedbackInfo>
									<div>
										<Img src={feedbackPic} />
									</div>
								</FeedbackCard>
							)
						}
					</Slider>

				</FeedbackList>
				<Feedback setRating={setRating} />
			</CustomerFeedbacks>
		</Container>
	)
};

SellerInfo.propTypes = {
	setRating: PropTypes.func.isRequired
}

export default SellerInfo;

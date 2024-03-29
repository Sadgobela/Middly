/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs';
import SlickSlider from 'react-slick';
import {
	PageWrap,
	Container,
	Row,
	Slider,
	SliderTab,
	SliderSlide,
	SliderPic,
	SliderPreview,
	SliderTabList,
	SliderContainer,
	Column,
	Hashtags,
	Tag,
	Similar,
	SimilarHeading,
	Recently,
} from './styled';
import OrderInfo from './Components/OrderInfo';
import SellerInfo from './Components/SellerInfo';
import slidePic from './img/full-slide.png';
import preview from './img/preview.jpg';
import preview1 from './img/preview1.jpg';
import preview2 from './img/preview2.jpg';
import preview3 from './img/preview3.jpg';
import preview4 from './img/preview4.jpg';
import Star from "../../assets/ProductPage/Star";
import WithSlider from "../../components/WithSlider";
import { recentlyViewed } from "../../constants/staticData";
import CardNewArrival from "../../components/CardNewArrival";

const sliderPreview = [preview, preview1, preview2, preview3, preview4];
const hashtags = ['#Cream', '#canvas', '#Big', '#tags'];
const locations = ['Home', "Women's Clothing", 'Swimwear', 'Floral Dress'];

function getTabs() {
	return (
		sliderPreview.map((item, i) =>
			<SliderTab active={i === sliderPreview.length - 1}>
				<SliderPreview src={item} />
			</SliderTab>
		)
	)
}

function getSlickSlides() {
	return (
		recentlyViewed.map((arrival, index) => (
			<CardNewArrival key={index} {...arrival} />
		))
	)
}

function getRecentlySlides() {
	return (
		recentlyViewed.map((arrival, index) => (
			<CardNewArrival key={index} {...arrival} />
		))
	)
}

const ProductPageDesktop = () => {

	function setRating(value) {
		const Rating = [];
		for (let i = 0; i < value; i += 1) {
			Rating.push(<Star />)
		}
		if (value < 5) {
			for (let i = 0; i < 5 - value; i += 1) {
				Rating.push(<Star color='#efefef' />)
			}
		}
		return Rating;
	}

	const mouseMoveHandler = ev => {
		const t = ev.target;
		if (ev.type === 'mouseout') {
			t.style.top = ``;
			t.style.left = ``;
			t.style.position = ``;
			return;
		}
		const slide = t.parentNode;
		const coors = slide.getBoundingClientRect();
		const mouseCoors = { top: ev.clientY, left: ev.clientX };
		t.style.position = `absolute`;
		t.style.top = `${coors.top - mouseCoors.top}px`;
		t.style.left = `${coors.left - mouseCoors.left}px`;
	};

	return (
		<PageWrap>
			<Container>
				<Breadcrumbs locations={locations} />
				<Row>
					<Column>
						<Slider>
							<SliderTabList>
								{getTabs()}
							</SliderTabList>
							<SliderSlide>
								<SliderPic
									onMouseMove={ev => mouseMoveHandler(ev)}
									onMouseOut={ev => mouseMoveHandler(ev)}
									src={slidePic} />
							</SliderSlide>
						</Slider>
						<Hashtags>
							{
								hashtags.map(tag => <Tag>{tag}</Tag>)
							}
						</Hashtags>
					</Column>

					<Column>
						<OrderInfo setRating={setRating} />
						{/* <Comments /> */}
					</Column>
				</Row>
				<SellerInfo setRating={setRating} />
				<Similar>
					<SimilarHeading>
						Similar Items
						<SliderContainer>
							<SlickSlider slidesToShow={4} arrows slidesToScroll={4}>
								{getSlickSlides()}
							</SlickSlider>
						</SliderContainer>
					</SimilarHeading>

				</Similar>
			</Container>
			<Recently>

				<WithSlider marginTop={0} title="Recently Viewed" slidesToScroll={4} infinite={false} withSeeMore slidesToShow={4} dots>
					{getRecentlySlides()}
				</WithSlider>
			</Recently>

		</PageWrap>

	)
};

export default ProductPageDesktop;
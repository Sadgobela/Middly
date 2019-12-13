import React from 'react';
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
	SliderControl,
	Column,
	Hashtags,
	Tag,
	Similar,
	SimilarHeading,
	Recently,
} from './styled';
import OrderInfo from './Components/OrderInfo';
import Comments from 'components/Comments';
import SellerInfo from './Components/SellerInfo';
import Breadcrumbs from 'components/Breadcrumbs';
import slidePic from './img/full-slide.png';
import preview from './img/preview.jpg';
import preview1 from './img/preview1.jpg';
import preview2 from './img/preview2.jpg';
import preview3 from './img/preview3.jpg';
import preview4 from './img/preview4.jpg';
import Star from "../../assets/ProductPage/Star";
import WithSlider from "../../components/WithSlider";
import {recentlyViewed} from "../../constants/staticData";
import CardNewArrival from "../../components/CardNewArrival";
import SlickSlider from 'react-slick';
import SizeGuide from "./Components/SizeGuide";
import AddedPopup from "./Components/AddedPopup";

const sliderPreview = [preview,preview1,preview2,preview3,preview4];
const hashtags = ['#Cream', '#canvas', '#Big', '#tags' ];

const ProductPageDesktop = ()=>{

	function setRating(value) {
		let Rating = [];
		for(let i = 0; i < value; i++){
			Rating.push(<Star />)
		}
		if(value < 5){
			for(let i = 0; i < 5 - value; i++){
				Rating.push(<Star color='#efefef' />)
			}
		}
		return Rating;
	}

	const mouseMoveHandler = ev =>{
		let t = ev.target;
		if(ev.type === 'mouseout'){
			t.style.top = ``;
			t.style.left = ``;
			t.style.position = ``;
			return;
		}
		let slide = t.parentNode;
		let coors = slide.getBoundingClientRect();
		let mouseCoors = {top: ev.clientY, left: ev.clientX };
		t.style.position = `absolute`;
		t.style.top = `${coors.top - mouseCoors.top}px`;
		t.style.left = `${coors.left - mouseCoors.left}px`;
	};

	return (
		<PageWrap>
			<Container>
				<Breadcrumbs />
				<Row>
					<Column>
						<Slider>
							<SliderTabList>
								{
									sliderPreview.map( (item, i) =>
										<SliderTab active={i === sliderPreview.length -1}>
											<SliderPreview src={item} />
										</SliderTab>
									)
								}
							</SliderTabList>
							<SliderSlide>
								<SliderPic
									onMouseMove={ ev => mouseMoveHandler(ev) }
									onMouseOut={ ev => mouseMoveHandler(ev) }
									src={slidePic} />
							</SliderSlide>
						</Slider>
						<Hashtags>
							{
								hashtags.map( tag => <Tag>{tag}</Tag>)
							}
						</Hashtags>
					</Column>

					<Column>
						<OrderInfo setRating={setRating} />
						<Comments />
					</Column>
				</Row>
				<SellerInfo setRating={setRating} />
				<Similar>
					<SimilarHeading>
						Similar Items
					</SimilarHeading>

				</Similar>
			</Container>
			<Recently>

				<WithSlider marginTop={0} title="Recently Viewed" slidesToScroll={4} infinite={false} withSeeMore slidesToShow={4} dots={true}>
					{recentlyViewed.map((arrival, index) => (
						<CardNewArrival key={index} {...arrival} />
					))}
				</WithSlider>
			</Recently>
			<SizeGuide />
			<AddedPopup />
		</PageWrap>

	)
};

export default ProductPageDesktop;
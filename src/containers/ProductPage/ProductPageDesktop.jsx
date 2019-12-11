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
} from './styled';
import OrderInfo from './Components/OrderInfo';
import Breadcrumbs from 'components/Breadcrumbs';
import slidePic from './img/slidePic.jpg';
import preview from './img/preview.jpg';
import preview1 from './img/preview1.jpg';
import preview2 from './img/preview2.jpg';
import preview3 from './img/preview3.jpg';
import preview4 from './img/preview4.jpg';

const sliderPreview = [preview,preview1,preview2,preview3,preview4];

const ProductPageDesktop = ()=>{

	return (
		<PageWrap>
			<Container>
				<Breadcrumbs />
				<Row>
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
							<SliderPic src={slidePic} />
						</SliderSlide>
					</Slider>
					<OrderInfo />
				</Row>
			</Container>
		</PageWrap>

	)
};

export default ProductPageDesktop;
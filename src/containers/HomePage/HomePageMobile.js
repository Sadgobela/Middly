import React from 'react';

import WithSlider from 'components/WithSlider';
import CardWithSale from 'components/CardWithSale';
import CardNewArrival from 'components/CardNewArrival';

import {mainSlides, categoriesMobile, deals, featuredProducts, newArrivals} from 'constants/staticData';
import {primaryColor} from 'constants/colors';
import {SliderContainer, SliderContainerList} from './styled';

import MainSlider from './components/MainSlider';
import Text from './components/Text';
import CategoriesMobile from './components/CategoriesMobile';
import Divider from './components/Divider';
import BannerMobile from './components/BannerMobile';

const HomePageMobile = () => {
  return (
    <>
      <MainSlider slides={mainSlides} />
      <Text>
        Do you have products to Sell?
        <br />
        <strong>
          Start Selling on <span style={{color: primaryColor}}>Middly!</span>
        </strong>
      </Text>
      <CategoriesMobile list={categoriesMobile} />
      <Divider />
      <SliderContainer>
        <WithSlider
          marginTop={0}
          title="Deals"
          withSeeMore
          slidesToScroll={1}
          infinite={false}
          slidesToShow={2}
          arrows={false}
          variableWidth={true}
        >
          {deals.map((product, index) => (
            <CardWithSale key={index} {...product} />
          ))}
        </WithSlider>
      </SliderContainer>
      <Divider height={40} />
      <SliderContainer>
        <WithSlider
          marginTop={0}
          title="Most Liked"
          withSeeMore
          slidesToScroll={1}
          infinite={false}
          slidesToShow={2}
          arrows={false}
          variableWidth={true}
        >
          {featuredProducts.map((product, index) => (
            <CardNewArrival key={index} {...product} />
          ))}
        </WithSlider>
      </SliderContainer>
      <Divider height={40} />
      <BannerMobile />
      <Divider height={40} />
      <SliderContainerList>
        <WithSlider
          marginTop={0}
          title="Featured Products"
          slidesToScroll={1}
          infinite={false}
          slidesToShow={1}
          arrows={false}
          dots={true}
          rows={3}
        >
          {newArrivals.map((product, index) => (
            <CardNewArrival key={index} {...product} inline />
          ))}
        </WithSlider>
      </SliderContainerList>

      <SliderContainer>
        <WithSlider
          marginTop={0}
          title="Fashion"
          withSeeMore
          slidesToScroll={1}
          infinite={false}
          slidesToShow={2}
          arrows={false}
          variableWidth={true}
        >
          {featuredProducts.map((product, index) => (
            <CardNewArrival key={index} {...product} />
          ))}
        </WithSlider>
      </SliderContainer>
      <Divider height={40} />
      <SliderContainerList>
        <WithSlider
          marginTop={0}
          title="Recently Viewed"
          slidesToScroll={1}
          infinite={false}
          slidesToShow={1}
          arrows={false}
          dots={true}
          rows={3}
        >
          {newArrivals.map((product, index) => (
            <CardNewArrival key={index} {...product} inline />
          ))}
        </WithSlider>
      </SliderContainerList>
    </>
  );
};

export default HomePageMobile;

import React from 'react';

import WithSlider from 'components/WithSlider';
import WithScroll from 'components/WithScroll';
import CardWithSale from 'components/CardWithSale';
import CardNewArrival from 'components/CardNewArrival';

import {
  mainSlides,
  categoriesMobile,
  deals,
  featuredProducts,
  newArrivals,
  popularStores,
  shopNow,
  categoriesCards,
  electronics
} from 'constants/staticData';
import {primaryColor} from 'constants/colors';
import {SliderContainer, SliderContainerList} from './styled';

import MainSlider from './components/MainSlider';
import Text from './components/Text';
import CategoriesMobile from './components/CategoriesMobile';
import Divider from './components/Divider';
import BannerMobile from './components/BannerMobile';
import Explore from './components/Explore';
import PopularStores from './components/PopularStores';
import ShopNow from './components/ShopNow';
import Sell from './components/Sell';
import PopularCategories from './components/PopularCategories';

const HomePageMobile = () => {
  return (
    <>
      <MainSlider slides={mainSlides} touchThreshold={8} speed={100} waitForAnimate={false} />
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
        <WithScroll marginTop={0} title="Deals" withSeeMore height={255}>
          {deals.map((product, index) => (
            <CardNewArrival key={index} {...product} />
          ))}
        </WithScroll>
      </SliderContainer>
      <Divider height={40} />
      <SliderContainer>
        <WithScroll marginTop={0} title="Most Liked" withSeeMore height={255}>
          {featuredProducts.map((product, index) => (
            <CardNewArrival key={index} {...product} />
          ))}
        </WithScroll>
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
          swipeToSlide={true}
          touchThreshold={8}
        >
          {newArrivals.map((product, index) => (
            <CardNewArrival key={index} {...product} inline />
          ))}
        </WithSlider>
      </SliderContainerList>

      <Explore />
      <PopularStores list={popularStores} />
      <ShopNow list={shopNow} />

      <SliderContainer>
        <WithScroll marginTop={0} title="Fashion" withSeeMore height={255} showFollow followed>
          {featuredProducts.map((product, index) => (
            <CardNewArrival key={index} {...product} />
          ))}
        </WithScroll>
      </SliderContainer>

      <SliderContainer>
        <WithScroll marginTop={0} title="Electronics" withSeeMore height={255} showFollow followed={false}>
          {electronics.map((product, index) => (
            <CardNewArrival key={index} {...product} />
          ))}
        </WithScroll>
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
          touchThreshold={8}
        >
          {newArrivals.map((product, index) => (
            <CardNewArrival key={index} {...product} inline />
          ))}
        </WithSlider>
      </SliderContainerList>
      <Divider />
      <Sell />
      <Divider />
      <PopularCategories list={categoriesCards} />
    </>
  );
};

export default HomePageMobile;

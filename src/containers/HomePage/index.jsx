import React from 'react';
import CardCategory from '../../components/CardCategory';
import CardShop from '../../components/CardShop';
import CardWithSale from '../../components/CardWithSale';
import { FlexContainer } from '../../globalStyles';
import Header from '../../components/Header';
import CategoriesList from './components/CategoriesList';
import ContentWithBackground from './components/ContentWithBackground';
import {
  defaultCategories,
  defaultProductCards,
  defaultArrivals,
  defaultShops,
  categoriesCards
} from '../../constants/staticData';
import makeEasyBackground from '../../images/makeEasyBackground.png';
import SaleAdvertContent from './components/SaleAdvertContent';
import {
  MainColor,
  BoldText,
  ShopsWrapper,
  SubscribeTitle,
  SubscribeBlock,
  StyledEmailInput,
  SubscribeButton
} from './styled';
import WithSlider from '../../components/WithSlider';
import MakeEastAdvert from './components/MakeEasyAdvert';
import CardNewArrival from '../../components/CardNewArrival';
import Banners from './components/Banners';
import SingleImageBanner from './components/SingleImageBanner';
import CardsContainer from '../../components/CardsContainer';

const HomePage = () => (
  <>
    <Header />

    <CategoriesList list={defaultCategories} />

    <ContentWithBackground background={makeEasyBackground}>
      <SaleAdvertContent />
    </ContentWithBackground>

    <FlexContainer justifyContent="center">
      Do you have products to Sell?{' '}
      <BoldText>
        Start Selling on <MainColor>Middly!</MainColor>
      </BoldText>
    </FlexContainer>

    <WithSlider
      marginTop={100}
      title="Featured Products"
      slidesToScroll={4}
      infinite={false}
      slidesToShow={4}
    >
      {defaultProductCards.map((product, index) => (
        <CardWithSale key={index} {...product} />
      ))}
    </WithSlider>

    <ContentWithBackground background={makeEasyBackground}>
      <MakeEastAdvert />
    </ContentWithBackground>

    <WithSlider
      title="New Arrivals"
      slidesToScroll={4}
      infinite={false}
      slidesToShow={4}
    >
      {defaultArrivals.map((arrival, index) => (
        <CardNewArrival key={index} {...arrival} />
      ))}
    </WithSlider>

    <ShopsWrapper>
      <WithSlider
        title="Popular Shops Near You"
        slidesToScroll={5}
        marginTop={0}
        infinite={false}
        slidesToShow={5}
      >
        {defaultShops.map((shop, index) => (
          <CardShop key={index} {...shop} />
        ))}
      </WithSlider>
    </ShopsWrapper>

    <WithSlider
      marginTop={100}
      title="Featured Products"
      slidesToScroll={4}
      withSeeMore
      infinite={false}
      slidesToShow={4}
    >
      {defaultArrivals.slice(0, 3).map((arrival, index) => (
        <CardNewArrival key={index} {...arrival} />
      ))}
    </WithSlider>

    <Banners />

    <WithSlider
      marginTop={100}
      title="Recently Viewed"
      slidesToScroll={4}
      infinite={false}
      slidesToShow={4}
    >
      {defaultArrivals.map((arrival, index) => (
        <CardNewArrival key={index} {...arrival} />
      ))}
    </WithSlider>

    <SingleImageBanner />

    <CardsContainer title="Popular Categories">
      {categoriesCards.map((card, index) => (
        <CardCategory key={index} {...card} />
      ))}
    </CardsContainer>

    <SubscribeBlock>
      <SubscribeTitle>Subscribe to our newsletter</SubscribeTitle>
      <FlexContainer justifyContent="center">
        <StyledEmailInput />

        <SubscribeButton type="button">Subscribe</SubscribeButton>
      </FlexContainer>
    </SubscribeBlock>
  </>
);

export default HomePage;

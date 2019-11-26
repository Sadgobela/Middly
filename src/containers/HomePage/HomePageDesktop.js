import React from 'react';
import CardCategory from 'components/CardCategory';
import CardShop from 'components/CardShop';
import CardWithSale from 'components/CardWithSale';
import CategoriesList from './components/CategoriesList';
import ContentWithBackground from './components/ContentWithBackground';
import {
  defaultCategories,
  categoriesCards,
  deals,
  featuredProducts,
  newArrivals,
  shops,
  fashion,
  electronics,
  recentlyViewed
} from 'constants/staticData';
import main from 'images/main.png';
import makeEasyBackground from 'images/makeEasyBackground.png';
import SaleAdvertContent from './components/SaleAdvertContent';
import {MainColor, BoldText, ShopsWrapper, SellTitle} from './styled';
import WithSlider from 'components/WithSlider';
import MakeEastAdvert from './components/MakeEasyAdvert';
import CardNewArrival from 'components/CardNewArrival';
import SingleImageBanner from './components/SingleImageBanner';
import CardsContainer from 'components/CardsContainer';

const HomePageDesktop = () => (
  <>
    <CategoriesList list={defaultCategories} />

    <ContentWithBackground
      background={main}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#E3E3E3',
        backgroundPosition: 'right center'
      }}
    >
      <SaleAdvertContent />
    </ContentWithBackground>

    <SellTitle>
      <span>Do you have products to Sell? </span>
      <BoldText>
        Start Selling on <MainColor>Middly!</MainColor>
      </BoldText>
    </SellTitle>

    <WithSlider marginTop={76} title="Deals" withSeeMore slidesToScroll={4} infinite={false} slidesToShow={4}>
      {deals.map((product, index) => (
        <CardWithSale key={index} {...product} />
      ))}
    </WithSlider>

    <ContentWithBackground
      background={makeEasyBackground}
      style={{
        marginTop: 43,
        padding: '59px 0',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor: '#EAEAEC'
      }}
    >
      <MakeEastAdvert />
    </ContentWithBackground>

    <WithSlider
      title="Featured Products"
      withSeeMore
      slidesToScroll={4}
      infinite={false}
      slidesToShow={4}
      marginTop={44}
    >
      {featuredProducts.map((arrival, index) => (
        <CardNewArrival key={index} {...arrival} />
      ))}
    </WithSlider>

    <WithSlider title="New Arrivals" slidesToScroll={4} infinite={false} slidesToShow={4} marginTop={88} withSeeMore>
      {newArrivals.map((arrival, index) => (
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
        padding={'23px 45px 30px'}
      >
        {shops.map((shop, index) => (
          <CardShop key={index} {...shop} />
        ))}
      </WithSlider>
    </ShopsWrapper>

    <WithSlider marginTop={31} title="Fashion" slidesToScroll={4} infinite={false} slidesToShow={4} withSeeMore>
      {fashion.map((arrival, index) => (
        <CardNewArrival key={index} {...arrival} />
      ))}
    </WithSlider>

    <WithSlider marginTop={89} title="Electronics" slidesToScroll={4} infinite={false} slidesToShow={4} withSeeMore>
      {electronics.map((arrival, index) => (
        <CardNewArrival key={index} {...arrival} />
      ))}
    </WithSlider>

    <SingleImageBanner />

    <WithSlider marginTop={45} title="Recently Viewed" slidesToScroll={4} infinite={false} withSeeMore slidesToShow={4}>
      {recentlyViewed.map((arrival, index) => (
        <CardNewArrival key={index} {...arrival} />
      ))}
    </WithSlider>

    <CardsContainer title="Popular Categories" paddingTop={89}>
      {categoriesCards.map((card, index) => (
        <CardCategory key={index} {...card} />
      ))}
    </CardsContainer>
  </>
);

export default HomePageDesktop;

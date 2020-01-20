import React from 'react';
import CardCategory from 'components/CardCategory';
import CardShop from 'components/CardShop';
import {newArrivals, fashion, electronics, recentlyViewed} from 'constants/staticData';
import main from 'images/main.png';
import makeEasyBackground from 'images/makeEasyBackground.png';
import WithSlider from 'components/WithSlider';
import CardNewArrival from 'components/CardNewArrival';
import CardsContainer from 'components/CardsContainer';
import {useQuery} from 'react-apollo';
import CategoriesList from './components/CategoriesList';
import ContentWithBackground from './components/ContentWithBackground';
import SaleAdvertContent from './components/SaleAdvertContent';
import {MainColor, BoldText, ShopsWrapper, SellTitle} from './styled';
import MakeEastAdvert from './components/MakeEasyAdvert';
import SingleImageBanner from './components/SingleImageBanner';
import {GET_DAILY_DEALS, GET_CATEGORIES, GET_FEATURED_PRODUCTS, GET_STORES, GET_POPULAR_CATEGORIES} from './graphQL';
import {formatDeals, formatProducts, formatPopularShops, formatPopularCategories} from './helpers';
import {string, number, bool} from 'prop-types';

const HomePageDesktop = (isLiked, isWished) => {
  const {data: categoriesData} = useQuery(GET_CATEGORIES, {
    context: {clientType: 'magento'}
  });
  const categoriesList =
    categoriesData && categoriesData.category && categoriesData.category.children
      ? categoriesData.category.children.filter((category) => category.name)
      : [];

  const {data: dealsData} = useQuery(GET_DAILY_DEALS, {
    context: {clientType: 'magento'}
  });
  const deals = dealsData && dealsData.dailyDeals && dealsData.dailyDeals.items ? dealsData.dailyDeals.items : [];

  const {data: featuredProductsData} = useQuery(GET_FEATURED_PRODUCTS, {
    context: {clientType: 'magento'}
  });
  const featuredProducts =
    featuredProductsData && featuredProductsData.featuredProducts && featuredProductsData.featuredProducts.items
      ? featuredProductsData.featuredProducts.items
      : [];

  const {data: stores} = useQuery(GET_STORES, {
    context: {clientType: 'magento'}
  });
  const popularStores =
    stores && stores.stores && stores.stores.items ? stores.stores.items.filter((item) => item.name) : [];

  const {data: popularCategoriesData} = useQuery(GET_POPULAR_CATEGORIES, {
    context: {clientType: 'magento'}
  });
  const popularCategories =
    popularCategoriesData && popularCategoriesData.popularCategories && popularCategoriesData.popularCategories.items
      ? popularCategoriesData.popularCategories.items.filter((category) => category.image !== 'false')
      : [];

  return (
    <>
      <CategoriesList list={categoriesList} />

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

      <WithSlider
        marginTop={76}
        title="Deals"
        withSeeMore
        slidesToScroll={4}
        infinite={false}
        slidesToShow={4}
        padding={0}
      >
        {formatDeals(deals).map((product, index) => (
          <CardNewArrival
            imgSrc={product.imgSrc}
            title={product.title}
            newPrice={product.newPrice}
            key={index}
            inline={product.inline}
            oldPrice={product.oldPrice}
            isLiked={isLiked}
            isWished={isWished}
          />
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
        padding={0}
      >
        {formatProducts(featuredProducts).map((arrival, index) => (
          <CardNewArrival
            key={index}
            isWished={isWished}
            isLiked={isLiked}
            title={arrival.title}
            imgSrc={arrival.imgSrc}
            inline={arrival.inline}
            oldPrice={arrival.oldPrice}
            newPrice={arrival.newPrice}
          />
        ))}
      </WithSlider>

      <WithSlider
        title="New Arrivals"
        padding={0}
        slidesToScroll={4}
        infinite={false}
        slidesToShow={4}
        marginTop={88}
        withSeeMore
      >
        {newArrivals.map((arrival, index) => (
          <CardNewArrival
            isLiked={isLiked}
            isWished={isWished}
            key={index}
            title={arrival.title}
            imgSrc={arrival.imgSrc}
            newPrice={arrival.newPrice}
            oldPrice={arrival.oldPrice}
            inline={arrival.inline}
          />
        ))}
      </WithSlider>

      <ShopsWrapper>
        <WithSlider
          title="Popular Shops Near You"
          slidesToScroll={5}
          marginTop={0}
          infinite={false}
          slidesToShow={5}
          padding="23px 45px 30px"
        >
          {formatPopularShops(popularStores).map((shop, index) => (
            <CardShop key={index} {...shop} />
          ))}
        </WithSlider>
      </ShopsWrapper>

      <WithSlider
        marginTop={31}
        title="Fashion"
        slidesToScroll={4}
        infinite={false}
        slidesToShow={4}
        padding={0}
        withSeeMore
      >
        {fashion.map((arrival, index) => (
          <CardNewArrival
            isLiked={isLiked}
            isWished={isWished}
            key={index}
            title={arrival.title}
            imgSrc={arrival.imgSrc}
            newPrice={arrival.newPrice}
            oldPrice={arrival.oldPrice}
            inline={arrival.inline}
          />
        ))}
      </WithSlider>

      <WithSlider
        marginTop={89}
        title="Electronics"
        slidesToScroll={4}
        infinite={false}
        slidesToShow={4}
        padding={0}
        withSeeMore
      >
        {electronics.map((arrival, index) => (
          <CardNewArrival
            isLiked={isLiked}
            isWished={isWished}
            key={index}
            title={arrival.title}
            imgSrc={arrival.imgSrc}
            newPrice={arrival.newPrice}
            oldPrice={arrival.oldPrice}
            inline={arrival.inline}
          />
        ))}
      </WithSlider>

      <SingleImageBanner />

      <WithSlider
        marginTop={45}
        title="Recently Viewed"
        slidesToScroll={4}
        infinite={false}
        withSeeMore
        padding={0}
        slidesToShow={4}
      >
        {recentlyViewed.map((arrival, index) => (
          <CardNewArrival
            isLiked={isLiked}
            isWished={isWished}
            key={index}
            title={arrival.title}
            imgSrc={arrival.imgSrc}
            newPrice={arrival.newPrice}
            oldPrice={arrival.oldPrice}
            inline={arrival.inline}
          />
        ))}
      </WithSlider>

      <CardsContainer title="Popular Categories" paddingTop={89}>
        {formatPopularCategories(popularCategories).map((card, index) => (
          <CardCategory key={index} {...card} />
        ))}
      </CardsContainer>
    </>
  );
};

HomePageDesktop.propTypes = {
  isLiked: bool.isRequired,
  isWished: bool.isRequired
};

export default HomePageDesktop;

import React from 'react';

import WithSlider from 'components/WithSlider';
import WithScroll from 'components/WithScroll';
import CardNewArrival from 'components/CardNewArrival';

import {mainSlides, newArrivals, shopNow, electronics} from 'constants/staticData';
import {primaryColor} from 'constants/colors';
import {useQuery} from 'react-apollo';
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
import {GET_FEATURED_PRODUCTS, GET_DAILY_DEALS, GET_CATEGORIES, GET_POPULAR_CATEGORIES, GET_STORES} from './graphQL';
import {formatProducts, formatDeals, formatPopularCategories, formatMobilePopularShops} from './helpers';

const HomePageMobile = () => {
  const {data: categoriesData} = useQuery(GET_CATEGORIES, {
    context: {clientType: 'magento'}
  });
  const categoriesList = categoriesData ? categoriesData.category.children.filter((category) => category.name) : [];

  const {data: dealsData} = useQuery(GET_DAILY_DEALS, {
    context: {clientType: 'magento'}
  });
  const deals = dealsData ? dealsData.dailyDeals.items : [];

  const {data: featuredProductsData} = useQuery(GET_FEATURED_PRODUCTS, {
    context: {clientType: 'magento'}
  });
  const featuredProducts = featuredProductsData ? featuredProductsData.featuredProducts.items : [];

  const {data: stores} = useQuery(GET_STORES, {
    context: {clientType: 'magento'}
  });
  const popularStores = stores ? stores.stores.items.filter((item) => item.name && item.company_locality) : [];

  const {data: popularCategoriesData} = useQuery(GET_POPULAR_CATEGORIES, {
    context: {clientType: 'magento'}
  });
  const popularCategories = popularCategoriesData
    ? popularCategoriesData.popularCategories.items.filter((category) => category.image !== 'false')
    : [];

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
      <CategoriesMobile list={categoriesList} />
      <Divider />
      <SliderContainer>
        <WithScroll marginTop={0} title="Deals" withSeeMore height={255}>
          {formatDeals(deals).map((product, index) => (
            <CardNewArrival key={index} {...product} />
          ))}
        </WithScroll>
      </SliderContainer>
      <Divider height={40} />
      <SliderContainer>
        <WithScroll marginTop={0} title="Most Liked" withSeeMore height={255}>
          {newArrivals.map((product, index) => (
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
          dots
          rows={3}
          swipeToSlide
          touchThreshold={8}
        >
          {formatProducts(featuredProducts).map((product, index) => (
            <CardNewArrival key={index} {...product} inline />
          ))}
        </WithSlider>
      </SliderContainerList>

      <Explore />
      <PopularStores list={formatMobilePopularShops(popularStores)} />
      <ShopNow list={shopNow} />

      <SliderContainer>
        <WithScroll marginTop={0} title="Fashion" withSeeMore height={255} showFollow followed>
          {newArrivals.map((product, index) => (
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
          dots
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
      <PopularCategories list={formatPopularCategories(popularCategories)} />
    </>
  );
};

export default HomePageMobile;

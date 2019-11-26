import React from 'react';
import MainSlider from './components/MainSlider';

import {mainSlides, categoriesMobile} from 'constants/staticData';
import {primaryColor} from 'constants/colors';
import Text from './components/Text';
import CategoriesMobile from './components/CategoriesMobile';
import Divider from './components/Divider';

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
    </>
  );
};

export default HomePageMobile;

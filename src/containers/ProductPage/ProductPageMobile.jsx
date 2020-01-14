import React, {useState} from 'react';
import {} from 'prop-types';

import {product} from 'constants/staticData';

import BackLink from 'mobile/ProductPage/BackLink';
import MainSlider from 'mobile/ProductPage/MainSlider';
import Info from 'mobile/ProductPage/Info';
import Counters from 'mobile/ProductPage/Сounters';
import Description from 'mobile/ProductPage/Description';
import Divider from 'mobile/ProductPage/Divider';
import ReturnsPayments from 'mobile/ProductPage/ReturnsPayments';
import AboutSeller from 'mobile/ProductPage/AboutSeller';
import ProductSlider from 'mobile/ProductPage/ProductSlider';
import Feedbacks from 'mobile/ProductPage/Feedbacks';
import PopularHashtags from 'mobile/ProductPage/PopularHashtags';
import Buttons from 'mobile/ProductPage/Buttons';
import ProductAdded from 'mobile/ProductPage/ProductAdded';

import ActionPopup from 'components/Actions/popup';

import {
  Line
} from './styled';

const ProductPageMobile = () => {
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [showCommentsPopup, setShowCommentsPopup] = useState(false);
  const [showVariationsPopup, setShowVariationsPopup] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return <>
    <BackLink
      url="/"
    />
    <MainSlider
      slides={product.gallery}
    />
    <Info
      name={product.name}
      subName={product.subName}
      rating={product.rating}
      reviews={product.reviews}
      price={product.price}
      newPrice={product.newPrice}
      coins={product.coins}
      colors={product.colors}
      sizes={product.sizes}
      color={color}
      setColor={setColor}
      size={size}
      setSize={setSize}
      showVariationsPopup={showVariationsPopup}
      setShowVariationsPopup={setShowVariationsPopup}
      showMessage={showMessage}
      setShowMessage={setShowMessage}
    />
    <Counters
      likes={product.likes}
      comments={product.comments}
      share={product.share}
      bookmark={product.bookmark}
      showCommentsPopup={showCommentsPopup}
      setShowCommentsPopup={setShowCommentsPopup}
    />
    <Description
      text={product.description}
      attributes={product.attributes}
    />
    <Divider/>
    <ReturnsPayments/>
    <Divider/>
    <AboutSeller
      seller={product.seller}
    />
    <Line/>
    <ProductSlider/>
    <Divider/>

    <Feedbacks/>

    <Divider/>
    <ProductSlider
      title="Similar Items"
      seeMoreText="View All"
    />

    <ProductSlider
      title="Most Popular"
      seeMoreText="View All"
    />

    <PopularHashtags
      tags={['fashion', 'trends', 'shoes']}
    />

    <Buttons
      style={{
        marginTop: 0,
        padding: '0 16px 24px'
      }}
      showMessage={showMessage}
      setShowMessage={setShowMessage}
    />

    <ProductAdded
      showMessage={showMessage}
      setShowMessage={setShowMessage}
    />

    <ActionPopup/>
  </>
};

ProductPageMobile.defaultProps = {

};

ProductPageMobile.propTypes = {

};

export default ProductPageMobile;
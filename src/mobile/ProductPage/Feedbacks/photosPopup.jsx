import React, { useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import Scrollbar from 'react-scrollbars-custom';
import { bool, func } from 'prop-types';

import Icon from 'components/Icon';


import image1 from 'images/image1.jpg'
import gallery4 from 'images/gallery/gallery4.jpg'
import gallery5 from 'images/gallery/gallery5.jpg'
import gallery7 from 'images/gallery/gallery7.jpg'
import Counters from '../Сounters';

import {
  PopupWrapper,
  IconWrapper,
  Header,
  Title,
  MainImage,
  Thumbs,
  Thumb,
  Product,
  ProductThumb,
  ProductContent,
  ProductName,
  ProductFree,
  ProductButton,
  ProductRating,
  ProductReviews
} from './styled';

const PhotosPopup = ({ showPhotosPopup, setShowPhotosPopup }) => {
  useEffect(() => {
    if (showPhotosPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showPhotosPopup]);

  return <PopupWrapper active={showPhotosPopup}>
    <Header>
      <Title>Photos from Feedback</Title>

      <IconWrapper onClick={() => setShowPhotosPopup(false)}>
        <Icon
          type="arrowBack"
          svgStyle={{ width: 9, height: 9, color: '#1A1A1A' }}
        />
      </IconWrapper>
    </Header>

    <Div100vh
      style={{
        height: '100vh',
        padding: '0',
        maxHeight: 'calc(100rvh - 70px - 49px)',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}
    >
      <MainImage src={image1} />

      <Product>
        <ProductThumb src={image1} />
        <ProductContent>
          <ProductName>Chanel Beauty full A</ProductName>
          <ProductFree>Free Shipping</ProductFree>
          <ProductRating>
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 1 ? '#FFC131' : '#ccc' }} />
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 2 ? '#FFC131' : '#ccc' }} />
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 3 ? '#FFC131' : '#ccc' }} />
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: '#FFC131' }} />
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 5 ? '#FFC131' : '#ccc' }} />

            <ProductReviews>(355)</ProductReviews>
          </ProductRating>

          <ProductButton>
            <Icon
              type="cart"
              svgStyle={{ fill: '#fff' }}
            />
            <span>$526</span>
          </ProductButton>
        </ProductContent>
      </Product>

      <Thumbs>
        <Scrollbar
          disableTracksWidthCompensation
          style={{ height: 72 }}
          trackXProps={{
            renderer: (props) => {
              // eslint-disable-next-line react/prop-types
              const { elementRef, ...restProps } = props;
              return <span {...restProps} ref={elementRef} className="TrackX" />;
            }
          }}
        >
          <Thumb src={gallery4} />
          <Thumb src={gallery5} />
          <Thumb src={gallery7} />
          <Thumb src={gallery4} />
          <Thumb src={gallery5} />
          <Thumb src={gallery7} />
          <Thumb src={gallery4} />
          <Thumb src={gallery5} />
          <Thumb src={gallery7} />
          <Thumb src={gallery4} />
          <Thumb src={gallery5} />
          <Thumb src={gallery7} />
        </Scrollbar>
      </Thumbs>
    </Div100vh>

    <Counters
      likes={356}
      comments={22}
      share={43}
      style={{
        borderTop: '1px solid #E4E4E4',
        borderBottom: 0
      }}
    />
  </PopupWrapper>
};

PhotosPopup.defaultProps = {
  showPhotosPopup: false,
  setShowPhotosPopup: () => { }
};

PhotosPopup.propTypes = {
  showPhotosPopup: bool,
  setShowPhotosPopup: func
};

export default PhotosPopup;
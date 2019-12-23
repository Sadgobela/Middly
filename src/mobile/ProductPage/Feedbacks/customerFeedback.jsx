import React, { useEffect } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import Div100vh from 'react-div-100vh';
import { string, bool, func } from 'prop-types';

import Icon from 'components/Icon';

import Divider from '../Divider';
import Counters from '../Сounters';

import image1 from 'images/image1.jpg';
import avatar1 from 'images/avatar1.png';
import photo from 'images/photo.png';

import {
  PopupWrapper,
  IconWrapper,
  Header,
  Title,
  Product,
  ProductThumb,
  ProductContent,
  ProductName,
  ProductFree,
  ProductButton,
  FeedbackItemHeader,
  FeedbackItemImg,
  FeedbackItemName,
  FeedbackItemRating,
  FeedbackItemText,
  Gallery,
  GalleryCol,
  GalleryItem,
  FeedbackItem,
  FeedbackFollowButton,
  FeedbackRating,
  ProductRating,
  ProductReviews,
  Helpful,
  Button,
  More,
  MoreDot
} from './styled';

const CustomerFeedback = ({ showCustomerFeedback, setShowCustomerFeedback }) => {
  useEffect(() => {
    if(showCustomerFeedback) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showCustomerFeedback]);

  return <PopupWrapper active={showCustomerFeedback}>
    <Header>
      <Title>Customer Feedback</Title>

      <IconWrapper onClick={() => setShowCustomerFeedback(false)}>
        <Icon
          type="arrowBack"
          svgStyle={{ width: 9, height: 9, color: '#1A1A1A' }}
        />
      </IconWrapper>

      <More>
        <MoreDot/>
        <MoreDot/>
        <MoreDot/>
      </More>
    </Header>

    <Div100vh
      style={{
        height: '100vh',
        padding: '10px 0 0 0',
        maxHeight: 'calc(100rvh - 70px - 49px)',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}
    >
      <Product>
        <ProductThumb src={image1}/>
        <ProductContent>
          <ProductName>Chanel Beauty full A</ProductName>
          <ProductFree>Free Shipping</ProductFree>
          <ProductRating>
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 1 ? '#FFC131' : '#ccc' }}/>
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 2 ? '#FFC131' : '#ccc' }}/>
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 3 ? '#FFC131' : '#ccc' }}/>
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 4 ? '#FFC131' : '#ccc' }}/>
            <Icon type="star" svgStyle={{ width: 11, height: 11, fill: 4 >= 5 ? '#FFC131' : '#ccc' }}/>

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

      <Divider style={{height: 8}}/>

      <FeedbackItem
        style={{
          marginTop: 0,
          borderTop: 0,
          padding: 16
        }}
      >
        <FeedbackItemHeader>
          <FeedbackItemImg src={avatar1}/>
          <FeedbackItemName>
            Hanna Rick
            <span>24 Nov 2019</span>
          </FeedbackItemName>

          <FeedbackFollowButton>
            <Icon type="plus"/>
            <span>Follow</span>
          </FeedbackFollowButton>
        </FeedbackItemHeader>
        <FeedbackItemRating
          style={{
            marginTop: 16
          }}
        >
          <FeedbackRating>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 1 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 2 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 3 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 4 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 5 ? '#FFC131' : '#ccc'}}/>
          </FeedbackRating>
          This is an amazing product!
        </FeedbackItemRating>

        <FeedbackItemText
          style={{
            maxWidth: '100%',
            color: '#8F8F8F'
          }}
        >
          <Scrollbar
            disableTracksWidthCompensation
            style={{ height: '100vh', maxHeight: 275 }}
            trackXProps={{
              renderer: (props) => {
                const {elementRef, ...restProps} = props;
                return <span {...restProps} ref={elementRef} className="TrackX"/>;
              }
            }}
          >
            This product is amazing! I have finally found a moisturizer that actually works. I have very dry skin year round and nothing until this product has given me enough hydration. I was having trouble with my skin being so dry, any product I put on my face would burn so I went and got a sample of this and within a few days my skin felt so much better, I went and purchased the full size. It doesn't feel heavy at all and a little goes a long way.  I will be a staple in my skincare routine from now on.
            This product is amazing! I have finally found a moisturizer that actually works. I have very dry skin year round and nothing until this product has given me enough hydration. I was having trouble with my
            This product is amazing! I have finally found a moisturizer that actually works. I have very dry skin year round and nothing until this product has given me enough hydration. I was having trouble with my skin being so dry, any product I put on my face would burn so I went and got a sample of this and within a few days my skin felt so much better, I went and purchased the full size. It doesn't feel heavy at all and a little goes a long way.  I will be a staple in my skincare routine from now on.
            This product is amazing! I have finally found a moisturizer that actually works. I have very dry skin year round and nothing until this product has given me enough hydration. I was having trouble with my
            This product is amazing! I have finally found a moisturizer that actually works. I have very dry skin year round and nothing until this product has given me enough hydration. I was having trouble with my skin being so dry, any product I put on my face would burn so I went and got a sample of this and within a few days my skin felt so much better, I went and purchased the full size. It doesn't feel heavy at all and a little goes a long way.  I will be a staple in my skincare routine from now on.
            This product is amazing! I have finally found a moisturizer that actually works. I have very dry skin year round and nothing until this product has given me enough hydration. I was having trouble with my
          </Scrollbar>
        </FeedbackItemText>

        <Gallery>
          <GalleryCol>
            <GalleryItem image={photo} onClick={() => setShowCustomerFeedback(true)}/>
            <GalleryItem image={photo} onClick={() => setShowCustomerFeedback(true)}/>
          </GalleryCol>
        </Gallery>

      </FeedbackItem>

      <Helpful>
        <Button>Helpful (54)</Button>
        <Button>Not helpful (6)</Button>
      </Helpful>

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

CustomerFeedback.defaultProps = {
  title: 'Returns & Exchanges',
  showCustomerFeedback: false,
  setShowCustomerFeedback: () => {}
};

CustomerFeedback.propTypes = {
  title: string,
  showCustomerFeedback: bool,
  setShowCustomerFeedback: func
};

export default CustomerFeedback;
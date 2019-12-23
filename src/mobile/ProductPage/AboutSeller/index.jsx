import React, { useState } from 'react';
import { object } from 'prop-types';

import Title from '../Title';
import Icon from 'components/Icon';
import Popup from './popup';

import {
  Wrapper,
  Seller,
  SellerThumb,
  SellerContent,
  SellerLabel,
  SellerName,
  SellerButtons,
  SellerButton,
  SellerFollowers,
  SellerImages,
  SellerFollowersCount,
  Rating,
  Reviews,
} from './styled';

const AboutSeller = ({ seller }) => {
  const [showPopup, setShowPopup] = useState(false);

  return <Wrapper>
    <Title
      title="About Seller"
      style={{ marginBottom: 24 }}
    />

    <Seller>
      <SellerThumb src={seller.img}/>
      <SellerContent>
        <SellerLabel>Seller</SellerLabel>
        {seller.name && <SellerName>{seller.name}</SellerName>}

        {
          seller.rating &&
            <Rating>
              <Icon type="star" svgStyle={{ width: 11, height: 11, fill: seller.rating >= 1 ? '#FFC131' : '#ccc' }}/>
              <Icon type="star" svgStyle={{ width: 11, height: 11, fill: seller.rating >= 2 ? '#FFC131' : '#ccc' }}/>
              <Icon type="star" svgStyle={{ width: 11, height: 11, fill: seller.rating >= 3 ? '#FFC131' : '#ccc' }}/>
              <Icon type="star" svgStyle={{ width: 11, height: 11, fill: seller.rating >= 4 ? '#FFC131' : '#ccc' }}/>
              <Icon type="star" svgStyle={{ width: 11, height: 11, fill: seller.rating >= 5 ? '#FFC131' : '#ccc' }}/>

              {seller.reviews && <Reviews>({seller.reviews})</Reviews>}
            </Rating>
        }

        <SellerButtons>
          <SellerButton>
            <Icon type="plus"/>
            <span>Follow</span>
          </SellerButton>

          <SellerButton type="primary">
            <span>Chat with seller</span>
          </SellerButton>
        </SellerButtons>
      </SellerContent>
    </Seller>

    {
      seller.followers && seller.followers.length &&
        <SellerFollowers>
          <SellerImages>
            {seller.followers.map((follower, key) => key <= 1 && <img src={follower.avatar} key={key} alt={follower.name}/>)}
          </SellerImages>
          <SellerFollowersCount>
            {seller.followers[0].name} and <a onClick={() => setShowPopup(true)}>{seller.followers.length - 1} more</a>
            <span>started following this Seller</span>
          </SellerFollowersCount>
        </SellerFollowers>
    }

    <Popup
      showPopup={showPopup}
      setShowPopup={setShowPopup}
    />
  </Wrapper>
};

AboutSeller.defaultProps = {
  seller: {}
};

AboutSeller.propTypes = {
  seller: object
};

export default AboutSeller;
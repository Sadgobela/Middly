import React from 'react';
import { string, number, bool } from 'prop-types';
import StarRatings from 'react-star-ratings';
import { Icon } from 'antd';
import { CardFooter, Image, Card, Title } from './styled';
import {
  FlexContainer,
  FollowButton,
  FollowersCount
} from '../../globalStyles';
import { starFillColor } from '../../constants/colors';

const CardShop = ({ title, imgSrc, rating, isFollowing }) => (
  <Card>
    <Image src={imgSrc} alt="product" />
    <CardFooter>
      <Title>{title}</Title>
      <FlexContainer width="100%">
        <FollowersCount>128k followers</FollowersCount>
        <StarRatings
          numberOfStars={5}
          starRatedColor={starFillColor}
          rating={rating}
          starDimension="9px"
          starSpacing="1px"
        />
      </FlexContainer>
      <FollowButton isFollowing={isFollowing}>
        {isFollowing ? (
          <div>Following</div>
        ) : (
          <FlexContainer>
            <Icon type="plus" />
            <div>Follow</div>
          </FlexContainer>
        )}
      </FollowButton>
    </CardFooter>
  </Card>
);

CardShop.propTypes = {
  title: string.isRequired,
  imgSrc: string.isRequired,
  rating: number.isRequired,
  isFollowing: bool.isRequired
};

export default CardShop;

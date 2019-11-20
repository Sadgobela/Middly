import React from 'react';
import { string, bool } from 'prop-types';
import { Icon } from 'antd';
import { CardFooter, Image, Card, Title } from './styled';
import {
  FlexContainer,
  FollowersCount,
  FollowButton
} from '../../globalStyles';

const CardCategory = ({ title, imgSrc, isFollowing }) => (
  <Card>
    <Image src={imgSrc} alt="product" />
    <CardFooter>
      <FlexContainer alignItems="flex-start" flexDirection="column">
        <Title>{title}</Title>
        <FollowersCount>128k followers</FollowersCount>
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

CardCategory.propTypes = {
  title: string.isRequired,
  imgSrc: string.isRequired,
  isFollowing: bool.isRequired
};

export default CardCategory;

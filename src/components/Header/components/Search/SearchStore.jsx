import React from 'react';
import PropTypes from 'prop-types';

import Plus from 'assets/Plus';
import Star from 'assets/Star';

import {
  Store,
  StoreThumb,
  StoreContent,
  StoreInside,
  StoreTitle,
  StoreRating,
  StoreFollow
} from './styled';

const SearchStore = ({data}) => {
  return (
    <Store>
      <StoreThumb src={data.imgSrc}/>
      <StoreContent>
        <StoreInside>
          <StoreTitle dangerouslySetInnerHTML={{__html: data.title}}/>
          <StoreRating>
            {data.rating ? <span>{data.rating} Followers</span> : ''}
            <Star fill={data.rating >= 1 ? '#FFC131' : '#CCC'}/>
            <Star fill={data.rating >= 2 ? '#FFC131' : '#CCC'}/>
            <Star fill={data.rating >= 3 ? '#FFC131' : '#CCC'}/>
            <Star fill={data.rating >= 4 ? '#FFC131' : '#CCC'}/>
            <Star fill={data.rating >= 5 ? '#FFC131' : '#CCC'}/>
          </StoreRating>
        </StoreInside>
        <StoreFollow isFollowing={data.isFollowing}>
          {data.isFollowing ? null : <Plus/>}
          <span>{data.isFollowing ? 'Following' : 'Follow'}</span>
        </StoreFollow>
      </StoreContent>
    </Store>
  );
};

SearchStore.defaultProps = {
  data: {}
};

SearchStore.propTypes = {
  data: PropTypes.object
};

export default SearchStore;

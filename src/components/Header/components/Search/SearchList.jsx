import React from 'react';
import PropTypes from 'prop-types';

import Plus from 'assets/Plus';

import {
  List,
  ListThumb,
  ListThumbs,
  ListContent,
  ListTitle,
  ListCounters,
  ListDots,
  StoreFollow
} from './styled';

const SearchList = ({ data }) => {
  return (
    <List>
      <ListThumb src={data.imgSrc}/>
      <ListThumbs>
        <img src={data.imgSrc} alt=""/>
        <img src={data.imgSrc} alt=""/>
      </ListThumbs>
      <ListContent>
        <ListDots>
          <span/>
          <span/>
          <span/>
        </ListDots>
        <ListTitle>{data.title}</ListTitle>
        <ListCounters>
          {data.followers ? <span>{data.followers} Followers</span> : null}
          {data.orders ? <span>{data.orders} Orders</span> : null}
        </ListCounters>
        <StoreFollow
          isFollowing={data.isFollowing}
          style={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: 'auto'
          }}
        >
          {data.isFollowing ? null : <Plus/>}
          <span>{data.isFollowing ? 'Following' : 'Follow'}</span>
        </StoreFollow>
      </ListContent>
    </List>
  );
};

SearchList.defaultProps = {
  data: {}
};

SearchList.propTypes = {
  data: PropTypes.object
};

export default SearchList;

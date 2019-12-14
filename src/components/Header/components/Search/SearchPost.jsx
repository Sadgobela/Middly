import React from 'react';
import PropTypes from 'prop-types';

import ArrowAccept from 'assets/ArrowAccept';

import {
  Post,
  PostThumb,
  PostContent,
  PostInside,
  PostTitle,
  PostInfo,
  PostUsername,
  PostDivider,
  PostLikes,
  PostAccept
} from './styled';

const SearchPost = ({data, likes, followers, setSearchValue}) => {
  return (
    <Post>
      <PostThumb src={data.imgSrc}/>
      <PostContent>
        <PostInside>
          <PostTitle dangerouslySetInnerHTML={{__html: data.title}}/>
          <PostInfo>
            <PostUsername>@${data.username}</PostUsername>
            {
              likes === true && data.likes > 0
                ?
                  <>
                    <PostDivider/>
                    <PostLikes>${data.likes} likes</PostLikes>
                  </>
                : null
            }
            {
              followers === true && data.followers > 0
                ?
                  <>
                    <PostDivider/>
                    <PostLikes>${data.followers} followers</PostLikes>
                  </>
                : null
            }
          </PostInfo>
        </PostInside>
        <PostAccept onClick={() => setSearchValue(data.title)}>
          <ArrowAccept/>
        </PostAccept>
      </PostContent>
    </Post>
  );
};

SearchPost.defaultProps = {
  data: {},
  likes: false,
  followers: false,
  setSearchValue: () => {}
};

SearchPost.propTypes = {
  data: PropTypes.object,
  likes: PropTypes.bool,
  followers: PropTypes.bool,
  setSearchValue: PropTypes.func
};

export default SearchPost;

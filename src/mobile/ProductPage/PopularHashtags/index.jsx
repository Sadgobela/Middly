import React from 'react';
import { array } from 'prop-types';

import Title from '../Title';

import { Wrapper, Tags, Tag } from './styled';

const PopularHashtags = ({ tags }) => {
  return <Wrapper>
    <Title
      title="Popular Hashtags"
      style={{marginBottom: 14}}
    />

    {
      tags && tags.length
        ?
          <Tags>
            {tags.map((tag, key) => <Tag key={key}>#{tag}</Tag>)}
          </Tags>
        : ''
    }
  </Wrapper>
};

PopularHashtags.defaultProps = {
  tags: []
};

PopularHashtags.propTypes = {
  tags: array
};

export default PopularHashtags;
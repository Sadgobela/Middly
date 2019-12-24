import React from 'react';
import {object, string} from 'prop-types';

import { Wrapper, Text, SeeMore } from './styled';

const Title = ({ title, seeMore, style, seeMoreStyle, seeMoreCallback }) => {
  return <Wrapper style={style}>
    <Text>{title}</Text>
    {
      seeMore &&
      <SeeMore
        style={seeMoreStyle}
        onClick={seeMoreCallback && seeMoreCallback}
      >
        {seeMore}
      </SeeMore>
    }
  </Wrapper>
};

Title.defaultProps = {
  style: {},
  seeMoreStyle: {},
  title: null,
  seeMore: null
};

Title.propTypes = {
  style: object,
  seeMoreStyle: object,
  title: string,
  seeMore: string
};

export default Title;
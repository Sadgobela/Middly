import React from 'react';
import {object, string} from 'prop-types';

import { Wrapper, Text, SeeMore } from './styled';

const Title = ({ title, seeMore, style }) => {
  return <Wrapper style={style}>
    <Text>{title}</Text>
    {seeMore && <SeeMore>{seeMore}</SeeMore>}
  </Wrapper>
};

Title.defaultProps = {
  style: {},
  title: null,
  seeMore: null
};

Title.propTypes = {
  style: object,
  title: string,
  seeMore: string
};

export default Title;
import React from 'react';
import {string} from 'prop-types';

import Icon from 'components/Icon';

import { Wrapper } from './styled';

const BackLink = ({ url }) => {
  return <Wrapper to={url}>
    <Icon type="arrowBack"/>
  </Wrapper>
};

BackLink.defaultProps = {
  url: ''
};

BackLink.propTypes = {
  url: string
};

export default BackLink;
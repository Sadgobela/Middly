import React from 'react';
import { string, element } from 'prop-types';
import { ContentWrapper } from '../../../../globalStyles';
import { ContainerWrapper } from './styled';

const ContentWithBackround = ({ background, children }) => (
  <ContainerWrapper background={background}>
    <ContentWrapper>{children}</ContentWrapper>
  </ContainerWrapper>
);

ContentWithBackround.propTypes = {
  background: string.isRequired,
  children: element.isRequired,
};

export default ContentWithBackround;

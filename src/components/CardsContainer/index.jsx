import React from 'react';
import { number, string, any } from 'prop-types';
import { ContentWrapper, FlexContainer } from '../../globalStyles';
import { Header, Title, Wrapper } from './styled';

const CardsContainer = ({ paddingTop, title, children }) => (
  <Wrapper paddingTop={paddingTop}>
    <ContentWrapper>
      <Header>
        <Title>{title}</Title>
      </Header>

      <FlexContainer width="100%">{children}</FlexContainer>
    </ContentWrapper>
  </Wrapper>
);

CardsContainer.propTypes = {
  paddingTop: number,
  title: string.isRequired,
  children: any.isRequired
};

CardsContainer.defaultProps = {
  paddingTop: 60
};

export default CardsContainer;

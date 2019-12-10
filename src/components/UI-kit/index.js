import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px 60px;
`;

const KitHeading = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export default function UIkit() {
  return (
    <Container>
      <KitHeading>UI kit</KitHeading>
    </Container>
  );
}

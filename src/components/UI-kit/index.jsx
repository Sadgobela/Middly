import React from 'react';
import styled from 'styled-components';
import Icons from './Icons';
import Buttons from './Buttons';

const Container = styled.div`
  padding: 60px 60px;
  & button{
    margin-right: 30px;
  }
  & .icons{
    & svg{
    margin-right: 15px;
    }
  }
`;

const KitHeading = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const HorizontalDivider = styled.div`
  border-bottom: 1px solid #000;
  margin: 50px 0;
`;

export default function UIkit() {
  return (
    <Container>
      <KitHeading>UI kit</KitHeading>
      <HorizontalDivider />
      <h1>Buttons</h1>
      <Buttons/>
      <HorizontalDivider />
      <h1>Icons</h1>
      <div className='icons'>
        <Icons />
      </div>

      <HorizontalDivider />
    </Container>
  );
}

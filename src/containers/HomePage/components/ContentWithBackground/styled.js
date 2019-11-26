/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 60px 0 80px;
  background: ${({background}) => `url(${background})` || 'transparent'};
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 12px;
`;

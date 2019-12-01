import styled from 'styled-components';

import {bgSuperLightGray} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 28px 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: 8px solid ${bgSuperLightGray};
`;

// TODO: need switch 'a' to Link from 'react-router-dom'
export const CustomLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;

  &:not(:last-child) {
    margin-bottom: 23px;
  }
`;

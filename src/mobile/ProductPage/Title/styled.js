import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000000;
  letter-spacing: 0.6px;
  margin: 0 0 16px;
`;

export const Text = styled.span``;

export const SeeMore = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${primaryColor};
  margin-left: auto;
  cursor: pointer;
  letter-spacing: 0.3px;
`;

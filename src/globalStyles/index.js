/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button } from 'antd';
import {
  primaryColor,
  grayTextColor,
  grayBackroundColor,
  transparentTextColor
} from '../constants/colors';

export const FlexContainer = styled.div`
  display: flex;
  width: ${({ width }) => width || 'auto'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
`;

export const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
`;

export const FollowButton = styled(Button)`
  background: transparent !important;
  padding: 4px 16px !important;
  color: ${primaryColor}!important;
  font-size: 14px !important;
  border: 1px solid ${primaryColor}!important;
  border-radius: 24px !important;
  height: 30px !important;
  width: 110px !important;
  color: ${({ isFollowing }) =>
    isFollowing ? grayTextColor : primaryColor}!important;
  border-color: ${({ isFollowing }) =>
    isFollowing ? grayBackroundColor : primaryColor}!important;
`;

export const FollowersCount = styled.div`
  font-size: 12px;
  color: ${transparentTextColor};
`;

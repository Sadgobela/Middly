/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {Button} from 'antd';
import {primaryColor, grayTextColor, grayBackroundColor, transparentTextColor} from '../constants/colors';

export const FlexContainer = styled.div`
  display: flex;
  width: ${({width}) => width || 'auto'};
  justify-content: ${({justifyContent}) => justifyContent || 'space-between'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  flex-wrap: ${({flexWrap}) => flexWrap || 'nowrap'};
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: ${({marginTop}) => marginTop || 0}px;
  width: 100%;
  max-width: 1170px;
`;

export const FollowButton = styled(Button)`
  background: transparent !important;
  padding: 4px 16px !important;
  color: ${primaryColor}!important;
  font-size: 14px !important;
  border: 1px solid ${primaryColor}!important;
  border-radius: 24px !important;
  height: 30px !important;
  width: 104px !important;
  color: ${(props) => (props.isFollowing === true ? grayTextColor : primaryColor)}!important;
  border-color: ${(props) => (props.isFollowing === true ? grayBackroundColor : primaryColor)}!important;
`;

export const FollowersCount = styled.div`
  font-size: 12px;
  color: ${transparentTextColor};
`;

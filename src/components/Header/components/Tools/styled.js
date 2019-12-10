import styled from 'styled-components';

import {bgSuperLightGray, primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 17px 20px;
  background: ${bgSuperLightGray};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Rewards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-right: ${({me}) => (me ? '18px' : '27px')};
`;

export const RewardsLabel = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  padding-left: ${({me}) => (me ? '7px' : '15px')};
`;

export const Pin = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
  height: 40px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 4px 6px 0 0;

  &:last-child {
    margin-right: 0;
  }
`;

export const PinCount = styled.span`
  position: absolute;
  background: ${primaryColor};
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 1px 4.66px;
  top: 6px;
  right: -1px;
`;

export const Divider = styled.span`
  height: 40px;
  width: 1px;
  background: #efefef;
  margin: 0 auto;
`;

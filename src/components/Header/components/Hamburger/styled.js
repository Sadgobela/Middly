import styled from 'styled-components';

import {textGray, bgSuperLightGray} from 'constants/colors';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  pointer-events: none;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  opacity: ${({active}) => (active ? 1 : 0)};
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  background: #fff;
`;

export const WrapperInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 40px;
  bottom: 0;
  z-index: 1100;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.3s ease;
  transform: ${({active}) => (active ? 'translateX(0)' : 'translateX(-100%)')};
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
`;

export const ShopContainer = styled.div`
  padding: 27px 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 8px solid ${bgSuperLightGray};

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    padding-left: 18px;
  }
`;

export const LogoutContainer = styled.div`
  padding: 27px 16px;
`;

export const LogoutLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding-left: 18px;
  }
`;

export const Settings = styled.div`
  padding: 27px 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: 8px solid ${bgSuperLightGray};

  p {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 23px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      color: ${textGray};
      font-size: 16px;
      padding-left: 11px;
    }
  }
`;

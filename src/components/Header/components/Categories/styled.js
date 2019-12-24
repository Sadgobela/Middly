import styled from 'styled-components';

import {textGray, bgSuperLightGray} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 26px 16px 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: 8px solid ${bgSuperLightGray};
`;

export const WrapperSubCategory = styled.div`
  padding: 26px 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.15s linear;
  z-index: 1101;
  background: #fff;
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
  transform: ${({active}) => (active ? 'translate(0, 0)' : 'translate(100%, 0)')};
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0 16px 16px;
  border-bottom: 1px solid #efefef;
`;

export const Back = styled.span`
  position: relative;
  transform: translate(0, -50%) rotate(180deg);
  margin: auto 16px auto 0;
  top: 9px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: ${textGray};
  margin: 0 0 9px;
`;

export const TitleSubCategory = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: ${textGray};
  margin: 0;
`;

// TODO: need switch 'a' to Link from 'react-router-dom'
export const CustomLink = styled.a`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({color}) => (color ? color : 'black')};
  padding: 10px 0;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    max-height: 12px;
    max-width: 9px;
  }
`;

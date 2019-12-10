import styled from 'styled-components';

import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 40px 16px;
  background: #fafafa;
`;

export const Item = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 30px 20px 20px 20px;
  min-height: 205px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: calc(100% - 4px) center;
  ${({background}) => (background ? `background-image: url(${background});` : '')}

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 12px;
  max-width: 50%;
`;

export const Price = styled.span`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 1.24;
  display: flex;
  align-items: center;
  letter-spacing: 0.7px;
  color: ${primaryColor};

  > small {
    font-size: 8px;
    position: relative;
    top: 3px;
    letter-spacing: -0.1px;
  }
`;

export const OldPrice = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.24;
  display: flex;
  align-items: center;
  letter-spacing: 0.019em;
  color: #999;
  margin-left: 8px;

  > small {
    font-size: 6px;
    position: relative;
    top: 3px;
  }
`;

export const ShopLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 17.2941px;
  line-height: 1.4;
  color: #000000;

  svg {
    margin-left: 17px;
  }
`;

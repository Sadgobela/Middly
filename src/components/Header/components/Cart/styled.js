import styled from 'styled-components';

import {primaryColor, textGray} from 'constants/colors';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 0;
`;

export const Items = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  margin-left: auto;
`;

export const Content = styled.div`
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  border-top: 1px solid #efefef;
  padding: 16px;
`;

export const Item = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const ItemThumb = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 2px;
`;

export const ItemContent = styled.div`
  width: calc(100% - 72px);
  padding-left: 16px;
`;

export const ItemTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 6px;
`;

export const ItemPrice = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 6px;
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ItemQuantityLabel = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  padding-right: 16px;
  color: ${textGray};
`;

export const ItemQuantityField = styled.input`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #666666;
  border: 0;
  width: 29px;
  height: 21px;
`;

export const ItemQuantityPlus = styled.span`
  width: 24px;
  height: 21px;
  background: #efefef;
  border-radius: 2px;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  color: #000;
`;

export const ItemQuantityMinus = styled.span`
  width: 24px;
  height: 21px;
  background: #efefef;
  border-radius: 2px;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  color: #000;
`;

export const FreeShipping = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${textGray};
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const Subtotal = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${textGray};
  margin-bottom: 24px;

  span {
    position: relative;
    top: 2px;
  }
`;

export const SubtotalPrice = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  padding-left: 10px;
  top: 0 !important;
`;

export const Checkout = styled.a`
  display: block;
  background: ${primaryColor};
  border-radius: 24px;
  width: 100%;
  height: 36px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
`;

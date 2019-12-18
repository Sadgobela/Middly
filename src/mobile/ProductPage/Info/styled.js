import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 0 16px 34px;
  border-bottom: 1px solid #e4e4e4;
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  margin: 0 0 4px 0;
  position: relative;
  top: 1px;
`;

export const SubName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin: 0 0 9px;
  letter-spacing: 0.4px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  i {
    margin-right: 2px;
  }
`;

export const Reviews = styled.span`
  display: inline-flex;
  padding-left: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1;
  color: #7a7a7a;
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0 0 0;
`;

export const Price = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: ${primaryColor};
  letter-spacing: -2.9px;
`;

export const OldPrice = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-decoration-line: line-through;
  color: #999999;
  margin-left: 10px;
  line-height: 1;
  position: relative;
  top: 4px;
  letter-spacing: -0.4px;
`;

export const Sale = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  color: ${primaryColor};
  margin-left: 13px;
`;

export const Coins = styled.span`
  margin-left: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1;
  text-align: right;
  color: #398287;
  position: relative;
  top: 4px;
  letter-spacing: -0.2px;

  span {
    font-size: 14px;
  }

  svg {
    stroke: #398287;
  }
`;

export const Delivery = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #000000;
  display: flex;
  align-items: center;
  margin: 22px 0 0;

  span {
    font-size: 12px;
  }
`;

export const DeliveryLabel = styled.div`
  margin-right: 4px;
`;

export const DeliveryDate = styled.strong`
  color: #2a6924;
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: #e4e4e4;
  margin: 0 8px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 40px -5px 0;
`;

export const Button = styled.button`
  margin: 0 5px;
  background: #fff;
  border: 1px solid ${primaryColor};
  border-radius: 24px;
  height: 40px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  padding: 0;
  outline: none;
  text-align: center;
  color: ${primaryColor};

  ${({type}) => {
    if (type === 'primary') {
      return `
        background: ${primaryColor};
        color: #fff;
      `;
    }
  }}
`;

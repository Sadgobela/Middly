import styled from 'styled-components';
import {Select} from 'antd';

export const Description = styled.div`
  width: 394px;
  background: #fff;
`;

export const Wrap = styled.div`
  padding: 24px 25px 21px;
`;

export const Title = styled.span`
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height: 124%;
  color: #000;
  padding-bottom: 12px;
  padding-right: 15px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const LikesNumber = styled.div`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #7a7a7a;
  margin-left: 4px;
`;

export const Deliver = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 32px;
  border-top: 1px solid #e4e4e4;
  padding-top: 16px;
`;

export const DeliverDescription = styled.div`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #000000;
  margin-right: 3px;
`;

export const DeliverCity = styled.div`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 132%;
  color: #4a90e2;
`;

export const VerticalDivider = styled.i`
  width: 1px;
  height: 16px;
  background: #e4e4e4;
  margin: 0 12px;
`;

export const DeliverCost = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 132%;
  text-transform: uppercase;
  color: #000000;
  margin-right: 3px;
`;

export const DeliverDate = styled.div`
  font-family: SF Pro Display, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 132%;
  color: #208c4e;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 25px;
`;

export const PriceDescription = styled.div`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #a7a7a7;
  margin-right: 5px;
  ${({red}) =>
    red
      ? `
		font-weight: 600;
		font-size: 18px;
		line-height: 124%;
		letter-spacing: 0.019em;
		color: #ED494F;
		`
      : null};
  ${({discount}) =>
    discount
      ? `
		font-weight: 700;
		font-size: 14px;
		line-height: 140%;
		color: #ED494F;
		`
      : null};
`;

export const Coins = styled.div`
  display: flex;
  align-items: center;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #398287;
  margin-left: 14px;
`;

export const CoinsNumber = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #398287;
`;

export const HorizontalDivider = styled.i`
  display: block;
  width: 100%;
  height: 1px;
  background: #e4e4e4;
`;

export const Detailes = styled.div`
  margin-top: 20px;
`;

export const Feature = styled.div`
  width: 308px;
  margin-bottom: 24px;
`;

export const FeatureName = styled.div`
  display: block;
  width: 58px;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: ${({dark}) => (dark ? '#464646' : '#7A7A7A')};
  color: ${({red}) => (red ? '#ED484F' : '#7A7A7A')};
  margin: ${({brand}) => (brand ? '0' : '5px 12px 8px 0')};
`;

export const SizeGuideLink = styled.button`
  display: block;
  width: 79px;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #4a90e2;
  background: transparent;
  border: none;
  margin-right: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  outline: none;
`;

export const Text = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #464646;
  margin: 0 0 0 8px;
`;

export const Count = styled.span`
  margin: 0 11px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 308px;
  margin: 0 0 24px;
  padding: 8px 0 0 0;
`;

export const BuyButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  font-family: Helvetica Neue, sans-serif;
  cursor: pointer;
  background: #ed484f;
  border-radius: 24px;
  color: #fff;
`;

export const Return = styled.div`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-size: 12px;
  line-height: 132%;
  color: #ed484f;
  text-decoration: none;
  margin-top: 2px;
`;

export const Payment = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PaymentCash = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
  font-size: 9px;
  line-height: 140%;
  color: #000000;
`;

export const Bottom = styled.div`
  display: flex;
  margin: 18px 27px 0 25px;
  padding-bottom: 25px;
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  line-height: 132%;
  color: #464646;
  margin-right: 36px;
  & svg {
    margin-right: 8px;
  }
`;

export const Color = styled(Select)`
  &&& {
    & .ant-select-selection--single {
      width: 308px;
      height: 40px;
    }

    & .ant-select-selection-selected-value {
    }

    & .ant-select-selection__rendered {
      height: 100%;
      line-height: 40px;
      margin: 0 16px;
    }

    & .ant-select-selection-selected-value {
      display: flex !important;
      align-items: center;
      font-family: Helvetica Neue, sans-serif;
      font-size: 14px;
      color: #545454;

      &::before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #db95d1;
        margin: 0 8px 0 0;
      }
    }
  }
`;

export const Option = styled(Select.Option)`
  &&& {
    display: flex !important;
    align-items: center;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 144px;
    line-height: 140%;
    color: #545454;

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #db95d1;
      margin: 0 8px 0 0;
    }
  }
`;

export const ReturnTitle = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #464646;
`;

export const Size = styled(Color)`
  & .ant-select-selection-selected-value {
    &::before {
      content: none !important;
    }
  }
`;

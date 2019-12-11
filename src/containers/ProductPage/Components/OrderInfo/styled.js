import styled from 'styled-components';

export const Description = styled.div`
  width: 394px;
  background: #fff;
  padding: 24px 25px 21px;
`;

export const Title = styled.span`
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height: 124%;
  color: #000000;
  padding-bottom: 12px;
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
  color: #000000;
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
  margin: 20px 0 29px;
`;

export const Feature = styled.div`
  display: flex;
  align-items: ${({alignTop}) => (alignTop ? 'flex-start' : 'flex-end')};
  margin-bottom: 24px;
`;

export const FeatureName = styled.div`
  display: block;
  width: 79px;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: ${({dark}) => (dark ? '#464646' : '#7A7A7A')};
  color: ${({red}) => (red ? '#ED484F' : '#7A7A7A')};
  margin-right: 16px;
`;

export const Text = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #464646;
`;

export const Size = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 21px;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 2px;
  background: transparent;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #464646;
  margin-right: 8px;
  cursor: pointer;
  border: ${({active}) => (active ? '1px solid #000000' : 'none')};
`;

export const ColorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29px;
  height: 21px;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 3px;
  margin-right: 8px;
  cursor: pointer;
`;

export const Color = styled.div`
  width: 23px;
  height: 15px;
  border: none;
  background: ${({color}) => (color ? `${color}` : 'none')};
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;

export const CounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 21px;
  cursor: pointer;
  background: #efefef;
  border-radius: 2px;
  border: none;
  outline: none;
`;

export const Count = styled.span`
  margin: 0 11px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
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
  margin: 18px 0 0 26px;
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

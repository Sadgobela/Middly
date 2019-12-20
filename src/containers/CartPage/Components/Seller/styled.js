import styled from 'styled-components';

export const Container = styled.div`
  width: 680px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  margin: 0 0 40px 0;
`;

export const Header = styled.div`
  border-bottom: 1px solid #e4e4e4;
`;

export const Logo = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 12px 0 0;
`;

export const Name = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  border-radius: 3px;
`;

export const Rating = styled.span``;

export const Counter = styled.span`
  font-family: SF Pro Display, sans-serif;
  font-size: 12px;
  line-height: 132%;
  color: #7a7a7a;
  margin: 0 0 0 8px;
`;

export const Status = styled(Counter)`
  font-weight: 700;
  margin: 0 8px 0 0;
`;

export const Buy = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 159px;
  height: 28px;
  border: 1px solid #c3c3c3;
  border-radius: 24px;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  background: transparent;
  line-height: 140%;
  color: #545454;
`;

export const Footer = styled.div`
  padding: 16px 24px 24px 24px;
  border-top: 1px solid #e4e4e4;
`;

export const Total = styled.div``;

export const TotalItem = styled.span`
  display: block;
  text-align: right;
  font-family: Helvetica Neue, sans-serif;
  font-weight: ${({bold}) => (bold ? '700' : '400')};
  font-size: ${({min}) => (min ? '12px' : '14px')};
  margin: ${({bold}) => (bold ? '12px 0 0 0' : '0 0 8px 0')};
  line-height: 140%;
  color: ${({green}) => (green ? '#398287' : '#000')};
`;

export const Coins = styled.div``;

export const AvailableCount = styled.span`
  display: block;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #545454;
  margin: 0;
`;

export const AvailableDate = styled(AvailableCount)`
  color: #26a95e;
  margin-top: 6px;
`;

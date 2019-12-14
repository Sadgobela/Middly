import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 0 0;
`;

export const List = styled.div``;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;
`;

export const Title = styled.span``;

export const Rating = styled.div`
  position: relative;
  width: 200px;
  height: 16px;
  background: #e4e4e4;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 20px 0 16px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({color}) => color};
    transform: translateX(calc(-100% + ${({count}) => `${count}%`}));
  }
`;

export const Percents = styled(Title)``;

export const Total = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 0 0 52px;
`;

export const Stars = styled.div`
  margin: 0 0 20px 16px;
`;

export const TotalTitle = styled.span`
  font-family: SF Pro Display, sans-serif;
  font-weight: 500;
  font-size: 70px;
  line-height: 140%;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #000;
`;

export const MaxResult = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.016em;
  color: #656565;
  margin: 0 0 20px 0;
`;

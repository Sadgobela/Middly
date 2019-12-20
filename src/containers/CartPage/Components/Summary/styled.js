import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  margin: 0 0 0 40px;
  padding: 24px 16px 28px 16px;
`;

export const Heading = styled.span`
  display: block;
  font-family: Helvetica Neue, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  margin: 0 0 20px 0;
`;

export const Title = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #000;
`;

export const Total = styled.div`
  margin: 16px 0 0 0;
  padding: 21px 0 0 0;
  border-top: 1px solid #e4e4e4;
`;

export const Count = styled(Title)`
  display: inline-flex;
  align-items: flex-end;
  font-size: ${({small}) => (small ? '10px' : '14px')};
  margin-left: ${({small}) => (small ? '0' : '4px')};
  line-height: ${({small}) => (small ? '172%' : '140%')};
  ${(props) => {
    if (props.red) return 'color: #ED494F';
    if (props.green) return 'color: #398287';
    return null;
  }};
  text-transform: uppercase;
`;

export const CoinsCounter = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: SF Pro Display, sans-serif;
  font-size: 12px;
  color: #398287;
  & svg {
    margin-left: 4px;
  }
`;

export const Confirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 268px;
  height: 46px;
  text-align: center;
  font-family: Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 132%;
  letter-spacing: -0.024em;
  color: #ffffff;
  background: #ed484f;
  border: none;
  border-radius: 4px;
  margin: 29px 0 12px 0;
  cursor: pointer;
`;

export const Notice = styled.span`
  display: flex;
  justify-content: center;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: ${({green}) => (green ? '#26A95E' : '#000')};
  font-weight: ${({bold}) => (bold ? '700' : '400')};
  margin: ${({bold}) => (bold ? '0 0 0 4px' : '0')};
`;

export const Accept = styled.div`
  display: block;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 8px;
  font-family: SF Pro Display, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #000;
  margin: 32px 0 12px 0;
`;

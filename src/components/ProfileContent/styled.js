import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 0 0 0 16px;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: ${({height}) => (height ? `${height}` : 'auto')};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e4e4e4;
  padding: 19px 0 19px 44px;
`;

export const Heading = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  line-height: 140%;
  color: #000;
`;

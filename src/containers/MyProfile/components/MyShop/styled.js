import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 32px 16px 44px;

  & svg path {
    fill: #999;
  }
`;

export const About = styled.div`
  margin-right: auto;
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin: 0 12px 0 0;
`;

export const Name = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ed484f;
  margin: 0 0 4px 0;
`;

export const Title = styled.span`
  display: block;
  font-family: Helvetica Neue, sans-serif;
  font-size: 12px;
  line-height: 140%;
  color: #464646;
`;

export const Date = styled(Title)`
  margin: 12px 0 0 0;
`;

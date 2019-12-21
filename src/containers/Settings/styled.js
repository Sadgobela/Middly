import styled from 'styled-components';

export const Aside = styled.div`
  width: 300px;
`;

export const BackTo = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  color: #000;

  & svg {
    width: 6px;
    transform: rotate(180deg);
    margin-right: 16px;
  }
`;

export const MenuBar = styled.div`
  height: 787px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 21px;
`;

export const Heading = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 132%;
  letter-spacing: -0.024em;
  color: #000000;
  padding: 17px 44px 0;
`;

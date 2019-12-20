import styled from 'styled-components';

export const Continue = styled.a`
  display: flex;
  align-items: center;
  max-width: 1020px;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #000;
  margin: 34px auto 0 auto;
  padding: 0;

  & svg {
    width: 8px;
    height: 12px;
    margin-right: 16px;
    transform: rotate(180deg);
  }
`;

export const CartWrapper = styled.div`
  width: 1050px;
  margin: 24px auto 36px auto;

  & .slick-list {
    padding: 12px 0;
  }
`;

import styled from 'styled-components';

const Parent = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  font-family: Helvetica Neue, sans-serif;
  cursor: pointer;
`;

export const AddToCart = styled(Parent)`
  width: 160px;
  height: 36px;
  border: 1px solid #ed484f;
  color: #ed484f;
  border-radius: 24px;
`;

export const Buy = styled(AddToCart)`
  background: #ed484f;
  border-radius: 24px;
  color: #fff;
`;

export const SeeMore = styled(Parent)`
  position: relative;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 3px solid #ed484f;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #000000;
  margin: ${({withText}) => (withText ? '0 0 24px 0' : '0')};
  &::before {
    content: ${({withText}) => (withText ? `'See more'` : null)};
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

export const Follow = styled(Parent)`
  width: 99px;
  height: 29px;
  font-size: 14px;
  line-height: 140%;
  color: #ed484f;
  border: 1px solid #ed484f;
  border-radius: 24px;

  & svg {
    margin-right: 8px;
  }
`;

export const Following = styled(Follow)`
  color: #545454;
  border: 1px solid #c3c3c3;
`;

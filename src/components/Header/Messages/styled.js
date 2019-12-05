import styled from 'styled-components';

export const Badge = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 24px;
  height: 24px;
  justify-content: center;
  background: transparent;
  padding: 0;
  border: none;
  outline: none;
  &::before {
    content: '1';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    top: -4px;
    right: -4px;
    width: 16px;
    height: 16px;
    background: #ed494f;
    border-radius: 50%;
  }
`;

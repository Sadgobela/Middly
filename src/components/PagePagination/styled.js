import styled from 'styled-components';

export const Controls = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #333333;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & svg {
    ${({prev}) => (prev ? 'transform: rotate(180deg)' : null)};
  }

  & svg path {
    fill: #333;
  }
`;

export const Counter = styled(Controls)`
  width: 36px;
  height: 36px;
  margin: 0 10px;
  background: ${({active}) => (active ? '#8F8F8F' : 'transparent')};
  border-radius: 4px;
  color: ${({active}) => (active ? '#fff' : '#666')};
`;

export const Dots = styled.span``;

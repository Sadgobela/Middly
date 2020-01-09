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

export const ControlButton = styled.button`
  border: 1px solid #E4E4E4;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 20px 8px 20px;
  justify-content: space-between;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  background: #fff;
  outline: none;

  &:hover {
    color: #000;
    border-color: #000;
    svg path {
        fill: #000;
    }
  }
  & svg {
    ${({prev}) => (prev ? 'transform: rotate(180deg); margin-right: 5px;' : 'margin-left: 5px;')};
  }

  & svg path {
    fill: #E4E4E4;
    width: 12px;
    height: 12px;
  }
`;

export const PageCount = styled.div`
  margin: 0 13px;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #666666;
`;
export const Dots = styled.span``;

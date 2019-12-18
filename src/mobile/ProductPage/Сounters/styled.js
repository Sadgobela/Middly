import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #e4e4e4;
  justify-content: space-between;
`;

export const Counter = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    fill: #666666;
  }
`;

export const CounterLabel = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #666666;
  padding-left: 8px;
`;

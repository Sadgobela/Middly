import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 16px;
`;

export const Row = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Label = styled.div`
  min-width: 32%;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const Value = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

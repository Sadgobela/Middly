import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 16px 20px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4.5px;
  width: calc(100% + 9px);
`;

export const Tag = styled.div`
  margin: 0 4.5px 4.5px;
  border: 1px solid #666666;
  border-radius: 4px;
  min-width: 92px;
  height: 32px;
  line-height: 28px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: #666666;
`;

import styled from 'styled-components';
import {Select} from 'antd';

export const Container = styled.div`
  margin: 24px 0 0 0;
`;

export const Title = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  line-height: 132%;
  letter-spacing: -0.024em;
  color: #000;
  margin: 0 26px 0 0;
  padding: 0;
`;

export const Filter = styled(Select)`
  &&& {
    margin: 0 24px 0 0;
    &:last-child {
      margin-right: 0;
    }

    & .ant-select-selection--single {
      width: 206px;
      height: 44px;
    }

    & .ant-select-selection__rendered {
      line-height: 44px;
      font-family: Helvetica Neue, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: -0.016em;
      color: #000;
    }
  }
`;

export const FilterOption = styled(Select.Option)``;

export const SelectedFilter = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 22px 0 0;
  padding: 6px 18px 6px 12px;
  background: #e4e4e4;
  border-radius: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Clear = styled.button`
  font-family: Helvetica Neue, sans-serif;
  width: 131px;
  font-size: 14px;
  line-height: 140%;
  color: #ed494f;
  text-align: left;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

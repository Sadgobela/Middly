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

export const SelectedFilter = styled.button``;

export const SelectedList = styled.div``;

export const Clear = styled.button``;

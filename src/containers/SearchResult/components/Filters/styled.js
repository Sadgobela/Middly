import styled from 'styled-components';
import {Select} from 'antd';

export const Title = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 22px;
  line-height: 132%;
  letter-spacing: 0.016em;
  color: #000;
  padding: 0;
`;

export const Filter = styled(Select)`
  &&& {
    margin: 0 24px 0 0;
    flex: 1;
    &:last-child {
      margin-right: 0;
    }

    & .ant-select-selection {
      flex: 1 !important;
      width: unset !important;
      height: unset !important;
      border: none;
      border-bottom: 1px solid #c3c3c3;
    }

    & .ant-select-enabled {
      flex: 1;
    }

    & .ant-select-open .ant-select-selection {
      border-bottom: 1px solid #c3c3c3;
      box-shadow: none;
    }
    & .ant-select-focused .ant-select-selection,
    .ant-select-selection:focus,
    .ant-select-selection:active {
      border-bottom: 1px solid #c3c3c3;
      box-shadow: none;
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
  font-size: 12px;
  line-height: 132%;
  color: #464646;
`;

export const Clear = styled.button`
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #ed494f;
  text-align: right;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const AppliedFilters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const PostSearchFilters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`;

export const GetPostFilters = styled.div`
  display: flex;
  width: 100%;
`;

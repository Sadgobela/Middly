import styled from 'styled-components';
import {Select} from 'antd';

export const StyledOption = styled(Select.Option)`
  &&& {
    display: flex !important;
    align-items: center;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 144px;
    line-height: 140%;
    color: #545454;

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #db95d1;
      margin: 0 8px 0 0;
    }
  }
`;

export const StyledSelect = styled(Select)`
  &&& {
    margin: 0 24px 0 0;
    flex: 1;
    &:last-child {
      margin-right: 0;
    }
    & .ant-select-selection {
      flex: 1 !important;
      width: unset !important;
      height: 34px !important;
      box-shadow: none !important;
      border: none;
      border-bottom: 1px solid #C3C3C3;
      border-radius: 0;
    }
    & .ant-select-selection--single {
      height: 38px;
    }

    & .ant-select-selection--multiple {
      height: 38px;
    }
    
    & .ant-select-selection__rendered {
      height: 100%;
      line-height: 40px;
      margin: 0 4px;
      ul {
        display: flex;
        overflow: hidden;
        li {
          user-select: none;
          margin: 0;
          display: flex;
          align-items: center;
          height: 33px;
          min-width: 100%;
          background: white;
          text-overflow: unset;
          border: none;
          &.ant-select-selection__choice.ant-select-selection__choice__disabled {
            &:after {
              content: "\\A";
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #ED494F;
              display: inline-block;
              position: absolute;
              right: 25px;
              top: 40%;
            }
          }
        }
      }

    & .ant-select-arrow {
      top: 18px !important;
    }
    
    & .ant-select-dropdown-menu-item {
      margin-bottom: 3px;
    }
    & .ant-select-selection-selected-value {
      display: flex !important;
      align-items: center;
      font-family: Helvetica Neue, sans-serif;
      font-size: 14px;
      color: #545454;

      &::before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #db95d1;
        margin: 0 8px 0 0;
      }
    }
  }
`;

export const SelectTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 132%;
`;

export const ClearAll = styled.div`
  font-size: 10px;
  line-height: 140%;
  color: #ed494f;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #c3c3c3;
  box-sizing: border-box;
  border-radius: 0;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const Menu = styled.div`
  width: 100%;
  ul {
    width: 100%;
    max-height: 230px;

    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  li {
    font-size: 14px;
    line-height: 140%;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-bottom: 3px;
    &.ant-select-dropdown-menu-item-selected {
      color: #545454;
      background: #e5f1ff;
      border-radius: 2px;
    }
    &.ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
      background: ##ed484f36;
      color: #000000;
      border-radius: 5px;
    }
    &.ant-select-dropdown-menu-item-active,
    &.ant-select-dropdown-menu-item-selected {
      i {
        color: #545454 !important;
      }
    }
  }
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid #c3c3c3;
  width: 100%;
  font-size: 12px;
  line-height: 132%;
  color: #bfbfbf;
  padding-bottom: 5px;
  margin-bottom: 10px;
  padding-left: 2px;
`;

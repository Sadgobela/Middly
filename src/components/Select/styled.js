import styled from 'styled-components';
import {Select} from 'antd';

export const StyledOption = styled(Select.Option)`
  pointer-events: none;
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
      height: unset !important;
      box-shadow: none !important;
      border: none;
      border-bottom: 1px solid #C3C3C3;
    }

    & .ant-select-enabled {
      flex: 1;
    }
    
    & .ant-select-open .ant-select-selection {
      border-bottom: 1px solid #C3C3C3;
      box-shadow: none;
    }
    & .ant-select-focused .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active {
      border-bottom: 1px solid #C3C3C3;
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
    & .ant-select-selection__placeholder, .ant-select-search__field__placeholder {
      color: #000;
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
  color: #ED494F;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding-bottom: 10px;
  width: 100%;
`;

export const Menu = styled.div`
  width: 100%;
  ul {
    width: 100%
  }
  li {
    &.ant-select-dropdown-menu-item-selected {
      background: ##ed484f36;
      color: #000000;
      border-radius: 5px;
    }
    &.ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
      background: ##ed484f36;
      color: #000000;
      border-radius: 5px;
    }
    &.ant-select-dropdown-menu-item-active, &.ant-select-dropdown-menu-item-selected {
      i {
        color: #000000 !important;
      }
    } 
  }
`;
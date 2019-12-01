import styled from 'styled-components';
import {Input, Select, Button} from 'antd';
import {primaryColor, headerSelectColor, headerSearchColor, mainBlackColor} from '../../../../constants/colors';

export const SearchContainer = styled.div`
  margin-left: 38px;
  display: flex;

  .ant-input {
    max-width: 100%;
    background: ${headerSearchColor}!important;
    opacity: 0.32;
    border-radius: 4px 0 0 4px !important;
    font-size: 14px !important;
    color: ${mainBlackColor};
    
    &:placeholders {
      color: ${mainBlackColor};
    }
  }

  .ant-select-selection-selected-value {
    letter-spacing: -0.4px;
  }

  .ant-select-selection__rendered {
    margin-left: 16px;
  }
  
  .certain-category-search-wrapper {
    display: flex;
    width: 350px;
  }
`;


export const AutoCompleteStyles = styled(Input)`
  width: 274px !important;
  height: 40px !important;
  background: ${headerSearchColor}!important;
  border: none !important;
  border-radius: 4px 0 0 4px !important;
  &:focus {
    box-shadow: none !important;
  }
`;

export const StyledSelect = styled(Select)`
  .ant-select-selection--single {
    width: 100px !important;
    height: 40px !important;
    border: none !important;
    background: ${headerSelectColor};
    border-radius: 0 !important;
    color: ${mainBlackColor}!important;
    .ant-select-selection__rendered {
      height: 100% !important;
      line-height: 40px !important;
    }
  }
`;

export const SearchButton = styled(Button)`
  min-width: 40px !important;
  height: 40px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
  border: 0 !important;
  background: ${primaryColor}!important;
  border-radius: 0 4px 4px 0 !important;
`;

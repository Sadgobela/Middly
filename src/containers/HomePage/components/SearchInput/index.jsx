import React from 'react';
import { Select } from 'antd';
import { FlexContainer } from '../../../../globalStyles';
import SearchIcon from '../../../../assets/SearchIcon';
import { SearchButton, StyledSelect, StyledInput } from './styled';

const { Option } = Select;

const SearchInput = () => (
  <FlexContainer justifyContent="center">
    <StyledInput />
    <StyledSelect value="Brands">
      <Option value="Brands">Brands</Option>
    </StyledSelect>
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  </FlexContainer>
);

export default SearchInput;

import React from 'react';
import { Select } from 'antd';

import SearchIcon from 'assets/SearchIcon';

import { SearchButton, StyledSelect, StyledInput, SearchContainer } from './styled';

const { Option } = Select;

const SearchInput = () => (
  <SearchContainer>
    <StyledInput />
    <StyledSelect value="Brands">
      <Option value="Brands">Brands</Option>
    </StyledSelect>
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  </SearchContainer>
);

export default SearchInput;

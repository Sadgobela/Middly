import React from 'react';
import {StyledSelect, StyledOption, ClearAll, SelectTitle, Header, Menu, SearchInput} from './styled';
import Grid from '../Grid';

const CustomSelect = (props) => {
  const {options, isCheckbox} = props;

  const handleChange = (value) => {
    props.onChange(props.field, value);
  };

  console.log(props.selectedOptions);
  return (
    <StyledSelect
      {...props}
      onChange={handleChange}
      value={props.selectedOptions}
      maxTagCount={0}
      showArrow
      showSearch={false}
      dropdownRender={(menu) => {
        return (
          <Grid
            column
            width={'222px'}
            maxh="330"
            padding={'13px 13px 18px 8px'}
            bg="#fff"
            bsh="0px 4px 15px rgba(0, 0, 0, 0.1)"
            br="4px"
          >
            <Header>
              <SelectTitle>{props.label}</SelectTitle>
              <ClearAll onClick={() => {}}>Clear All</ClearAll>
            </Header>
            <SearchInput placeholder="Search" onMouseDown={(e) => e.preventDefault()} />
            <Menu>{menu}</Menu>
          </Grid>
        );
      }}
    >
      {options.map((option) => {
        return (
          <StyledOption key="index" value={option.value}>
            {option.label}
          </StyledOption>
        );
      })}
    </StyledSelect>
  );
};

export default CustomSelect;

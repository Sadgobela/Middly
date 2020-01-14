import React from 'react';
import PropTypes from 'prop-types';
import {StyledSelect, StyledOption, ClearAll, SelectTitle, Header, Menu, SearchInput} from './styled';
import Grid from '../Grid';

const CustomSelect = (props) => {
  const {options, selectedOptions, label, onChange} = props;

  return (
    <StyledSelect
      {...props}
      placeholder={label}
      onChange={onChange}
      value={selectedOptions}
      showArrow
      showSearch={false}
      dropdownRender={(menu) => {
        return (
          <Grid
            column
            width="100%"
            maxh="330"
            padding="13px 13px 18px 8px"
            bg="#fff"
            // bsh="0px 4px 15px rgba(0, 0, 0, 0.1)"
            // br="4px"
          >
            <Header>
              <SelectTitle>{label}</SelectTitle>
              <ClearAll onClick={() => {}}>Clear All</ClearAll>
            </Header>
            <SearchInput placeholder="Search" onMouseDown={(e) => e.preventDefault()} />
            <Menu>{menu}</Menu>
          </Grid>
        );
      }}
    >
      {options.map((option, index) => {
        return (
          <StyledOption key={index} value={option.value}>
            {option.label}
          </StyledOption>
        );
      })}
    </StyledSelect>
  );
};

CustomSelect.defaultProps = {
  options: {value: '', label: ''},
  selectedOptions: '',
  label: '',
  onChange: (f) => f
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selectedOptions: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default CustomSelect;

import React from 'react';
import { Select, Checkbox } from 'antd';
import {StyledSelect, StyledOption, ClearAll, SelectTitle, Header, Menu} from './styled';
import Grid from "../Grid";

const CustomSelect = (props) => {
  const { options, isCheckbox } = props;

  const handleChange = (value) => {
    props.onChange(props.field, value);
  };

  console.log(props.selectedOptions);
  return (
    <StyledSelect
      {...props}
      onChange={handleChange}
      value={props.selectedOptions}
      dropdownRender={(menu => {
        return (
          <Grid column width={"222px"} padding={"13px 13px 18px 8px"} bg="#fff" bsh="0px 4px 15px rgba(0, 0, 0, 0.1)" br="4px">
            <Header>
              <SelectTitle>{props.label}</SelectTitle>
              <ClearAll onClick={handleChange}>Clear All</ClearAll>
            </Header>
            <Menu>
              {menu}
            </Menu>
          </Grid>
        )}
      )}
    >
      {
        options.map(option => {
          if(isCheckbox) {
            const checked = props.selectedOptions.includes(option.value);
            return <StyledOption key="index" value={option.value}>
              <Checkbox checked={checked}>{option.label}</Checkbox>
            </StyledOption>
          } else {
            return <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
          }
        })
      }
    </StyledSelect>
  )
};

export default CustomSelect;
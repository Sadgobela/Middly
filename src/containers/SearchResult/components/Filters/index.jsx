import React, {useState} from 'react';
import Grid from 'components/Grid';
import {Col, Row} from 'antd';
import {
  Title,
  Filter,
  FilterOption,
  SelectedFilter,
  Clear,
  AppliedFilters,
  PostSearchFilters,
  GetPostFilters
} from './styled';
import CustomSelect from '../../../../components/Select';
import {brandData, colorData, sizeData, priceData, countryData} from './exampleData';

const filters = ['Location', 'Category', 'Brand', 'Price', 'Sort by'];

function getFilters(options = filters) {
  return options.map((item) => (
    <Filter defaultValue={item} clearIcon="Clear All">
      <FilterOption key="option" value="option">
        <span>Option</span>
      </FilterOption>
    </Filter>
  ));
}

function getAppliedFilters() {
  return (
    <AppliedFilters>
      <Row>
        <SelectedFilter>Women's clothing X</SelectedFilter>
        <SelectedFilter>All brands X</SelectedFilter>
        <SelectedFilter>Off White X</SelectedFilter>
      </Row>
      <Clear>Clear all</Clear>
    </AppliedFilters>
  );
}
const Filters = ({isPostSearch, title}) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  return (
    <Row>
      <Col span={isPostSearch ? undefined : 6}>
        <Grid aic>
          <Title>{title}</Title>
          {isPostSearch ? (
            <PostSearchFilters>
              <GetPostFilters>{getFilters(['Category', 'Post Type', 'Hashtags', 'Sort by'])}</GetPostFilters>
              {getAppliedFilters()}
            </PostSearchFilters>
          ) : null}
        </Grid>
      </Col>
      {!isPostSearch ? (
        <Col span={isPostSearch ? 21 : 18}>
          <Row style={{display: 'flex'}}>
            <CustomSelect
              field="size"
              label="Size"
              placeholder="Size"
              mode="multiple"
              selectedOptions={selectedSizes}
              onChange={setSelectedSizes}
              options={sizeData}
            />
            <CustomSelect
              field="color"
              label="Color"
              placeholder="Color"
              mode="multiple"
              selectedOptions={selectedColors}
              onChange={setSelectedColors}
              options={colorData}
            />
            <CustomSelect
              field="brand"
              label="Brand"
              placeholder="Brand"
              mode="multiple"
              selectedOptions={selectedBrands}
              onChange={setSelectedBrands}
              options={brandData}
            />
            <CustomSelect
              field="price"
              label="Price"
              placeholder="Price"
              mode="multiple"
              selectedOptions={selectedPrices}
              onChange={setSelectedPrices}
              options={priceData}
            />
            <CustomSelect
              field="country"
              label="Country"
              placeholder="Country"
              selectedOptions={selectedCountries}
              onChange={setSelectedCountries}
              options={countryData}
            />
          </Row>
          {getAppliedFilters()}
        </Col>
      ) : null}
    </Row>
  );
};

export default Filters;

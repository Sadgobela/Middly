import React from 'react';
import {Col} from 'antd';
import Pagination from 'components/PagePagination';
import Breadcrumbs from 'components/Breadcrumbs';
import {Categories, StyledCategory, Row, PopularTags, TagsWrapper, HashTag, Tags, CategoryQuantity} from './styled';
import Result from '../components/ProductResult';
import Filters from '../components/Filters';
import {Title} from '../components/Filters/styled';
import CustomSelect from '../../../components/Select';

const hashtags = [
  '#Cream',
  '#canvas',
  '#Big',
  '#tags',
  '#Cream',
  '#canvas',
  '#Big',
  '#tags',
  '#Big',
  '#tags',
  '#Cream',
  '#canvas',
  '#Big',
  '#tags',
  '#Cream',
  '#canvas',
  '#Big',
  '#tags'
];

const locations = ['Categories', 'Clothing'];

const categories = [
  {name: 'Clothings', count: 8902},
  {name: 'Shoes', count: 82},
  {name: 'Bags & Accessories', count: 82},
  {name: 'Beauty & Health', count: 82},
  {name: 'Electronics', count: 32},
  {name: 'Fashion', count: 82},
  {name: 'Appliances', count: 92},
  {name: 'Jewelry & Watches', count: 82}
];

function getCategories() {
  return categories.map((category, i) => (
    <StyledCategory key={i}>
      <span>{category.name}</span> <CategoryQuantity>({category.count.toLocaleString()})</CategoryQuantity>
    </StyledCategory>
  ));
}

function getPopularTags() {
  return hashtags.map((tag) => <HashTag>{tag}</HashTag>);
}
const ProductSearch = () => {
  return (
    <>
      <Row>
        <Filters title="Filter Products" />
      </Row>
      <Row>
        <Col span={6}>
          <Breadcrumbs locations={locations} isSearchPage />
          <Categories>{getCategories()}</Categories>
        </Col>
        <Col span={18} className="overwrite-dropdown">
          <Result />
          <Pagination />
        </Col>
        <TagsWrapper>
          <PopularTags>Popular Tags</PopularTags>
          <Tags>{getPopularTags()}</Tags>
        </TagsWrapper>
      </Row>
    </>
  );
};

export default ProductSearch;

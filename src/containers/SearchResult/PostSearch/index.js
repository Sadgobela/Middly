import React from 'react';
import {Row} from './styled';
import Result from '../components/PostResult';
import Filters from './../components/Filters';
import Pagination from 'components/PagePagination';
import {HashTag, PopularTags, Tags, TagsWrapper} from '../ProductSearch/styled';

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

function getPopularTags() {
  return hashtags.map((tag) => <HashTag>{tag}</HashTag>);
}

const ProductSearch = () => {
  return (
    <>
      <Row>
        <Filters isPostSearch title="Filter" />
      </Row>
      <Row>
        <Result />
        <Pagination />
        <TagsWrapper>
          <PopularTags>Popular Tags</PopularTags>
          <Tags>{getPopularTags()}</Tags>
        </TagsWrapper>
      </Row>
    </>
  );
};

export default ProductSearch;

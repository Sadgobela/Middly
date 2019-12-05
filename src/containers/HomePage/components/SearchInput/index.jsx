import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchIcon from 'assets/SearchIcon';
import avatar from './img/avatar.jpg';
import avatar2 from './img/avatar2.jpg';
import avatar3 from './img/avatar3.jpg';
import avatar4 from './img/avatar4.jpg';
import {
  Search,
  SearchButton,
  StyledSelect,
  SearchContainer,
  Option,
  Result,
  ResultContainer,
  ResultCategory,
  CategoryHeading,
  CategoryHeader,
  ViewAll,
  Response,
  ResponseTitle,
  CategoryItem,
  ItemPic,
  ItemName,
  ItemTitle,
  ItemRating,
  ItemFollow,
  ItemView,
  ItemFrom,
  ItemDescription,
} from './styled';

const avatars = [avatar, avatar2, avatar3, avatar4];
const category = ['Products', 'Stores', 'Posts'];
const items = [1, 2];

function getItem(name){
  name = name.toLowerCase();
  if(name === 'products'){
    return (
      <CategoryItem>
        <ItemPic src={avatar} />
        <ItemDescription>
          <ItemName>Reebok Crossfit</ItemName>
          <ItemRating>x x x x x (335)</ItemRating>
        </ItemDescription>
        <ItemFrom>From BD119</ItemFrom>
      </CategoryItem>
    );
  }
  if(name === 'stores'){
    return (
      <CategoryItem>
        <ItemPic src={avatar3} />
        <ItemDescription>
          <ItemName>Reebok</ItemName>
          <ItemTitle>112k followers</ItemTitle>
        </ItemDescription>
        <ItemFollow>Follow</ItemFollow>
      </CategoryItem>
    );
  }
  if(name === 'posts'){
    return (
      <CategoryItem>
        <ItemPic src={avatar4} />
        <ItemDescription>
          <ItemName>Nike Seller</ItemName>
          <ItemTitle>Cream canvas Big Sad Wolf</ItemTitle>
        </ItemDescription>
        <ItemView>View</ItemView>
      </CategoryItem>
    );
  }
}

function getCategory(arr) {
  return (
    arr.map( item =>
      <ResultCategory>
        <CategoryHeader>
          <CategoryHeading>{item}</CategoryHeading>
          <ViewAll>View All</ViewAll>
        </CategoryHeader>
        {items.map( () => getItem(item) )}
      </ResultCategory>
    )
  )
}

const SearchInput = () => {

  const [isShow, showResult] = useState(false);

  const closeHandler = () => {
    document.addEventListener('click', ev => {
      const t = ev.target;
      const close = !t.closest('.search-result-container');
      if(close){
        showResult(false);
      }
    });
  };

  const open = () => {
    showResult(true);
  };

  return (
    <SearchContainer>
      <Search placeholder="Thirts, Shoes" onInput={ open } />
      <StyledSelect value="Brands">
        <Option value="Brands">Brands</Option>
        <Option value="Brands">Brands</Option>
      </StyledSelect>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      {
        <CSSTransition
          in={isShow}
          timeout={300}
          classNames={'autocomplete'}
          unmountOnExit
        >
          <>
            {closeHandler()}
            <Result>
              <ResultContainer className="search-result-container">
                <Response>
                  <ResponseTitle>Response Title</ResponseTitle>
                </Response>
                {
                  getCategory(category)
                }
              </ResultContainer>
            </Result>
          </>

        </CSSTransition>
      }
    </SearchContainer>
  )
};

export default SearchInput;

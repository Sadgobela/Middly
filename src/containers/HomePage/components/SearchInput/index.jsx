import React, { useState } from 'react';
import SearchInputDesktop from './SearchInputDesktop';
import SearchInputMobile from './SearchInputMobile';
import avatar from './img/avatar.jpg';
import avatar2 from './img/avatar2.jpg';
import avatar3 from './img/avatar3.jpg';
import avatar4 from './img/avatar4.jpg';
import {
  ResultCategory,
  CategoryHeading,
  CategoryHeader,
  ViewAll,
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
const items = [1, 2];

function getItem(name) {
  name = name.toLowerCase();
  if(name === 'products'){
    return (
      <>
        <ItemPic src={avatar} />
        <ItemDescription>
          <ItemName>Reebok Crossfit</ItemName>
          <ItemRating>x x x x x (335)</ItemRating>
        </ItemDescription>
        <ItemFrom>From BD119</ItemFrom>
      </>
    );
  }
  if(name === 'stores'){
    return (
      <>
        <ItemPic src={avatar3} />
        <ItemDescription>
          <ItemName>Reebok</ItemName>
          <ItemTitle>112k followers</ItemTitle>
        </ItemDescription>
        <ItemFollow>Follow</ItemFollow>
      </>
    );
  }
  if(name === 'posts'){
    return (
      <>
        <ItemPic src={avatar4} />
        <ItemDescription>
          <ItemName>Nike Seller</ItemName>
          <ItemTitle>Cream canvas Big Sad Wolf</ItemTitle>
        </ItemDescription>
        <ItemView>View</ItemView>
      </>
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
        {items.map( () =>
            <CategoryItem>
              {getItem(item)}
            </CategoryItem>
          )
        }
      </ResultCategory>
    )
  )
}

const SearchInput = ({isMobile}) => {

  const [isShow, showResult] = useState(false);
  const [isFocus, showRecent] = useState(false);

  document.addEventListener('click', ev => {
    const t = ev.target;
    const close = t.classList.contains('close-search-popup');
    if(close){
      showResult(false);
      showRecent(false);
    }
  });

  const closeHandler = () => {

  };

  return (
    isMobile
      ?
      <SearchInputMobile />
      :
      < SearchInputDesktop
        getCategory={getCategory}
        closeHandler={closeHandler}
        isShow={isShow}
        open={showResult}
        isFocus={isFocus}
        hint={showRecent}
      />
      
  )
};

export default SearchInput;

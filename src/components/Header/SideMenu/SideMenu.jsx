import React, {useEffect, useState} from 'react';
import {defaultCategories} from 'constants/staticData';
import { CSSTransition } from 'react-transition-group';
import SubcategoryPopup from '../../../containers/HomePage/components/SubcategoryPopup';

import {
  MenuContainer,
  MenuContentWrapper,
  LinksList,
  MenuGroup,
  MenuTitle,
  MenuList,
  SubMenu
} from './styled';

function handleClick(e) {
  console.log('click', e);
}

export const SideMenu = ({setIsMenuOpened}) => {
  const [isSubcategoryOpen, toggleSubcategoryOpen] = useState(false);
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  });

  const close = ev => {
    if(ev.target.classList.contains('sideMenu-enter-done')) {
      setIsMenuOpened(false);
    }
  };

  return (
      <>
        <MenuContainer onClick={ ev => close(ev) }>
          <MenuContentWrapper>
            <LinksList>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Feed</a>
              </li>
            </LinksList>
            <MenuGroup
              onMouseEnter={()=>toggleSubcategoryOpen(!isSubcategoryOpen)}
              onMouseLeave={()=>toggleSubcategoryOpen(!isSubcategoryOpen)}>
              <MenuTitle>Categories</MenuTitle>
              <MenuList onClick={handleClick} mode="vertical">
                {defaultCategories.map((cat, index) => (
                    <SubMenu key={cat} title={<span>{cat}</span>} />
                ))}
              </MenuList>
              <CSSTransition
                in={isSubcategoryOpen}
                timeout={300}
                classNames={'subcategory'}
                unmountOnExit
              >
                <SubcategoryPopup aside mainHeading={'Clothings'}/>
              </CSSTransition>
            </MenuGroup>
          </MenuContentWrapper>
        </MenuContainer>
      </>
  );
};

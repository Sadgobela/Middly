import React, {useEffect} from 'react';
import {defaultCategories} from 'constants/staticData';

import {
  MenuContainer,
  MenuContentWrapper,
  LinksList,
  MenuGroup,
  MenuTitle,
  MenuList,
  ItemGroup,
  Item,
  SubMenu
} from './styled';

function handleClick(e) {
  console.log('click', e);
}

export const SideMenu = ({setIsMenuOpened}) => {
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
            <MenuGroup>
              <MenuTitle>Categories</MenuTitle>
              <MenuList onClick={handleClick} mode="vertical">
                {defaultCategories.map((cat, index) => (
                    <SubMenu key={cat} title={<span>{cat}</span>}>
                      {index === 0 && (
                          <ItemGroup title={<MenuTitle>{cat}</MenuTitle>}>
                            <Item key="1">Option 1</Item>
                            <Item key="2">Option 2</Item>
                          </ItemGroup>
                      )}
                    </SubMenu>
                ))}
              </MenuList>
            </MenuGroup>
          </MenuContentWrapper>
        </MenuContainer>
      </>
  );
};

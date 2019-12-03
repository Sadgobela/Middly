import React, {useEffect} from 'react';
import {Menu} from 'antd';

import {defaultCategories} from 'constants/staticData';

import {MenuContainer, MenuContentWrapper, LinksList, MenuGroup, MenuTitle} from './styled';

const {SubMenu} = Menu;

function handleClick(e) {
  console.log('click', e);
}

export const SideMenu = () => {
  useEffect(() => {
    document.body.classList.add('menu-opened');
    return () => {
      document.body.classList.remove('menu-opened');
    };
  });

  return (
    <>
      <MenuContainer>
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
            <Menu onClick={handleClick} mode="vertical">
              {defaultCategories.map((cat, index) => (
                <SubMenu key={cat} title={<span>{cat}</span>}>
                  {index === 0 && (
                    <Menu.ItemGroup title={<MenuTitle>{cat}</MenuTitle>}>
                      <Menu.Item key="1">Option 1</Menu.Item>
                      <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                  )}
                </SubMenu>
              ))}
            </Menu>
          </MenuGroup>
        </MenuContentWrapper>
      </MenuContainer>
    </>
  );
};

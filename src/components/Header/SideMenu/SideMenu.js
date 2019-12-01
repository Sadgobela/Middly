import React, {Component} from 'react';
import BurgerIcon from 'assets/BurgerIcon';
import {Menu} from 'antd';

import {defaultCategories} from 'constants/staticData';

import {Burger} from '../styled';

import {MenuContainer, MenuContentWrapper, LinksList, MenuGroup, MenuTitle} from './styled';

const {SubMenu} = Menu;

function handleClick(e) {
  console.log('click', e);
}

export default class SideMenu extends Component {
  state = {
    isMenuOpened: true
  };

  toggleNav = () => {
    const {isMenuOpened} = this.state;
    if (isMenuOpened) {
      document.body.classList.add('menu-opened');
    } else {
      document.body.classList.remove('menu-opened');
    }

    this.setState(() => {
      return {
        isMenuOpened: !isMenuOpened
      };
    });
  };

  render() {
    const {isMenuOpened} = this.state;

    console.log(defaultCategories);

    return (
      <>
        <Burger onClick={() => this.toggleNav()}>
          <BurgerIcon />
        </Burger>
        <MenuContainer isMenuOpened={isMenuOpened}>
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
  }
}

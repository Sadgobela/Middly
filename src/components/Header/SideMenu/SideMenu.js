import React, { Component } from 'react';
import BurgerIcon from 'assets/BurgerIcon';

import {
  defaultCategories,
} from 'constants/staticData';

import { Menu } from 'antd';

const { SubMenu } = Menu;

import {
  Burger,
  LinksContainer,
  StyledLink,
} from '../styled';

import {
  MenuContainer,
} from './styled';

function handleClick(e) {
  console.log('click', e);
}

export default class SideMenu extends Component {
  state = {
    isMenuOpened: true,
  };

  toggleNav = () => {
    this.setState(() => {
      const { isMenuOpened } = this.state;
      return {
        isMenuOpened: !isMenuOpened,
      };
    });
  };

  render() {
    const { isMenuOpened } = this.state;

    console.log(defaultCategories);

    return (
      <>
        <Burger onClick={() => this.toggleNav()}>
          <BurgerIcon />
        </Burger>
        <MenuContainer isMenuOpened={isMenuOpened}>
          <LinksContainer>
            <StyledLink classNmae="active">Marketplace</StyledLink>
            <StyledLink>Feed</StyledLink>
          </LinksContainer>
          <div>Categories</div>
          <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
            {defaultCategories.map((cat, index) => (
              <SubMenu
                key={cat}
                title={
                  <span>
                  <span>{cat}</span>
                </span>
                }
              >
                {index === 0 && <Menu.ItemGroup title={cat}>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>}
              </SubMenu>
            ))}
          </Menu>
        </MenuContainer>
      </>
    )
  }
}
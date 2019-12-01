import React, { Component } from 'react';
import LetterIcon from 'assets/LetterIcon';

import { Menu, Dropdown, Icon, message, Badge } from 'antd';

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

export const Messages = () => {
  return (
    <>
      <div id="components-dropdown-demo-dropdown-button">
        <Dropdown overlay={menu}>
          <Badge count={1}>
            <LetterIcon />
          </Badge>
        </Dropdown>
      </div>
    </>
  )
};

import styled from 'styled-components';
import {Menu} from 'antd';
import {
  mainWhiteColor,
  headerShadowColor,
  menuTitleColor,
  mainBlackColor,
  primaryColor
} from '../../../constants/colors';

import {headerHeight, mobileHeaderHeight, sideMenuWidth} from '../constants';

export const MenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: ${({isMobile}) => (isMobile ? mobileHeaderHeight : headerHeight)};
  transition: transform 0.3s ease-in-out;
  z-index: 1024;
  width: ${sideMenuWidth};
  height: calc(100vh - ${({isMobile}) => (isMobile ? mobileHeaderHeight : headerHeight)});
  line-height: 1.4;
  transform: translateX(-100%);

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: -2000px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  &.sideMenu-enter-active {
    transform: translateX(0px);

    &::after {
      opacity: 1;
    }
  }

  &.sideMenu-enter-done {
    transform: none;

    &::after {
      opacity: 1;
    }
  }
`;

export const MenuContentWrapper = styled.div`
  z-index: 1;
  height: 100%;
  background: ${mainWhiteColor};
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 25px 15px;
  margin: 0;
  border-bottom: 1px solid ${headerShadowColor};

  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  a {
    color: ${mainBlackColor};

    &:hover {
      color: ${primaryColor};
    }
  }
`;

export const MenuGroup = styled.div`
  padding: 25px 0 25px 15px;
`;

export const MenuList = styled(Menu)`
  &&& {
    .ant-menu-submenu-title {
      padding-left: 0;
      padding-right: 20px;

      .ant-menu-submenu-arrow {
        right: 10px;
      }
    }
  }

  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: ${primaryColor};
  }
`;

export const ItemGroup = styled(Menu.ItemGroup)``;

export const Item = styled(Menu.Item)`
  &&& {
    &.ant-menu-item-active {
      color: ${primaryColor};
    }

    &:hover {
      color: ${primaryColor};
    }
  }
`;

export const MenuTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${menuTitleColor};
  margin: 0 0 15px 0;
`;

export const SubMenu = styled(Menu.SubMenu)`
  &&& {
    &.ant-menu-submenu-vertical {
      & .ant-menu-submenu-title {
        & span,
        & a {
          color: ${mainBlackColor};
        }

        .ant-menu-submenu-arrow {
          &:before,
          &:after {
            width: 8px;
            border-radius: 0;
            background: currentColor;
          }

          &:before {
            transform: rotate(45deg) translateY(-3px);
          }

          &:after {
            transform: rotate(-45deg) translateY(3px);
          }
        }

        &:hover {
          .ant-menu-submenu-arrow {
            &:before,
            &:after {
              background: currentColor;
            }
          }
        }
      }
    }
  }
`;

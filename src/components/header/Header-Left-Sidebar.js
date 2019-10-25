import React from 'react';
import Link from 'next/link';
import 'comp-styles/header/Header.scss';
import MobileMenuContent from './Mobile-Menu-Content';
import DesktopMenuContent from './Desktop-Menu-Content-level1';
import DesktopMenuContentNested from './Desktop-Menu-Nexted-Category';
import { MIDDDLY_LOGO } from '../static/Icons';

//TODO: It is eady component for usage but need to consider with styles
export default class HeaderLeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      window.innerWidth <= 1080
    ) {
      this.setState({
        expanded: false,
      });
    }
  };

  handleOpenMenu(evvent) {
    if (this.state.expanded === true) {
      this.setState({
        expanded: false,
      });
    } else {
      this.setState({
        expanded: true,
      });
    }
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  renderTopHeaderTabs = () => {
    return (
      <ul className="hamburger-menu__horisontal-categories">
        <li className="hamburger-menu__horisontal-elements">
          <Link href="">
            <a>Home</a>
          </Link>
        </li>
        <li className="hamburger-menu__horisontal-elements">
          <Link href="/orders">
            <a>Orders</a>
          </Link>
        </li>
        <li className="hamburger-menu__horisontal-elements">
          <Link href="/lists">
            <a>Lists</a>
          </Link>
        </li>
      </ul>
    );
  };

  render() {
    let isMobile = false;

    return (
      <div className="logo">
        <div className="hamburger-menu mobile-hamburger">
          {this.state.expanded && (
            <div
              ref={this.setWrapperRef}
              className="hamburger-menu__less-640"
              style={{ flexDirection: 'row', maxWidth: 500 }}
            >
              <div>
                {this.renderTopHeaderTabs()}
                {isMobile ? <MobileMenuContent /> : <DesktopMenuContent />}
              </div>
              {!isMobile && <DesktopMenuContentNested />}
            </div>
          )}

          <span
            key={'new'}
            className="icon-bar"
            style={{ left: null }}
            onClick={(event) => {
              this.handleOpenMenu(event);
            }}
          >
            <span></span>
          </span>
          <div
            className="mobile-background"
            onClick={(event) => {
              this.handleOpenMenu(event);
            }}
          ></div>
        </div>

        <Link href="/">
          <a>{MIDDDLY_LOGO}</a>
        </Link>
      </div>
    );
  }
}

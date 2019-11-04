import React from 'react'
import './index.scss'
import ShoppingCart from './../../assets/icons/ShoppingCart.svg'
import BurgerMenu from './../../assets/icons/BurgerMenu.svg'
import Search from './../../assets/icons/Search.svg'
import logo from './../../assets/logo.png'

const Header = () => {
  return (
    <div className="DesktopHeader">
      <div className="DesktopHeader__menu">
        <a href="#0">
          <img src={BurgerMenu} alt="" />
        </a>
      </div>
      <div className="DesktopHeader__logo">
        <img src={logo} alt="" height="30" width="107" />
      </div>
      <div className="DesktopHeader__actions">
        <div>
          <a href="#0">Marketplace</a>
          <a href="#0">Feed</a>
        </div>
        <div className="DesktopHeader__search">
          <input type="text" placeholder="Thirts, Shoes" />
          <button type="submit">
            Brands
            <img src={Search} alt="" />
          </button>
          <button>
            <img src={Search} alt="" />
          </button>
        </div>
      </div>
      <div clasName="DesktopHeader__search">
        <a href="#0">
          <img src="" alt="" />
          Sell
        </a>
      </div>
      <div className="headers-profile">
        <img src="" alt="" />
        <span>Hi</span>
        <span>Name</span>
      </div>
      <div className="header-icons">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src={ShoppingCart} alt="" />
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import './mobile.scss'
import ShoppingCart from './../../assets/icons/ShoppingCart.svg'
import BurgerMenu from './../../assets/icons/BurgerMenu.svg'
import SearchMobile from './../../assets/icons/SearchMobile.svg'
import logo from './../../assets/logo.png'

const MobileHeader = () => {
  return (
    <div className="MobileHeader">
      <div className="MobileHeader__menu">
        <a href="#0">
          <img src={BurgerMenu} alt=""/>
        </a>
      </div>
      <a className="MobileHeader__logo" href="#0">
        <img src={logo} alt="" height="30" width="107" />
      </a>
      <div className="MobileHeader__actions">
        <a href="#0">
          <img src={SearchMobile} alt="" />
        </a>
        <a href="#0">
          <img src={ShoppingCart} alt="" />
        </a>
      </div>
    </div>
  )
}

export default MobileHeader

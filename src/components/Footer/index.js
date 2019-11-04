import React from 'react'
import './index.scss'
import Facebook from './../../assets/icons/Facebook.svg'
import Twitter from './../../assets/icons/Twitter.svg'
import Instagram from './../../assets/icons/Instagram.svg'
import MapPin from './../../assets/icons/MapPin.svg'
import Paypall from './../../assets/Paypall.png'
import Visa from './../../assets/Visa.png'
import Mastercard from './../../assets/Mastercard.png'
import Pay from './../../assets/Pay.png'
import AppStore from './../../assets/AppStore.png'
import GooglePlay from './../../assets/GooglePlay.png'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__social">
        <a href="#0">
          <img src={Facebook} alt="" />
        </a>
        <a href="#0">
          <img src={Twitter} alt="" />
        </a>
        <a href="#0">
          <img src={Instagram} alt="" />
        </a>
      </div>

      <div className="Footer__surface">
        <div>
          <img src={MapPin} alt="" /> Ukraine
        </div>
        <div>Eng (US)</div>
        <div>$ (USD)</div>
      </div>

      <div className="Footer__pay">
        <img src={Paypall} alt="" height="14" width="58" />
        <img src={Visa} alt="" height="14" width="46" />
        <img src={Mastercard} alt="" height="14" width="80" />
        <img src={Pay} alt="" height="24" width="27" />
      </div>

      <div className="Footer__apps">
        <img src={AppStore} alt="" width="132" />
        <img src={GooglePlay} alt="" width="132" />
      </div>

      <div className="Footer__links">
        <div className="Footer__links-col">
          <a href="#0">About us</a>
          <a href="#0">Contact us</a>
          <a href="#0">FAQ</a>
        </div>
        <div className="Footer__links-col">
          <a href="#0">How to buy</a>
          <a href="#0">Payments</a>
          <a href="#0">Returns</a>
        </div>
        <div className="Footer__links-col">
          <a href="#0">Start a shop</a>
          <a href="#0">How to sell</a>
          <a href="#0">Pricing plans</a>
        </div>
      </div>

      <div className="Footer__links Footer__links--secondary">
        <div className="Footer__links-col">
          <a href="#0">Help</a>
        </div>
        <div className="Footer__links-col">
          <a href="#0">Terms of Use</a>
        </div>
        <div className="Footer__links-col">
          <a href="#0">Privacy Policy</a>
        </div>
      </div>

      <div className="Footer__copyright">
        Copywright @ 2018 Middly. All rigths reserved
      </div>
    </div>
  )
}

export default Footer

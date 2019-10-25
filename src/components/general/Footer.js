import React from 'react';
// import { connect } from 'react-redux';
// import Link from 'react-router-dom';

import ModalTools from './ModalTools';

import '../../styles/comp-styles/general/Footer.scss';

import {
  ICON_SOCIAL_TWITTER,
  ICON_SOCIAL_INSTAGRAM2,
  ICON_SOCIAL_FACEBOOK,
  CountryPin,
} from '../static/Icons';

import applePay from '../../static/images/apple-pay.svg';
import visa from '../../static/images/visa.svg';
import mcHorisontal from '../../static/images/mc-horizontal.svg';
import payPal from '../../static/images/pay-pal.svg';
import googlePlay from '../../static/images/google-play.png';

class Footer extends React.Component {
  state = {
    isSettingsModalVisible: false,
  };

  showModal = () => {
    this.setState({
      isSettingsModalVisible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      isSettingsModalVisible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      isSettingsModalVisible: false,
    });
  };

  render() {
    const { isSettingsModalVisible } = this.state;

    const { currentCountry } = this.props;

    return (
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-top__up">
              <ul className="footer-top__links">
                <li>
                  <a href="landing/customer">About us</a>
                </li>
                <li>
                  <a href="/contact-us">Contact us</a>
                </li>
                <li>
                  <a href="landing/customer">FAQ</a>
                </li>
                <li>
                  <a href="landing/customer">How to buy</a>
                </li>
                <li>
                  <a href="/payments">Payments</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="landing/sellers">
                    <strong>Start a shop</strong>
                  </a>
                </li>
                <li>
                  <a href="landing/sellers">How to sell</a>
                </li>
                <li>
                  <a href="landing/sellers">Pricing plans</a>
                </li>
              </ul>

              <ul className="footer-top__social">
                <li>
                  <a href="#">{ICON_SOCIAL_INSTAGRAM2}</a>
                </li>
                <li>
                  <a href="#">{ICON_SOCIAL_TWITTER}</a>
                </li>
                <li>
                  <a href="#">{ICON_SOCIAL_FACEBOOK}</a>
                </li>
              </ul>

              <ul className="footer-top__info">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-use">Terms of Use</a>
                </li>
                <li className="footer-top__help">
                  <a href="/contact-us">Help</a>
                </li>
              </ul>

              <div className="footer-top__divider" />

              <ul className="footer-top__tools">
                <li className="_country" onClick={this.showModal}>
                  {/*{CountryPin} {currentCountry ? currentCountry.name : ''}*/}
                </li>
                <li className="_language" onClick={this.showModal}>
                  Eng (US)
                </li>
                <li className="_currency" onClick={this.showModal}>
                  $ (USD)
                </li>
              </ul>

              <ul className="footer-top__apps">
                <li>
                  <a href="#">
                    <img src={googlePlay} alt="App Store" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={googlePlay} alt="Google Play" />
                  </a>
                </li>
              </ul>

              <ul className="footer-top__payments">
                <li className="_visa">
                  <img src={visa} alt="Visa" />
                </li>
                <li className="_applePay">
                  <img src={applePay} alt="Apple pay" />
                </li>
                <li className="_mc">
                  <img src={mcHorisontal} alt="Master Card" />
                </li>
                <li className="_paypal">
                  <img src={payPal} alt="Pay Pal" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="footer-bottom__copyright">
              Copyright © 2019 Midddly. All Rights Reserved
            </p>
          </div>
        </div>

        <ModalTools
          visible={isSettingsModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
      </footer>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     currentCountry: state.countries.currentCountry,
//   };
// };

export default Footer;

import React from 'react';
import { connect } from 'react-redux';

import { Seller } from '../static/Icons';

import '../../styles/comp-styles/header/SellerButton.scss';
import Link from 'next/link';

class SellerButton extends React.Component {
  render = () => {
    const { me } = this.props;

    return (
      <div className={`SellerButton ${me && me.is_seller ? 'is-seller' : ''}`}>
        <Link
          href={
            me && me.id > 0
              ? me.is_seller
                ? `http://seller.gloocle.com:8082/marketplace/account/dashboard/`
                : `/landing/sellers`
              : `/landing/sellers`
          }
        >
          <a
            href={
              me && me.id > 0
                ? me.is_seller
                  ? `http://seller.gloocle.com:8082/marketplace/account/dashboard/`
                  : `/landing/sellers`
                : `/landing/sellers`
            }
            className={`SellerButton-link`}
          >
            {Seller}
            {(me && !me.is_seller) || me.length === 0 ? <span>Sell</span> : ''}
          </a>
        </Link>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    me: state.auth.me,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerButton);

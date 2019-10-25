import React from 'react';
import 'comp-styles/header/Header-Basket.scss';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ICON_BASKET1 } from '../static/Icons';

import { connect } from 'react-redux';
import {
  removeProductFromCart,
  changeProductCount,
  computeCartState,
} from '../../reducers/productCart';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  openClose() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    let cartIsNotEmpty = this.props.products.length > 0;

    return (
      <div className={'basket' + (this.state.isOpen ? ' open' : '')}>
        <span
          onClick={this.openClose.bind(this)}
          className="basket-control"
          role="presentation"
        >
          {ICON_BASKET1}
        </span>
        {cartIsNotEmpty && (
          <span className="goods-added"> {this.props.products.length}</span>
        )}
        <div className={'basket-dropdown' + (cartIsNotEmpty ? ' empty' : '')}>
          <div className="dropdown-triangle-up">▲</div>
          <div
            className="basket-dropdown__title"
            onClick={this.openClose.bind(this)}
          >
            <div className="basket-dropdown__title-wrapper">
              My cart
              {cartIsNotEmpty && (
                <p className="basket-dropdown__number-of-items">
                  {this.props.products.length} items
                </p>
              )}
            </div>
            <div className="basket-dropdown-mobile-x">
              <span className="mobile-x-alignment">×</span>
            </div>
          </div>
          <div className="basket-dropdown__items-list">
            <PerfectScrollbar>
              <div className="basket-dropdown__items-wrapper">
                {this.props.products.map((prod) => {
                  return (
                    <React.Fragment key={'prod' + prod.id}>
                      <div
                        className="basket-dropdown__item"
                        key={'basketItem' + +prod.id}
                      >
                        <img src={prod.productBody.img} alt="" />
                        <div className="basket-dropdown__item-info">
                          <p className="item-name">{prod.productBody.name}</p>
                          <p className="qty">
                            Quantity:
                            <span
                              className={
                                'btn grey ' +
                                (prod.count <= 1 ? 'disabled' : null)
                              }
                              onClick={
                                prod.count <= 1
                                  ? null
                                  : () => {
                                      this.props.changeProductCount(
                                        prod.id,
                                        prod.count - 1
                                      );
                                    }
                              }
                            >
                              -
                            </span>
                            {prod.count}
                            <span
                              className="btn grey "
                              onClick={() => {
                                this.props.changeProductCount(
                                  prod.id,
                                  prod.count + 1
                                );
                              }}
                            >
                              +
                            </span>
                          </p>
                          <div
                            className="basket-dropdown__remove"
                            onClick={() => {
                              this.props.deleteFromCart(prod.id);
                            }}
                          >
                            Remove
                          </div>
                        </div>
                        <div className="basket-dropdown__item-price">
                          <p className="price">${prod.productBody.price}</p>
                          {prod.price_old && (
                            <p className="old-price">${prod.price_old}</p>
                          )}
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  );
                })}
                {!cartIsNotEmpty && 'Your cart is empty'}
              </div>
            </PerfectScrollbar>
            <div className="subtotal">
              <div className="basket-dropdown__shipping-info">
                Free shipping on orders over $200
              </div>
              <div className="basket-dropdown__subtotal">
                {cartIsNotEmpty && (
                  <React.Fragment>
                    Subtotal:{' '}
                    <span className="basket-subtotal-amount">
                      ${this.props.totalProducts}
                    </span>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <div className="basket-dropdown__buttons">
            <Link href="/cart">
              <a className="btn grey">View Cart</a>
            </Link>
            {cartIsNotEmpty && (
              <Link href="/checkout">
                <a className="btn">Checkout</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => computeCartState(state);

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (productId) => {
      dispatch(removeProductFromCart(productId));
    },
    changeProductCount: (productId, step) => {
      dispatch(changeProductCount(productId, step));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);

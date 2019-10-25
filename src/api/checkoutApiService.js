import cookie from 'react-cookies';
import axios from 'axios';
import {
  ENDPOINT_GET_CART_LIST,
  ENDPOINT_CREATE_CART,
  ENDPOINT_ADD_TO_CART,
  ENDPOINT_GET_SHIPPING_COST,
  ENDPOINT_SAVE_SHIPPING_INFO,
  ENDPOINT_CREATE_ORDER,
  ENDPOINT_UPDATE_CART,
  ENDPOINT_RECOVER_PASSWORD,
  ENDPOINT_REMOVE_CART,
} from './Endpoints';

export const CART_QUOTE_ID_COOKIE_NAME = 'qid';

/**
 *
 * @returns {AxiosPromise<any>}
 */
export function initCart() {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(ENDPOINT_CREATE_CART, {}, { headers: headers });
}

/**
 *
 * @returns {AxiosPromise<any>}
 */
export function getCartList() {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.get(
    `${ENDPOINT_GET_CART_LIST}?quote_id=${cookie.load(
      CART_QUOTE_ID_COOKIE_NAME
    )}`,
    { headers: headers }
  );
}

/**
 *
 * @param product
 * @returns {AxiosPromise<any>}
 */
export function addToCart(product) {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(
    ENDPOINT_ADD_TO_CART,
    {
      ...product,
      quote_id: cookie.load(CART_QUOTE_ID_COOKIE_NAME),
    },
    { headers: headers }
  );
}

/**
 *
 * @param product
 * @returns {AxiosPromise<any>}
 */
export function updateCartItem(product) {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(
    ENDPOINT_UPDATE_CART,
    {
      ...product,
      quote_id: cookie.load(CART_QUOTE_ID_COOKIE_NAME),
    },
    { headers: headers }
  );
}

/**
 *
 * @param product
 * @returns {AxiosPromise<any>}
 */
export function removeCartItem(product) {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(
    ENDPOINT_REMOVE_CART,
    {
      ...product,
      quote_id: cookie.load(CART_QUOTE_ID_COOKIE_NAME),
    },
    { headers: headers }
  );
}

/**
 *
 * @param address
 * @returns {AxiosPromise<any>}
 */
export function getShippingCost(address) {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(
    ENDPOINT_GET_SHIPPING_COST,
    {
      ...address,
      // quote_id: cookie.load(CART_QUOTE_ID_COOKIE_NAME)
    },
    { headers: headers }
  );
}

/**
 *
 * @param addressInformation
 * @returns {AxiosPromise<any>}
 */
export function setShippingInfo(addressInformation) {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(
    ENDPOINT_SAVE_SHIPPING_INFO,
    {
      ...addressInformation,
    },
    { headers: headers }
  );
}

/**
 *
 * @param paymentMethod
 * @param billingAddress
 * @returns {AxiosPromise<any>}
 */
export function createOrder(paymentMethod, billingAddress) {
  let token = cookie.load('midddly_token');

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(
    ENDPOINT_CREATE_ORDER,
    {
      ...paymentMethod,
      ...billingAddress,
    },
    { headers: headers }
  );
}

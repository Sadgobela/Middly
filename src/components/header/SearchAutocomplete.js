import React from 'react';
import { Link } from '../../routes';
import { ICON_SEARCH1 } from '../static/Icons';
import 'comp-styles/header/SearchAutocomplete.scss';
import { LoadingCircle, LoadingIndicator } from '../loaders/loaders';

const AutocompleteProductItem = ({ product, onClick }) => (
  <section className="SearchAutocomplete-item">
    <Link route={`/product/${product.sku}`}>
      <a
        onClick={onClick}
        href={`/product/${product.sku}`}
        className="SearchAutocomplete-itemInner"
      >
        <div className="SearchAutocomplete-itemThumb">
          <img src={product.gallery} alt={product.name} />
        </div>
        <div className="SearchAutocomplete-itemBody">
          <div className="SearchAutocomplete-itemName">{product.name}</div>
          <div className="SearchAutocomplete-itemDesc">
            {product.shop_info && product.shop_info.shop_title}
          </div>
        </div>
        <div className="SearchAutocomplete-itemInfo">
          <div className="SearchAutocomplete-itemPrice">${product.price}</div>
        </div>
      </a>
    </Link>
  </section>
);

const AutocompleteStoreItem = ({ store, onClick }) => (
  <section className="SearchAutocomplete-item">
    <Link route={`/shop/${store.sku}`}>
      <a
        onClick={onClick}
        href={`/shop/${store.sku}`}
        className="SearchAutocomplete-itemInner"
      >
        <div className="SearchAutocomplete-itemThumb">
          <img src={store.gallery} alt={store.name} />
        </div>
        <div className="SearchAutocomplete-itemBody">
          <div className="SearchAutocomplete-itemName">{store.name}</div>
          <div className="SearchAutocomplete-itemDesc">
            {store.followers} followers
          </div>
        </div>
      </a>
    </Link>
  </section>
);

export default class SearchAutocomplete extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'initial';
  }

  render() {
    const {
      onClose,
      globalSearchData,
      isGlobalSearchPending,
      q,
      onChangeMobile,
      isMobile,
    } = this.props;

    return (
      <section className="SearchAutocomplete">
        <div
          className="SearchAutocomplete-overlay"
          onClick={onClose}
          role="presentation"
        />
        <div className="SearchAutocomplete-wrapper">
          {!isMobile && isGlobalSearchPending && (
            <div
              style={{ position: 'relative', width: '100%', height: '40px' }}
            >
              <LoadingIndicator
                height={30}
                width={30}
                color={'#ed484f'}
                isLoading={true}
              />
            </div>
          )}
          <section className="SearchAutocomplete-mobileBar">
            <div className="SearchAutocomplete-mobileInput">
              <input
                autoFocus={true}
                value={q}
                onChange={onChangeMobile}
                type="text"
                className="SearchAutocomplete-input"
              />
              <span className="SearchAutocomplete-inputIcon">
                {ICON_SEARCH1}
              </span>
              <button type="button" className="SearchAutocomplete-clearBtn" />
            </div>
            <div className="SearchAutocomplete-mobileClose">
              <button
                type="button"
                className="SearchAutocomplete-closeBtn"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </section>
          {isMobile && isGlobalSearchPending && (
            <div
              style={{ position: 'relative', width: '100%', height: '40px' }}
            >
              <LoadingIndicator
                height={30}
                width={30}
                color={'#ed484f'}
                isLoading={true}
              />
            </div>
          )}
          {!isGlobalSearchPending &&
            (!globalSearchData ||
              (globalSearchData.product.length === 0 &&
                globalSearchData.seller.length === 0)) && (
              <div
                className="ant-row-flex-center"
                style={{
                  display: 'flex',
                  position: 'relative',
                  width: '100%',
                  height: '40px',
                }}
              >
                <span style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                  No result found
                </span>
              </div>
            )}
          {!isGlobalSearchPending && globalSearchData && (
            <div>
              <section className="SearchAutocomplete-links">
                <div>
                  {/*  <Link route={`/search?searchType=global&name=${q}`}>*/}
                  {/*      <a onClick={onClose} href className="SearchAutocomplete-linksItem">*/}
                  {/*        <span>R</span>*/}
                  {/*        ings*/}
                  {/*      </a>*/}
                  {/*</Link>*/}
                </div>
              </section>
              {globalSearchData &&
                globalSearchData.product &&
                globalSearchData.product.length > 0 && (
                  <section className="SearchAutocomplete-type">
                    <div className="SearchAutocomplete-typeHeading">
                      <div className="SearchAutocomplete-typeName">
                        Products
                      </div>
                      <Link
                        route={`/search?searchType=global&tab=products&name=${q}`}
                      >
                        <a
                          onClick={onClose}
                          href
                          className="SearchAutocomplete-typeLink"
                        >
                          Show All
                        </a>
                      </Link>
                    </div>
                    <div className="SearchAutocomplete-typeList">
                      {globalSearchData.product.map((product) => (
                        <AutocompleteProductItem
                          onClick={onClose}
                          product={product}
                        />
                      ))}
                    </div>
                  </section>
                )}
              {globalSearchData &&
                globalSearchData.seller &&
                globalSearchData.seller.length > 0 && (
                  <section className="SearchAutocomplete-type SearchAutocomplete-type--stores">
                    <div className="SearchAutocomplete-typeHeading">
                      <div className="SearchAutocomplete-typeName">Stores</div>
                      <Link
                        route={`/search?searchType=global&tab=stores&name=${q}`}
                      >
                        <a
                          onClick={onClose}
                          href
                          className="SearchAutocomplete-typeLink"
                        >
                          Show All
                        </a>
                      </Link>
                    </div>
                    <div className="SearchAutocomplete-typeList">
                      {globalSearchData.seller.map((store) => (
                        <AutocompleteStoreItem
                          onClick={onClose}
                          store={store}
                        />
                      ))}
                    </div>
                  </section>
                )}
              {/*<section className="SearchAutocomplete-type SearchAutocomplete-type--posts">*/}
              {/*  <div className="SearchAutocomplete-typeHeading">*/}
              {/*    <div className="SearchAutocomplete-typeName">Posts</div>*/}
              {/*    <Link href>*/}
              {/*      <a href className="SearchAutocomplete-typeLink">Show All</a>*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*  <div className="SearchAutocomplete-typeList">*/}
              {/*    <section className="SearchAutocomplete-item">*/}
              {/*      <Link href>*/}
              {/*        <a href className="SearchAutocomplete-itemInner">*/}
              {/*          <div className="SearchAutocomplete-itemThumb">*/}
              {/*            <img src="/static/images/card-item1.jpg" alt="" />*/}
              {/*          </div>*/}
              {/*          <div className="SearchAutocomplete-itemBody">*/}
              {/*            <div className="SearchAutocomplete-itemName">Name autor’s post</div>*/}
              {/*            <div className="SearchAutocomplete-itemDesc">Maybe here would be your thoughts</div>*/}
              {/*          </div>*/}
              {/*        </a>*/}
              {/*      </Link>*/}
              {/*    </section>*/}
              {/*    <section className="SearchAutocomplete-item">*/}
              {/*      <Link href>*/}
              {/*        <a href className="SearchAutocomplete-itemInner">*/}
              {/*          <div className="SearchAutocomplete-itemThumb">*/}
              {/*            <img src="/static/images/card-item2.jpg" alt="" />*/}
              {/*          </div>*/}
              {/*          <div className="SearchAutocomplete-itemBody">*/}
              {/*            <div className="SearchAutocomplete-itemName">Runge Shoes</div>*/}
              {/*            <div className="SearchAutocomplete-itemDesc">Maybe here would be your thoughts</div>*/}
              {/*          </div>*/}
              {/*        </a>*/}
              {/*      </Link>*/}
              {/*    </section>*/}
              {/*  </div>*/}
              {/*</section>*/}
              {globalSearchData &&
                (!!globalSearchData.product.length ||
                  !!globalSearchData.seller.length) && (
                  <section className="SearchAutocomplete-seeAll">
                    <Link
                      route={`/search?tab=products&searchType=global&name=${q}`}
                    >
                      <a
                        onClick={onClose}
                        href
                        className="SearchAutocomplete-seeAllLink"
                      >
                        Show All Results
                      </a>
                    </Link>
                  </section>
                )}
            </div>
          )}
        </div>
      </section>
    );
  }
}

import React, { useState, useRef, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';

import useGlobal from 'store';

import Search from 'assets/Search';
import SearchNoFound from 'assets/SearchNoFound';
import CloseIcon from 'assets/CloseIcon';
import ArrowAccept from 'assets/ArrowAccept';

import { electronics, shops, posts, lists } from 'constants/staticData'

import SearchProduct from './SearchProduct';
import SearchStore from './SearchStore';
import SearchList from './SearchList';
import SearchPost from './SearchPost';
import CardNewArrival from 'components/CardNewArrival';
import Icon from 'components/Icon';

import {
  Wrapper,
  Header,
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchReset,
  Cancel,
  Tabs,
  TabItem,
  TabContent,
  TabDefault,
  SearchNoFoundContainer,
  SearchNoFoundTitle,
  SearchNoFoundText,
  ResentContainer,
  ResentHeader,
  ResentTitle,
  ResentClear,
  ResentItem,
  ResentItemText,
  ProductList,
  Row,
  Counter,
  FilterContainer,
  SortFilter,
  IconFilter,
  Tags,
  Tag,
  Loading,
  LoadingButton,
  LoadingCounter,
  SearchStoreContainer
} from './styled';

const SearchPopup = ({showSearch, setShowSearch}) => {
  const [globalState, globalActions] = useGlobal();
  const { user } = globalState;

  const searchInput = useRef();
  const [tab, setTab] = useState(null);
  const [focusedField, setFocusedField] = useState(false);
  const [oldScroll, setOldScroll] = useState(true);
  const [shownTabs, setShownTabs] = useState(true);
  const [recentSearches, setRecentSearches] = useState(['Boots', 'Fashion Trends List', 'Denim Jeans']);
  const [searchList, setSearchList] = useState([
    {
      title: 'Red Dress',
      category: 'Womens Fashion'
    },
    {
      title: 'Red Dr.Martenes',
      category: 'Mens Shoes'
    },
    {
      title: 'Red Dr.Pepper',
      category: 'Posts'
    },
    {
      title: 'Red Drift',
      category: 'Lists'
    },
    {
      title: 'Red Dream Kid',
      category: 'Stores'
    }
  ]);
  const [searchValue, setSearchValue] = useState('');
  const [searchVariant, setSearchVariant] = useState(null);

  useEffect(() => {
    if(showSearch === true && searchInput.current && !focusedField) {
      focusSearchInput();
    }
  });

  useEffect(() => {
    setShownTabs(true);
  }, [tab]);

  const focusSearchInput = () => {
    searchInput.current.focus();
    setFocusedField(true);
  };

  const noFound = () => {
    return (
      <SearchNoFoundContainer>
        <SearchNoFound/>
        <SearchNoFoundTitle>No Results Found</SearchNoFoundTitle>
        <SearchNoFoundText>Oh no! You did not search for anything. Start searching for anything and you’ll get results</SearchNoFoundText>
      </SearchNoFoundContainer>
    );
  };

  return (
    <Wrapper active={showSearch}>
      <Header>
        <SearchContainer>
          <SearchIcon>
            <Search color="#999"/>
          </SearchIcon>
          <SearchInput
            value={searchValue}
            onChange={(e) => {
              const { value } = e.target;

              setSearchValue(value);

              if(value.length <= 0) {
                setSearchValue('');
                setSearchVariant(null);
                setFocusedField(false);
                setTab(null)
              }
            }}
            ref={searchInput}
          />
          {
            searchValue.length > 0
              ?
                <SearchReset onClick={() => {
                  setSearchValue('');
                  setSearchVariant(null);
                  setFocusedField(false);
                  setTab(null)
                }}>
                  <CloseIcon width={12} height={12} color="#fff" />
                </SearchReset>
              : null
          }
        </SearchContainer>
        <Cancel
          onClick={() => {
            setShowSearch(!showSearch);

            setTimeout(() => {
              setSearchValue('');
              setSearchVariant(null);
              setFocusedField(false);
            }, 200);
          }}
        >
          Cancel
        </Cancel>
      </Header>
      <Div100vh
        style={{
          height: '100vh',
          maxHeight: 'calc(100rvh - 58px)',
          overflowX: 'hidden',
          overflowY: 'auto',
          marginTop: 58
        }}
        onScroll={(e) => {
          const { target } = e;
          let st = target.scrollTop;

          if (st > oldScroll){
            setShownTabs(false);
          } else if(st + target.clientHeight < target.scrollHeight) {
            setShownTabs(true);
          }

          setOldScroll(st <= 0 ? 0 : st);
        }}
      >
        {
          searchValue.length > 0 && searchVariant &&
          <Tabs active={shownTabs}>
            <TabItem
              active={tab === 1}
              onClick={() => {
                setTab(1);
              }}
            >
              Products
            </TabItem>
            <TabItem
              active={tab === 2}
              onClick={() => {
                setTab(2);
              }}
            >
              Stores
            </TabItem>
            <TabItem
              active={tab === 3}
              onClick={() => {
                setTab(3);
              }}
            >
              Post
            </TabItem>
            <TabItem
              active={tab === 4}
              onClick={() => {
                setTab(4);
              }}
            >
              Lists
            </TabItem>
          </Tabs>
        }
        {
          searchValue.length > 0 && !searchVariant &&
          <TabDefault>
            {
              searchList.length > 0
                ?
                <ResentContainer>
                  {
                    searchList.map((item, key) => {
                      return <ResentItem key={key} onClick={() => {
                        setSearchVariant(item.title);
                        setSearchValue(item.title);
                        setTab(1);
                      }}>
                        <ResentItemText>{item.title} <span>in {item.category}</span></ResentItemText>
                        <ArrowAccept/>
                      </ResentItem>
                    })
                  }
                </ResentContainer>
                :
                noFound()
            }
          </TabDefault>
        }
        {
          tab > 0 && searchValue.length > 0
            ?
              <>
                <TabContent active={tab === 1}>
                  <Tags>
                    <Tag>
                      <span>Woman’s clothings</span>
                      <Icon type="close" color="#666666" width={16} height={16}/>
                    </Tag>
                    <Tag>
                      <span>Kids Clothes</span>
                      <Icon type="close" color="#666666" width={16} height={16}/>
                    </Tag>
                    <Tag>
                      <span>Off White</span>
                      <Icon type="close" color="#666666" width={16} height={16}/>
                    </Tag>
                    <Tag>
                      <span>Woman’s clothings</span>
                      <Icon type="close" color="#666666" width={16} height={16}/>
                    </Tag>
                    <Tag>
                      <span>Kids Clothes</span>
                      <Icon type="close" color="#666666" width={16} height={16}/>
                    </Tag>
                    <Tag>
                      <span>Off White</span>
                      <Icon type="close" color="#666666" width={16} height={16}/>
                    </Tag>
                  </Tags>
                  <Row>
                    <Counter>12,346 Items</Counter>
                    <FilterContainer>
                      <SortFilter>Sort & Filter</SortFilter>
                      <IconFilter>
                        <Icon type="filter"/>
                      </IconFilter>
                    </FilterContainer>
                  </Row>
                  {
                    searchValue
                      ?
                        <ProductList>
                          {electronics.map((product, key) => {
                            return <CardNewArrival key={key} {...product}/>;
                          })}
                        </ProductList>
                      :
                      recentSearches.length > 0
                        ?
                        <ResentContainer>
                          <ResentHeader>
                            <ResentTitle>Recent Searches</ResentTitle>
                            <ResentClear onClick={() => setRecentSearches([])}>Clear All</ResentClear>
                          </ResentHeader>
                          {
                            electronics.map((item, key) => {
                              return <SearchProduct data={item} key={key}/>;
                            })
                          }
                        </ResentContainer>
                        :
                        noFound()
                  }
                  <Loading>
                    <LoadingButton>Load More ...</LoadingButton>
                    <LoadingCounter>8 of 12 Items</LoadingCounter>
                  </Loading>
                </TabContent>
                <TabContent active={tab === 2}>
                  <Row>
                    <Counter>152 Stores</Counter>
                    <FilterContainer>
                      <SortFilter>Sort & Filter</SortFilter>
                      <IconFilter>
                        <Icon type="filter"/>
                      </IconFilter>
                    </FilterContainer>
                  </Row>
                  {
                    searchValue.length > 0
                      ?
                      <SearchStoreContainer>
                        {shops.map((item, key) => {
                          return <SearchStore data={item} key={key}/>;
                        })}
                      </SearchStoreContainer>
                      :
                      recentSearches.length > 0
                        ?
                        <ResentContainer>
                          <ResentHeader>
                            <ResentTitle>Recent Searches</ResentTitle>
                            <ResentClear onClick={() => setRecentSearches([])}>Clear All</ResentClear>
                          </ResentHeader>
                          {
                            shops.map((item, key) => {
                              return <SearchStore data={item} key={key}/>;
                            })
                          }
                        </ResentContainer>
                        :
                         noFound()
                  }
                  <Loading>
                    <LoadingButton>Load More ...</LoadingButton>
                    <LoadingCounter>8 of 12 Stores</LoadingCounter>
                  </Loading>
                </TabContent>
                <TabContent active={tab === 3}>
                  <Row>
                    <Counter>12 Posts</Counter>
                    <FilterContainer>
                      <SortFilter>Sort & Filter</SortFilter>
                      <IconFilter>
                        <Icon type="filter"/>
                      </IconFilter>
                    </FilterContainer>
                  </Row>
                  {
                    searchValue.length > 0
                      ?
                      posts.map((item, key) => {
                        return <SearchPost
                          key={key}
                          data={item}
                          setSearchValue={setSearchValue}
                          likes
                        />;
                      })
                      :
                      recentSearches.length > 0
                        ?
                        <ResentContainer>
                          <ResentHeader>
                            <ResentTitle>Recent Searches</ResentTitle>
                            <ResentClear onClick={() => setRecentSearches([])}>Clear</ResentClear>
                          </ResentHeader>
                          {
                            posts.map((item, key) => {
                              return <SearchPost
                                key={key}
                                data={item}
                                setSearchValue={setSearchValue}
                                likes
                              />;
                            })
                          }
                        </ResentContainer>
                        :
                        <SearchNoFoundContainer>
                          <SearchNoFound/>
                          <SearchNoFoundTitle>No Results Found</SearchNoFoundTitle>
                          <SearchNoFoundText>Oh no! You did not search for anything. Start searching for anything and you’ll get results</SearchNoFoundText>
                        </SearchNoFoundContainer>
                  }
                  <Loading>
                    <LoadingButton>Load More ...</LoadingButton>
                    <LoadingCounter>8 of 12 Posts</LoadingCounter>
                  </Loading>
                </TabContent>
                <TabContent active={tab === 4}>
                  <Row>
                    <Counter>42 Lists</Counter>
                    <FilterContainer>
                      <SortFilter>Sort & Filter</SortFilter>
                      <IconFilter>
                        <Icon type="filter"/>
                      </IconFilter>
                    </FilterContainer>
                  </Row>
                  {
                    searchValue.length > 0
                      ?
                      lists.map((item, key) => {
                        return <SearchList
                          key={key}
                          data={item}
                        />;
                      })
                      :
                      recentSearches.length > 0
                        ?
                        <ResentContainer>
                          <ResentHeader>
                            <ResentTitle>Recent Searches</ResentTitle>
                            <ResentClear onClick={() => setRecentSearches([])}>Clear</ResentClear>
                          </ResentHeader>
                          {
                            lists.map((item, key) => {
                              return <SearchList
                                key={key}
                                data={item}
                              />;
                            })
                          }
                        </ResentContainer>
                        :
                        noFound()
                  }
                  <Loading>
                    <LoadingButton>Load More ...</LoadingButton>
                    <LoadingCounter>8 of 12 Lists</LoadingCounter>
                  </Loading>
                </TabContent>
              </>
            :
              user
                ?
                  <TabDefault>
                    {
                      recentSearches.length > 0
                        ?
                        <ResentContainer>
                          <ResentHeader>
                            <ResentTitle>Recent Searches</ResentTitle>
                            <ResentClear onClick={() => setRecentSearches([])}>Clear</ResentClear>
                          </ResentHeader>
                          {
                            recentSearches.map((item, key) => {
                              return <ResentItem key={key} onClick={() => {
                                setSearchValue(item);
                                setTab(1);
                              }}>
                                <span>{item}</span>
                                <ArrowAccept/>
                              </ResentItem>
                            })
                          }
                        </ResentContainer>
                        :
                        noFound()
                    }
                  </TabDefault>
                : null
        }
      </Div100vh>
    </Wrapper>
  );
};

SearchPopup.defaultProps = {
  showSearch: false,
  setShowSearch: () => {}
};

SearchPopup.propTypes = {
  showSearch: PropTypes.bool,
  setShowSearch: PropTypes.func
};

export default SearchPopup;

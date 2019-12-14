import React, { useState, useRef, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';

import Search from 'assets/Search';
import SearchNoFound from 'assets/SearchNoFound';
import CloseIcon from 'assets/CloseIcon';
import ArrowAccept from 'assets/ArrowAccept';

import { electronics, shops, posts, lists } from 'constants/staticData'

import SearchProduct from './SearchProduct';
import SearchStore from './SearchStore';
import SearchPost from './SearchPost';

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
  ResentItem
} from './styled';

const SearchPopup = ({showSearch, setShowSearch}) => {
  const searchInput = useRef();
  const [tab, setTab] = useState(null);
  const [recentSearches, setRecentSearches] = useState(['Boots', 'Fashion Trends List', 'Denim Jeans']);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if(showSearch === true && searchInput.current) {
      focusSearchInput();
    }
  });

  const focusSearchInput = () => searchInput.current.focus();

  return (
    <Wrapper active={showSearch}>
      <Header>
        <SearchContainer>
          <SearchIcon>
            <Search color="#999"/>
          </SearchIcon>
          <SearchInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            ref={searchInput}
          />
          {
            searchValue.length > 0
              ?
                <SearchReset onClick={() => setSearchValue('')}>
                  <CloseIcon width={12} height={12} color="#fff" />
                </SearchReset>
              : null
          }
        </SearchContainer>
        <Cancel
          onClick={() => {
            setShowSearch(!showSearch)
          }}
        >
          Cancel
        </Cancel>
      </Header>
      <Tabs>
        <TabItem
          active={tab === 1}
          onClick={() => { setTab(1) }}
        >
          Products
        </TabItem>
        <TabItem
          active={tab === 2}
          onClick={() => { setTab(2) }}
        >
          Stores
        </TabItem>
        <TabItem
          active={tab === 3}
          onClick={() => { setTab(3) }}
        >
          Post
        </TabItem>
        <TabItem
          active={tab === 4}
          onClick={() => { setTab(4) }}
        >
          Lists
        </TabItem>
      </Tabs>
      <Div100vh
        style={{
          height: '100vh',
          maxHeight: 'calc(100rvh - 104px)',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        {
          tab > 0
            ?
              <>
                <TabContent active={tab === 1}>
                  {
                    searchValue.length > 0
                      ?
                        electronics.map((item, key) => {
                          return <SearchProduct data={item} key={key}/>;
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
                            electronics.map((item, key) => {
                              return <SearchProduct data={item} key={key}/>;
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
                </TabContent>
                <TabContent active={tab === 2}>
                  {
                    searchValue.length > 0
                      ?
                      shops.map((item, key) => {
                        return <SearchStore data={item} key={key}/>;
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
                            shops.map((item, key) => {
                              return <SearchStore data={item} key={key}/>;
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
                </TabContent>
                <TabContent active={tab === 3}>
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
                </TabContent>
                <TabContent active={tab === 4}>
                  {
                    searchValue.length > 0
                      ?
                      lists.map((item, key) => {
                        return <SearchPost
                          key={key}
                          data={item}
                          setSearchValue={setSearchValue}
                          followers
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
                              return <SearchPost
                                key={key}
                                data={item}
                                setSearchValue={setSearchValue}
                                followers
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
                </TabContent>
              </>
            :
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
                      <SearchNoFoundContainer>
                        <SearchNoFound/>
                        <SearchNoFoundTitle>No Results Found</SearchNoFoundTitle>
                        <SearchNoFoundText>Oh no! You did not search for anything. Start searching for anything and you’ll get results</SearchNoFoundText>
                      </SearchNoFoundContainer>
                }
              </TabDefault>
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

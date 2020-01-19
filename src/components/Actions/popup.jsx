import React, { useEffect, useState, useRef } from 'react';
import Div100vh from 'react-div-100vh';
import Scrollbar from 'react-scrollbars-custom';

import useGlobal from "store";

import Icon from "components/Icon";

import seller from 'images/sellerThumb.png'

import {
  Popup,
  PopupOverlay,
  PopupContent,
  Item,
  ItemLabel,
  ItemRight,
  AddedToWishlist,
  AddedToWishlistIcon,
  IconShare,
  ItemThumb,
  ItemName,
  ItemFollow,
  IconLoader,
  IconCheck,
  Title,
  Search,
  SearchContainer,
  SearchReset,
  AddNewList,
  List,
  ListItem,
  ListItemCheck,
  ListItemLock,
  Field,
  FieldGroup,
  FieldLabel,
  Buttons,
  CreateButton,
  CancelButton,
  SavedTo,
  SavedIcon
} from './styled';
import SearchIcon from "../../assets/Search";
import CloseIcon from "../../assets/CloseIcon";

const ActionPopup = ({  }) => {
  const [globalState, globalActions] = useGlobal();

  const searchInput = useRef();

  const [defaultList, setDefaultList] = useState([
    {
      title: 'Wishlist',
      private: true
    },
    {
      title: 'Outfits Ideas',
      private: false
    },
    {
      title: 'My Wishes',
      private: false
    },
    {
      title: 'Fashion',
      private: false
    }
  ]);

  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [loadingFollowed, setLoadingFollowed] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [defaultShow, setDefaultShow] = useState(false);
  const [addToList, setAddToList] = useState(false);
  const [createNewList, setCreateNewList] = useState(false);
  const [checkedList, setCheckedList] = useState('');
  const [willPrivate, setWillPrivate] = useState(false);
  const [newList, setNewList] = useState('');
  const [list, setList] = useState(defaultList);
  const [searchValue, setSearchValue] = useState('');
  const [savedToList, setSavedToList] = useState(null);
  const showSaved = !!(savedToList && savedToList.length);

  const addToWishlist = () => {
    setWishlistLoading(true);

    // Await answer from Server
    setTimeout(() => {
      setWishlistLoading(false);
      setAddedToWishlist(true);
      setDefaultShow(false);
      globalActions.setActionsPopup(false);

      // delay 400ms after answer from Server
      setTimeout(() => {
        setSavedToList('Wishlist');
      }, 400);
    }, 500);
  };

  const share = async () => {
    const shareData = {
      title: 'Middly',
      text: 'Share',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      }
    } catch(err) {
      console.log(err);
    }
  };

  const renderWishlist = () => {
    if(wishlistLoading) {
      return <Icon type="loader" svgStyle={{ width: 24, height: 5, fill: '#ED484F' }}/>
    }

    if(addedToWishlist) {
      return (
        <AddedToWishlist>
          <AddedToWishlistIcon>
            <Icon type="checkbox" />
          </AddedToWishlistIcon>
          <span>Added</span>
        </AddedToWishlist>
      );
    }

    return <Icon type="plus" width={14} height={14}/>

  };

  const follow = () => {
    setLoadingFollowed(true);

    setTimeout(() => {
      setLoadingFollowed(false);
      setFollowed(!followed);
    }, 1000);
  };

  const renderFollow = () => {
    if(loadingFollowed) {
      return <IconLoader>
        <Icon type="loader" svgStyle={{ width: 24, height: 5, fill: '#ED484F' }}/>
      </IconLoader>
    }

    if(followed) {
      return (
        <>
          <IconCheck>
            <Icon type="checkbox"/>
          </IconCheck>
          Following
        </>
      );
    }

    return (
      <>
        <Icon type="plus"/>
        Follow
      </>
    );

  };

  useEffect(() => {
    if(globalState.actionsPopup) {
      document.body.classList.add('overflow-hidden');
      setDefaultShow(true);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [globalState.actionsPopup]);

  useEffect(() => {
    if(savedToList && savedToList.length > 0) {
      setTimeout(() => {
        setSavedToList(null);
      }, 2000);
    }
  }, [savedToList]);

  return <Popup
    show={globalState.actionsPopup || showSaved}
  >
    <Div100vh
      style={{
        height: '100vh',
        width: '100%',
        maxHeight: 'calc(100rvh)',
        display: 'flex'
      }}
    >
      <PopupOverlay
        show={globalState.actionsPopup}
        showSaved={savedToList && savedToList.length}
        onClick={() => {
          globalActions.setActionsPopup(false);
          setDefaultShow(false);
          setAddToList(false);
          setCreateNewList(false);
        }}
      />
      {
        showSaved
          ?
            <PopupContent
              style={{
                padding: '20px 24px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)'
              }}
              show={showSaved}
            >
              <SavedTo>
                <SavedIcon>
                  <Icon type="checkbox"/>
                </SavedIcon>
                <span>Saved to “{savedToList}”</span>
                <a href="#" onClick={() => {
                  globalActions.setActionsPopup(true);
                  setDefaultShow(false);
                  setAddToList(true);
                }}>Change</a>
              </SavedTo>
            </PopupContent>
          : null
      }
      <PopupContent
        show={defaultShow}
      >
        <Item onClick={() => !addedToWishlist && addToWishlist()}>
          <ItemLabel>
            <span>Add to Wishlist</span>
            <Icon type="lock"/>
          </ItemLabel>
          <ItemRight>
            {renderWishlist()}
          </ItemRight>
        </Item>

        <Item
          onClick={() => {
            setDefaultShow(false);
            setAddToList(true);
          }}
        >
          <ItemLabel>
            <span>My Lists</span>
          </ItemLabel>
          <ItemRight>
            <Icon type="plus" width={14} height={14}/>
          </ItemRight>
        </Item>

        <Item>
          <ItemLabel>
            <span>Share</span>
          </ItemLabel>
          <ItemRight>
            <IconShare onClick={share}>
              <Icon type="share" svgStyle={{ width: 13, height: 15 }}/>
            </IconShare>
          </ItemRight>
        </Item>

        <Item>
          <ItemThumb src={seller}/>
          <ItemName>Gucci</ItemName>

          <ItemFollow
            followed={followed}
            onClick={follow}
          >
            {renderFollow()}
          </ItemFollow>
        </Item>
      </PopupContent>

      <PopupContent
        show={addToList}
      >
        <Title>Add to List</Title>

        <SearchContainer>
          <SearchIcon color="#999999" />
          <Search
            value={searchValue}
            onChange={(e) => {
              const value = e.target.value;

              setSearchValue(value);

              if(value.length > 0) {
                const result = list.filter(o => o.title.includes(e.target.value));

                setList(result);
              } else {
                setList(defaultList);
              }
            }}
            ref={searchInput}
            placeholder="Search your Lists"
          />

          {
            searchValue.length > 0
              ?
              <SearchReset
                onClick={() => {
                  setSearchValue('');
                  setList(defaultList);
                }}
              >
                <CloseIcon width={12} height={12} color="#fff" />
              </SearchReset>
              : null
          }
        </SearchContainer>

        <List>
          <Scrollbar
            disableTracksWidthCompensation
            style={{ height: 160 }}
            trackXProps={{
              renderer: (props) => {
                const {elementRef, ...restProps} = props;
                return <span {...restProps} ref={elementRef} className="TrackX"/>;
              }
            }}
          >
          {
            list && list.length ?
              list.map((item, key) => (
                <ListItem
                  key={key}
                  private={item.private}
                  checked={item.title === checkedList}
                  onClick={() => {
                    setCheckedList(item.title);

                    setAddToList(false);
                    setDefaultShow(false);
                    globalActions.setActionsPopup(false);

                    // delay 400ms after answer from Server
                    setTimeout(() => {
                      setSavedToList(item.title);
                    }, 400)
                  }}
                >
                  {item.title}
                  {item.private && <ListItemLock><Icon type="lock"/></ListItemLock>}
                  {item.title === checkedList && <ListItemCheck><Icon type="checkbox"/></ListItemCheck>}
                </ListItem>
              ))
              :
                <ListItem style={{ justifyContent: 'center' }}>
                  Your list is empty!
                </ListItem>
          }
          </Scrollbar>
        </List>

        <AddNewList
          onClick={() => {
            setAddToList(false);
            setCreateNewList(true);
          }}
        >
          <Icon type='plus'/>
          <span>Create New List</span>
        </AddNewList>
      </PopupContent>

      <PopupContent
        show={createNewList}
      >
        <Title>Create New List</Title>

        <FieldGroup>
          <FieldLabel htmlFor="list">Enter List Name</FieldLabel>
          <Field
            id="list"
            value={newList}
            onChange={(e) => {setNewList(e.target.value)}}
            placeholder="Your List Name"
          />
        </FieldGroup>

        <List>
          <ListItem
            checked={willPrivate}
            onClick={() => {
              setWillPrivate(!willPrivate);
            }}
          >
            Private <ListItemLock><Icon type="lock"/></ListItemLock>
            {willPrivate && <ListItemCheck><Icon type="checkbox"/></ListItemCheck>}
          </ListItem>
        </List>

        <Buttons>
          <CreateButton
            onClick={() => {
              defaultList.push({
                title: newList,
                private: willPrivate
              });

              setDefaultList(defaultList);
              setList(defaultList);

              setNewList('');
              setWillPrivate(false);

              setAddToList(true);
              setCreateNewList(false);
            }}
          >
            Create
          </CreateButton>
          <CancelButton
            onClick={() => {
              setAddToList(true);
              setCreateNewList(false);
            }}
          >Cancel</CancelButton>
        </Buttons>
      </PopupContent>
    </Div100vh>
  </Popup>
};

ActionPopup.defaultProps = {};

ActionPopup.propTypes = {};

export default ActionPopup;
import React from 'react';
import PropTypes from 'prop-types';
import Scrollbar from 'react-scrollbars-custom';

import {
  Wrapper,
  Header,
  Title,
  View,
  List,
  Store,
  StoreHeader,
  StoreAvatar,
  StoreName,
  StoreCountry,
  StoreFollow,
  StoreGallery,
  StoreGalleryImage
} from './styled';
import Arrow from 'assets/Arrow';
import Plus from 'assets/Plus';

const PopularStores = ({title, list}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <View>
          <span>View All</span>
          <Arrow color="#666666" />
        </View>
      </Header>
      {list && list.length ? (
        <Scrollbar
          disableTracksWidthCompensation
          style={{height: 182}}
          trackXProps={{
            renderer: (props) => {
              const {elementRef, ...restProps} = props;
              return <span {...restProps} ref={elementRef} className="TrackX" />;
            }
          }}
        >
          <List>
            {list.map((item, key) => {
              return (
                <Store key={key}>
                  <StoreHeader>
                    <StoreAvatar src={item.avatar} />
                    <StoreName>
                      {item.title}
                      <StoreCountry>{item.country}</StoreCountry>
                    </StoreName>

                    <StoreFollow>
                      <Plus />
                      <span>Follow</span>
                    </StoreFollow>
                  </StoreHeader>

                  {item.gallery && item.gallery.length ? (
                    <StoreGallery>
                      {item.gallery.map((image, key) => {
                        return <StoreGalleryImage key={key} src={image} />;
                      })}
                    </StoreGallery>
                  ) : null}
                </Store>
              );
            })}
          </List>
        </Scrollbar>
      ) : null}
    </Wrapper>
  );
};

PopularStores.defaultProps = {
  title: 'Popular Stores',
  list: []
};

PopularStores.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array
};

export default PopularStores;

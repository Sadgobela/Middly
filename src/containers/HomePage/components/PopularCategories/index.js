import React from 'react';
import PropTypes from 'prop-types';
import Scrollbar from 'react-scrollbars-custom';

import {
  Wrapper,
  Header,
  Title,
  List,
  Category,
  CategoryRow,
  CategoryAvatar,
  CategoryContent,
  CategoryName,
  CategoryFollowers,
  CategoryFollow
} from './styled';
import Plus from 'assets/Plus';

const PopularCategories = ({title, list}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
      </Header>
      {list && list.length ? (
        <Scrollbar
          disableTracksWidthCompensation
          style={{height: 74}}
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
                <Category key={key}>
                  <CategoryAvatar src={item.imgSrc} />
                  <CategoryContent>
                    <CategoryName>{item.title}</CategoryName>
                    <CategoryFollowers>{item.followers} followers</CategoryFollowers>
                    <CategoryFollow>
                      <Plus />
                    </CategoryFollow>
                  </CategoryContent>
                </Category>
              );
            })}
          </List>
        </Scrollbar>
      ) : null}
    </Wrapper>
  );
};

PopularCategories.defaultProps = {
  title: 'Popular Categories',
  list: []
};

PopularCategories.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array
};

export default PopularCategories;

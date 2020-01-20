import React from 'react';
import PropTypes, {object} from 'prop-types';
import Scrollbar from 'react-scrollbars-custom';

import {Wrapper, Title, List, Card, Thumb, Name} from './styled';

const CategoriesMobile = ({title, list}) => {
  const renderCategories = () => {
    return list.map((item, key) => {
      return (
        <Card to={item.url} key={key}>
          <Thumb backgroundImage={item.image} />
          <Name>{item.name}</Name>
        </Card>
      );
    });
  };

  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      {list && list.length ? (
        <Scrollbar
          disableTracksWidthCompensation
          style={{height: 78}}
          trackXProps={{
            renderer: (props) => {
              // eslint-disable-next-line react/prop-types
              const {elementRef, ...restProps} = props;
              return <span {...restProps} ref={elementRef} className="TrackX" />;
            }
          }}
        >
          <List>{renderCategories()}</List>
        </Scrollbar>
      ) : null}
    </Wrapper>
  );
};

CategoriesMobile.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(object).isRequired
};

CategoriesMobile.defaultProps = {
  title: 'Categories'
};

export default CategoriesMobile;

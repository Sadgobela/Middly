import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';

import Arrow from 'assets/Arrow';

import {WrapperSubCategory, TitleSubCategory, CustomLink, Header, Back} from './styled';

const SubCategory = ({category, setSubCategoryActive}) => {
  const wrapper = useRef(null);
  let movedX = null,
    startX = null,
    moving = false;

  const touchStart = (e) => {
    startX = e.targetTouches[0].clientX;

    if (wrapper && wrapper.current && wrapper.current.contains(e.target)) {
      moving = true;
    }
  };

  const touchMove = (e) => {
    const diffX = e.changedTouches[0].clientX - startX;

    if (diffX > 0 && moving && wrapper && wrapper.current && wrapper.current.contains(e.target)) {
      movedX = diffX;
      wrapper.current.style.transform = `translate(${movedX}px, 0)`;
    }
  };

  const touchEnd = (e) => {
    if (wrapper && wrapper.current && wrapper.current.contains(e.target)) {
      const diffX = e.changedTouches[0].clientX - startX;

      if (diffX >= 40 && moving) {
        setSubCategoryActive(null);
        movedX = null;
        moving = false;
        wrapper.current.style = '';
      } else {
        movedX = null;
        moving = false;
        wrapper.current.style.transform = 'translate(0, 0)';
      }
    }
  };

  return (
    <WrapperSubCategory
      ref={wrapper}
      active={category !== null}
      onTouchStart={(e) => touchStart(e)}
      onTouchMove={(e) => touchMove(e)}
      onTouchEnd={(e) => touchEnd(e)}
    >
      <Header>
        <Back
          onClick={() => {
            setSubCategoryActive(null);
            movedX = null;
            wrapper.current.style = '';
            moving = false;
          }}
        >
          <Arrow color="black" />
        </Back>
        <TitleSubCategory>{category ? category.name : ''}</TitleSubCategory>
      </Header>
      <Div100vh
        style={{
          width: '100%',
          maxHeight: 'calc(100rvh - 70px)',
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: '16px'
        }}
      >
        {category && category.subCategories && category.subCategories.length
          ? category.subCategories.map((item, key) => {
              return (
                <CustomLink key={key}>
                  {item.name}
                  {item.subCategories && item.subCategories.length > 0 ? <Arrow color="black" /> : null}
                </CustomLink>
              );
            })
          : null}
      </Div100vh>
    </WrapperSubCategory>
  );
};

SubCategory.defaultProps = {
  category: null,
  setSubCategoryActive: () => {}
};

SubCategory.propTypes = {
  category: PropTypes.object,
  setSubCategoryActive: PropTypes.func
};

export default SubCategory;

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ArrowFooter from 'assets/ArrowFooter';

import {Wrapper, Title, Links, CustomLink, IconArrowFooter} from './styled';

const FooterBlock = ({children, title, links, width, staticBlock}) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Wrapper width={width} staticBlock={staticBlock}>
      {title ? (
        <Title onClick={() => setShowLinks(!showLinks)}>
          {title}
          <IconArrowFooter active={showLinks}>
            <ArrowFooter />
          </IconArrowFooter>
        </Title>
      ) : null}

      {links ? (
        <Links active={showLinks}>
          {links.map((link, index) => {
            return <CustomLink key={index}>{link.text}</CustomLink>;
          })}
        </Links>
      ) : null}

      {children}
    </Wrapper>
  );
};

FooterBlock.propTypes = {
  staticBlock: PropTypes.bool,
  title: PropTypes.string,
  links: PropTypes.array,
  children: PropTypes.any,
  width: PropTypes.string
};

export default FooterBlock;

import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 16px 0 15px;

  .TrackX {
    height: 1px !important;
    border-radius: 2px !important;
    background: #c4c4c4 !important;
    overflow: initial !important;
    width: calc(100% - 32px) !important;
    left: 16px !important;

    .ScrollbarsCustom-ThumbX {
      height: 2px !important;
      margin-top: -1px;
      background: #666666 !important;
    }
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: #343434;
  margin-bottom: 24px;
  padding: 0 16px;
`;

export const List = styled.div`
  display: flex;
  padding: 0 16px;

  &:after {
    content: '';
    display: inline-flex;
    height: 1px;
    width: 16px;
    min-width: 16px;
  }
`;

// TODO: Instead 'a' Will be 'Link' from react-router-dom
export const Card = styled.a`
  min-width: 167px;
  max-width: 167px;
  width: 167px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding: 4px 12px 4px 4px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Thumb = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 45px;
  height: 43px;
  border-radius: 4px;
  ${({backgroundImage}) => (backgroundImage ? `background-image: url(${backgroundImage});` : '')}
`;

export const Name = styled.p`
  margin: auto 0 auto 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

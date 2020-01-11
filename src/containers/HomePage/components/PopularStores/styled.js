import styled from 'styled-components';

import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 15px 0 20px;

  .TrackX {
    display: none;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #343434;
  margin: 0;
`;

export const View = styled.a`
  margin: 0 0 0 auto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  text-align: right;
  color: #464646;
  display: flex;
  align-items: center;
  line-height: 1.2;

  svg {
    width: 9px;
    height: 14px;
    margin-left: 20px;
  }
`;

export const List = styled.div`
  display: flex;
  padding: 0 11px;

  &:after {
    content: '';
    display: inline-flex;
    min-width: 11px;
    height: 1px;
  }
`;

export const Store = styled.div`
  min-width: calc(100vw - 68px);
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;

  padding: 10px;
  align-items: flex-start;
  min-height: 182px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

export const StoreHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StoreAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
`;

export const StoreName = styled.div`
  padding-left: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: #000000;
`;

export const StoreCountry = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
  display: block;
`;

export const StoreFollow = styled.span`
  min-height: 24px;
  width: 82px;
  display: inline-flex;
  margin-left: auto;
  align-items: center;
  background: #ffffff;
  border: 1px solid ${primaryColor};
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${primaryColor};

  svg {
    margin-right: 10px;
  }
`;

export const StoreGallery = styled.div`
  display: flex;
  margin: 10px -3px auto;
`;

export const StoreGalleryImage = styled.img`
  display: inline-flex;
  width: 90px;
  height: 90px;
  border-radius: 4px;
  object-fit: cover;
  margin: 0 3px;
`;

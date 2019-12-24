import styled from 'styled-components';

import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  background: #fff;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
  opacity: ${({active}) => (active ? '1' : '0')};
  transform: translate(0, ${({active}) => (active ? '0' : '-50px')});
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 8.5px 16px;
  border-bottom: 1px solid #cccccc;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 282px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background: #efefef;
  border-radius: 4px;
  padding: 11px 44px 11px 52px;
  font-size: 14px;
  color: #000;
  border: 0;
  outline: none;
  box-shadow: none;
  caret-color: red;

  &:placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #666666;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translate(0, -50%);
  max-width: 20px;
  max-height: 20px;
`;

export const SearchReset = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Cancel = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align-center;
  margin-left: auto;
  cursor: pointer;
  color: ${primaryColor};
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const TabItem = styled.span`
  font-style: normal;
  font-weight: ${({active}) => (active ? 'bold' : 'normal')};
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
  color: ${({active}) => (active ? '#000' : '#999')};
  height: 40px;
  line-height: 40px;
  width: 100%;
  border-bottom: 2px solid ${({active}) => (active ? primaryColor : '#EFEFEF')};
  transition: all 0.3s ease;
`;

export const TabContent = styled.div`
  display: ${({active}) => (active ? 'flex' : 'none')};
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100%;
  padding: 16px;
`;

export const TabDefault = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100%;
  padding: 16px;
`;

export const SearchNoFoundContainer = styled.div`
  margin: auto;
  text-align: center;
  max-width: 80%;
`;

export const SearchNoFoundTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin: 58px 0 7px;
`;

export const SearchNoFoundText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #999999;
`;

export const ResentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 3px 0 0;
`;

export const ResentHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 24px;
  width: 100%;
`;

export const ResentTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin: 0;
`;

export const ResentClear = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
  color: #000000;
  margin-left: auto;
`;

export const ResentItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  width: 100%;
  margin: 0 0 24px;

  svg {
    margin-left: auto;
  }
`;

export const Product = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ProductThumb = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductContent = styled.div`
  width: calc(100% - 90px);
  padding: 10px 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  margin: 0 0 4px;
  width: 100%;
`;

export const ProductPrice = styled.span`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0 0 auto;
  width: 100%;
`;

export const ProductStock = styled.span`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 132%;
  color: #666666;
  width: 100%;
  margin-top: auto;
`;

export const Store = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export const StoreThumb = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #efefef;
`;

export const StoreContent = styled.div`
  width: calc(100% - 40px);
  padding: 0 0 0 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 100%;
`;

export const StoreTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0 0 4px;
  width: 100%;
`;

export const StoreInside = styled.div``;

export const StoreRating = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    padding-left: 8px;
  }
`;

export const StoreFollow = styled.span`
  width: 99px;
  height: 28px;
  border: 1px solid ${({isFollowing}) => (isFollowing ? '#666' : primaryColor)};
  border-radius: 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({isFollowing}) => (isFollowing ? '#666' : primaryColor)};
  margin-left: auto;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    margin-right: 11px;
  }
`;

export const Post = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const PostThumb = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
`;

export const PostContent = styled.div`
  width: calc(100% - 48px);
  padding: 0 0 0 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 100%;
`;

export const PostTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0 0 4px;
  width: 100%;
`;

export const PostInside = styled.div``;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PostUsername = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;

export const PostDivider = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 0 9px;
  background: #cccccc;
`;

export const PostLikes = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;

export const PostAccept = styled.span`
  margin: auto 0 auto auto;
`;

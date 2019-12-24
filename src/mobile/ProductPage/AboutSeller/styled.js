import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 24px 16px 16px;
`;

export const Seller = styled.div`
  display: flex;
`;

export const SellerThumb = styled.img`
  width: 90px;
  height: 90px;
  border: 1px solid #efefef;
  border-radius: 50%;
  object-fit: cover;
`;

export const SellerContent = styled.div`
  width: calc(100% - 90px);
  padding-left: 20px;
`;

export const SellerLabel = styled.span`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  margin: 0 0 2px;
`;

export const SellerName = styled.p`
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 0 0 4px;
`;

export const SellerButtons = styled.div`
  display: flex;
  margin: 0 -5px;
  width: calc(100% + 10px);
`;

export const SellerButton = styled.button`
  outline: none;
  padding: 0 10px;
  height: 28px;
  width: 100%;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  border-radius: 24px;
  background: #fff;
  margin: 0 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  svg {
    max-width: 10px;
    max-height: 10px;
    margin-right: 10px;
  }

  ${({type}) => {
    if (type === 'primary') {
      return `
        min-width: 124px;
        border: 1px solid #666666;
        color: #666666;
      `;
    }
  }}
`;

export const SellerFollowers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const SellerFollowersCount = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  padding-left: 11px;
  color: #000000;

  a {
    font-weight: 700;
  }

  span {
    color: #999999;
    display: block;
  }
`;

export const SellerImages = styled.div`
  display: flex;
  align-items: center;

  img {
    border: 1px solid #ffffff;
    width: 32px;
    height: 32px;
    border-radius: 50%;

    &:not(:first-child) {
      margin-left: -12px;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;

  i {
    margin-right: 2px;
  }
`;

export const Reviews = styled.span`
  display: inline-flex;
  padding-left: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1;
  color: #7a7a7a;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100vw;

  opacity: ${({active}) => (active ? 1 : 0)};
  transform: translateY(${({active}) => (active ? '0px' : '-50px')});
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 110;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: #1a1a1a;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid #efefef;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: auto;
`;

export const FollowerWrapper = styled.div`
  padding: 20px 16px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`;

export const FollowerAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const FollowerName = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-left: 12px;
`;

export const FollowerUserName = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
  display: block;
  margin-top: 4px;
`;

export const FollowerButton = styled.button`
  outline: none;
  margin: 0 0 0 auto;
  height: 28px;
  min-width: 84px;
  border: 1px solid ${primaryColor};
  border-radius: 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${primaryColor};

  i {
    margin-right: 10px;
  }

  ${({active}) => {
    if (active) {
      return `
        color: #666666;
        background: #fff;
        border: 1px solid #666666;
      `;
    }
  }}
`;

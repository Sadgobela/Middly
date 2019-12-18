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

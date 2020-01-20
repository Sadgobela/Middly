import styled from 'styled-components';
import {
  mainWhiteColor,
  mainBlackColor,
  transparentTextColor,
  secondaryTextColor,
  bookmarkFillColor
} from 'constants/colors';
import {FlexContainer} from 'globalStyles';
import media from 'constants/media';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  min-width: 158px;
  background: ${mainWhiteColor};
  width: 158px;
  height: auto;
  margin: 0 6px;
  cursor: pointer;
  justify-content: initial;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);

  svg {
    max-width: 12px;
    max-height: 14px;
  }

  ${({inline}) => {
    if (inline) {
      return `
        width: 100%;
        height: auto;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01);
        border-radius: 2px;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: initial;
      `;
    }
  }}
`;

export const Info = styled(FlexContainer)`
  width: 100%;

  @media (max-width: ${media.mobileMax}) {
    ${({inline}) => {
      if (inline) {
        return `
            order: 2;
            flex-wrap: wrap;
          `;
      }
    }}
  }
`;

export const Tools = styled(FlexContainer)`
  align-items: center;
  width: 100%;
  margin-top: 3px;

  ${({inline}) => {
    if (inline) {
      return `
          order: 3;
          margin-top: 18px;
        `;
    }
  }}
`;

export const Image = styled.img`
  width: 100%;
  height: 214px;

  @media (max-width: ${media.mobileMax}) {
    height: 174px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
    border: 1px solid #fafafa;

    ${({inline}) => {
      if (inline) {
        return `
            width: 100px;
            height: 100px;
            border-radius: 1px;
            margin: 0;
          `;
      }
    }}
  }
`;

export const CardFooter = styled(FlexContainer)`
  width: 100%;
  height: 128px;
  flex-direction: column;
  letter-spacing: -0.6px;
  padding: 4px 25px 22px 15px;

  @media (max-width: ${media.mobileMax}) {
    padding: 4px 7px 8px;
    position: relative;
    height: auto;

    ${({inline}) => {
      if (inline) {
        return `
            width: calc(100% - 100px);
            padding-left: 10px;
            margin: 0 0 auto;
          `;
      }
    }}
  }
`;

export const Price = styled.div`
  font-size: 16px;
  color: ${mainBlackColor};

  @media (max-width: ${media.mobileMax}) {
    font-size: 12px;
    line-height: 1;
    margin-top: 2px;

    ${({inline}) => {
      if (inline) {
        return `
            order: 2;
          `;
      }
    }}
  }
`;

export const OldPrice = styled.span`
  font-size: 12px;
  color: ${transparentTextColor};
  text-decoration: line-through;
  margin-left: 6px;
`;

export const Shipping = styled.div`
  font-size: 12px;
  color: ${transparentTextColor};

  @media (max-width: ${media.mobileMax}) {
    font-size: 10px;
    line-height: 1;
    color: #999999;
    margin-right: -1px;
    letter-spacing: -0.1px;

    ${({inline}) => {
      if (inline) {
        return `
            order: 1;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 1.4;
            color: #8F8F8F;
            margin: 0 0 8px;
            width: 100%;
          `;
      }
    }}
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 16px;
  margin: 0 0 10px;
  color: ${mainBlackColor};

  @media (max-width: ${media.mobileMax}) {
    font-size: 10px;
    color: ${bookmarkFillColor};
    margin: 6px 0 5px;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({inline}) => {
      if (inline) {
        return `
            order: 1;
            margin: 0 0 2px;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          `;
      }
    }}
  }
`;

export const Likes = styled(FlexContainer)`
  font-size: 14px;

  @media (max-width: ${media.mobileMax}) {
    svg {
      max-width: 16px;
      max-height: 14px;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #000000;
    }
  }
`;

export const LikesCount = styled.span`
  color: ${secondaryTextColor};
  margin-left: 6px;

  @media (max-width: ${media.mobileMax}) {
    margin-left: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const More = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoreDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #7c7e82;
  display: inline-flex;
  margin: 0 1.5px;
`;

export const Sale = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 27px;
  height: 27px;
  background: #f0646a;
  border-radius: 2px;
  font-weight: 500;
  font-size: 10px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
`;

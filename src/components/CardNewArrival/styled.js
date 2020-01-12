import styled from 'styled-components';
import {
  mainWhiteColor,
  mainBlackColor,
  transparentTextColor,
  secondaryTextColor,
  primaryColor
} from '../../constants/colors';
import {FlexContainer} from '../../globalStyles';
import media from 'constants/media';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  width: 228px;
  height: 342px;
  background: ${mainWhiteColor};
  cursor: pointer;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);

  @media (max-width: ${media.mobileMax}) {
    min-width: 159px;
    width: 159px;
    height: auto;
    margin: 0 4px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

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
  }
`;

export const Info = styled(FlexContainer)`
  width: 100%;

  @media (max-width: ${media.mobileMax}) {
    flex-wrap: wrap;

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

  ${({inline}) => {
    if (inline) {
      return `
          order: 3;
          margin-top: 18px;
          display: none;
        `;
    }
  }}
`;

export const ImageContainer = styled.div`
  position: relative;

  ${({inline}) => {
    if (inline) {
      return `
      position: static;
    `;
    }
  }}
`;

export const Image = styled.img`
  width: 228px;
  height: 228px;

  @media (max-width: ${media.mobileMax}) {
    height: 174px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
    width: 100%;

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
  padding: 6px 15px 22px 15px;

  @media (max-width: ${media.mobileMax}) {
    padding: 6px 7px 25px;
    position: relative;
    height: auto;

    ${({inline}) => {
      if (inline) {
        return `
            width: calc(100% - 100px);
            padding-left: 10px;
            margin: 0 0 auto;
            padding: 0 0 0 10px;
          `;
      }
    }}
  }
`;

export const Price = styled.div`
  font-size: 16px;
  color: ${mainBlackColor};

  @media (max-width: ${media.mobileMax}) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: ${({sale}) => (sale ? primaryColor : '#000')};
    line-height: 1;
    margin-top: 2px;

    small {
      font-weight: normal;
      font-size: 8px;
      line-height: 10px;
      color: #666666;
    }

    ${({inline}) => {
      if (inline) {
        return `
            order: 2;
            font-size: 14px;
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

  @media (max-width: ${media.mobileMax}) {
    font-weight: 300;
    font-size: 8px;
    line-height: 10px;
    text-decoration-line: line-through;
    color: #999999;
    margin-left: 4px;

    small {
      font-weight: 300;
      font-size: 8px;
      color: #ccc;
    }

    ${({inline}) => {
      if (inline) {
        return `
          font-size: 12px;
          margin-left: 8px;
        `;
      }
    }}
  }
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
    margin-top: 4px;
    width: 100%;

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
    font-size: 12px;
    color: #000;
    margin: 6px 0 0;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'SF Pro Display';
    line-height: 14px;
    letter-spacing: 0;

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
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.76);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      max-width: 12px;
      max-height: 11px;
    }

    ${({inline}) => {
      if (inline) {
        return `
          position: static;
          order: 5;
          margin: 14px auto 0 0;
        `;
      }
    }}
  }
`;

export const LikesCount = styled.span`
  color: ${secondaryTextColor};
  margin-left: 6px;

  @media (max-width: ${media.mobileMax}) {
    margin-left: 4px;
  }
`;

export const Sale = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  background: #f0646a;
  width: 45px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;

  @media (max-width: ${media.mobileMax}) {
    width: 27px;
    height: 27px;
    top: 5px;
    right: 5px;
    background: #f0646a;
    border-radius: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #ffffff;
    line-height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Actions = styled.div`
  position: absolute;
  right: 9px;
  bottom: 11px;
  display: flex;
  cursor: pointer;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #7c7e82;
    margin-left: 3px;
  }

  ${({inline}) => {
    if (inline) {
      return `
        bottom: inherit;
        right: 0;
        top: 10px;
      `;
    }
  }}
`;

import styled from 'styled-components';
import {mainWhiteColor, mainBlackColor, secondaryColor, secondaryTextColor} from '../../constants/colors';
import {FlexContainer} from '../../globalStyles';
import media from 'constants/media';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  width: 228px;
  background: ${mainWhiteColor};
  cursor: pointer;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  margin: 0;

  @media (max-width: ${media.mobileMax}) {
    width: 159px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 263px;

  @media (max-width: ${media.mobileMax}) {
    height: 159px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }
`;

export const CardFooter = styled(FlexContainer)`
  width: 100%;
  flex-direction: column;
  padding: 13px 9px 9px 8px;

  @media (max-width: ${media.mobileMax}) {
    padding: 8px 12px 6px;
    position: relative;
  }
`;

export const CardFooterArea = styled(FlexContainer)`
  width: 100%;

  @media (max-width: ${media.mobileMax}) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${mainBlackColor};

  @media (max-width: ${media.mobileMax}) {
    line-height: 17px;
    width: 100%;
  }
`;

export const Price = styled.div`
  font-size: 16px;
  color: ${mainBlackColor};

  @media (max-width: ${media.mobileMax}) {
    font-size: 14px;
    font-weight: 500;
    display: block;
    width: 100%;
    margin-top: 6px;
  }
`;

export const Views = styled.div`
  font-size: 14px;
  margin-top: 15px;
  align-self: flex-start;
  color: ${secondaryTextColor};

  @media (max-width: ${media.mobileMax}) {
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #666666;
    position: absolute;
    bottom: 5px;
    right: 6px;
  }
`;

export const Sale = styled(FlexContainer)`
  position: absolute;
  justify-content: center;
  top: 3px;
  right: 3px;
  width: 35px;
  height: 35px;
  background: ${secondaryColor};
  border-radius: 2px;
  color: ${mainWhiteColor};
  font-size: 12px;

  @media (max-width: ${media.mobileMax}) {
    width: 27px;
    height: 27px;
    font-size: 10px;
    top: 5px;
    right: 5px;
  }
`;

export const Free = styled.p`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.4;
  color: #8f8f8f;
  margin: 0 0 8px;
`;

export const CardInline = styled(FlexContainer)`
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01);
  border-radius: 2px;
  padding: 10px;
`;

export const ImageInline = styled.img`
  width: 100px;
  height: 100px;
`;

export const CardFooterInline = styled(FlexContainer)`
  width: calc(100% - 100px);
  padding-left: 10px;
`;

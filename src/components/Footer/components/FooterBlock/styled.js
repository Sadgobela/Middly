import styled from 'styled-components';
import media from 'constants/media';

export const Wrapper = styled.div`
  width: ${({width}) => (width ? width : '18.3%')};
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${media.mobileMax}) {
    width: 100%;
    margin-bottom: 16px;

    &:not(:first-child) {
      border-top: 1px solid #efefef;
      padding-top: 20px;
    }

    ${({staticBlock}) => {
      if (staticBlock) {
        return `
          &:not(:first-child) {
            border-top: 0;
          }
        `;
      }
    }}
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 132%;
  letter-spacing: -0.384px;
  color: #000000;
  margin-bottom: 24px;
  display: block;
  width: 100%;
  position: relative;

  @media (max-width: ${media.mobileMax}) {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0px;
    margin-bottom: 0;
    cursor: pointer;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${media.mobileMax}) {
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
    max-height: 200px;

    ${({active}) =>
      active
        ? `
        max-height: 400px;
        padding-top: 12px;
      `
        : `
        max-height: 0;
        padding-top: 0;
      `}
  }
`;

export const CustomLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.256px;
  color: #000000;
  display: block;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 26px;
  }

  @media (max-width: ${media.mobileMax}) {
    font-size: 14px;
    line-height: 17px;
    color: #333333;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const IconArrowFooter = styled.span`
  position: absolute;
  top: 50%;
  right: 5px;
  height: 7px;
  transition: all 0.3s ease;
  transform: translate(0, -50%) rotate(180deg);
  display: none;

  @media (max-width: ${media.mobileMax}) {
    display: initial;
  }

  ${({active}) =>
    active
      ? `
      transform: translate(0, -50%) rotate(0deg);
    `
      : `
      transform: translate(0, -50%) rotate(180deg);
    `}
`;

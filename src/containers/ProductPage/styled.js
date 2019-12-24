import styled from 'styled-components';
import zoomIn from './img/zoom-in.png';

export const PageWrap = styled.div`
  background: #fafafa;
  padding: 34px 0 0 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Column = styled.div``;

export const Slider = styled.div`
  display: flex;
  margin: 0 24px 0 0;
`;

export const SliderTabList = styled.div``;

export const SliderTab = styled.div`
  margin: 0 0 8px 0;
  border: ${({active}) => (active ? '2px solid #ED494F' : 'none')};
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const SliderPreview = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const SliderSlide = styled.div`
  display: flex;
  position: relative;
  width: 715px;
  height: 722px;
  margin: 0 0 0 8px;
  overflow: hidden;
  background: #fff;
`;
export const SliderPic = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  cursor: url(${zoomIn}), auto;
  margin: auto;
  &:hover {
    max-width: none;
    max-height: none;
    min-width: 200%;
  }
`;

export const SliderControl = styled.i``;

export const Hashtags = styled.div`
  margin: 26px 0 0 68px;
`;

export const Tag = styled.a`
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #ed494f;
  margin: 0 16px 0 0;
`;

export const Similar = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  background: #ffffff;
`;

export const SliderContainer = styled.div`
  padding: 0 95px;

  & .slick-list {
    padding: 24px 0;
  }
`;

export const SimilarHeading = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  background: #fff;
  margin: 0 0 0 36px;
`;

export const Recently = styled.div`
  background: #fff;
  padding: 68px 0 0 0;
  margin: 24px 0 0 0;
`;

export const Line = styled.hr`
  margin: 0 16px;
  border: 0;
  border-top: 1px solid #efefef;
`;

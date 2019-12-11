import styled from 'styled-components';

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
  margin: 26px 0 0 0;
`;

export const Slider = styled.div`
  display: flex;
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
`;

export const SliderSlide = styled.div`
  margin: 0 0 0 8px;
  cursor: zoom-in;
`;
export const SliderPic = styled.img``;

export const SliderControl = styled.i``;

export const Column = styled.div``;

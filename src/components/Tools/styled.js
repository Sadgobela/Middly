import styled from 'styled-components';
import media from 'constants/media';

export const Wrapper = styled.div`
  background: #fafafa;
  mix-blend-mode: normal;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 19px;
  padding: 7px 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 330px;
  margin-left: auto;
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '34px')};

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: -0.256px;
  color: #000000;

  @media (max-width: ${media.mobileMax}) {
    order: 2;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Country = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

export const Divider = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  width: 1px;
  height: 21px;
  background: #c3c3c3;
  border-radius: 10px;
`;

export const Language = styled.div``;

export const Currency = styled.div``;

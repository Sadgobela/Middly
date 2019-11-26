import styled from 'styled-components';
import {FlexContainer} from '../../../../globalStyles';
import {mainBlackColor, grayTextColor} from '../../../../constants/colors';

export const Wrapper = styled.div`
  background: linear-gradient(72.25deg, #f0f0f0 24.07%, #e5e5e5 89.21%);
  margin-top: 46px;
`;

export const Container = styled(FlexContainer)`
  max-width: 1170px;
  margin: 0 auto;
  padding: 26px 0;
`;

export const MainImage = styled.img`
  display: block;
  width: 392px;
  height: 388px;
`;

export const ContentBlock = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  max-width: 462px;
`;

export const Title = styled.div`
  margin-top: 18px;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 21px;
  letter-spacing: -0.9px;
  color: ${mainBlackColor};
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.2;
  color: ${grayTextColor};
  margin-bottom: 27px;
  letter-spacing: -0.4px;
`;

export const Tags = styled(FlexContainer)`
  justify-content: flex-start;
  img:first-of-type {
    margin-right: 16px;
  }
`;

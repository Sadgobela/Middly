import styled from 'styled-components';
import { FlexContainer } from '../../../../globalStyles';
import { mainBlackColor, grayTextColor } from '../../../../constants/colors';

export const Container = styled(FlexContainer)`
  padding: 26px 120px;
  background: linear-gradient(72.25deg, #f0f0f0 24.07%, #e5e5e5 89.21%);
  margin-top: 80px;
`;

export const MainImage = styled.img`
  display: block;
  width: 392px;
  height: 388px;
`;

export const ContentBlock = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 300px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${mainBlackColor};
`;

export const Description = styled.div`
  font-size: 16px;
  color: ${grayTextColor};
  margin-bottom: 27px;
`;

export const Tags = styled(FlexContainer)`
  justify-content: flex-start;
  img:first-of-type {
    margin-right: 16px;
  }
`;

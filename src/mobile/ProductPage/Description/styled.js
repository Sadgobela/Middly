import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 30px 16px 20px;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  p {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
  }
`;

export const ShowMore = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
  margin: 16px 0 0;
  color: ${primaryColor};

  i {
    position: relative;
    transform: rotate(${({active}) => (active ? '-90deg' : '90deg')});
    margin-left: 7px;
  }
`;

export const Attributes = styled.div`
  margin-top: 8px;
`;

export const Attribute = styled.div`
  display: flex;
  padding-top: 8px;
`;

export const AttributeLabel = styled.span`
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #999999;
  min-width: 65px;
`;

export const AttributeValue = styled.span`
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  margin-left: 16px;
`;

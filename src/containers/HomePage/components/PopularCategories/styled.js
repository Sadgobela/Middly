import styled from 'styled-components';

import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 15px 0 20px;

  .TrackX {
    display: none;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #343434;
  margin: 0;
`;

export const List = styled.div`
  display: flex;
  padding: 0 11px;

  &:after {
    content: '';
    display: inline-flex;
    min-width: 11px;
    height: 1px;
  }
`;

export const Category = styled.div`
  margin: 4px;
  display: flex;
  flex-wrap: wrap;
  min-width: 55.5%;
  width: 55.5%;
  padding: 6px;
  align-items: flex-start;
  min-height: 60px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

export const CategoryRow = styled.div``;

export const CategoryAvatar = styled.img`
  width: 54px;
  height: 54px;
  display: inline-flex;
  border-radius: 2px;
  object-fit: cover;
`;

export const CategoryContent = styled.div`
  padding: 7px 8px;
  display: inline-flex;
  flex-wrap: wrap;
  width: calc(100% - 54px);
  position: relative;
`;

export const CategoryName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 7px;
  width: 100%;
`;

export const CategoryFollowers = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 132%;
  display: flex;
  align-items: center;
  color: #8f8f8f;
  width: 100%;
`;

export const CategoryFollow = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 4px;
  width: 24px;
  height: 24px;
  border: 1px solid ${primaryColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

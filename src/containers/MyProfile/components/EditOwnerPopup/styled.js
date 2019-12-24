import styled from 'styled-components';

export const Search = styled.div`
  width: 494px;
  margin: auto;
  border-top: 1px solid #c3c3c3;
  padding: 16px 0 12px;
`;

export const SearchInput = styled.div`
  width: 100%;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #8f8f8f;
  padding: 21px 15px;
  margin-bottom: 16px;
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const Avatar = styled.img`
  margin-right: 8px;
`;

export const UserWrap = styled.div``;

export const Name = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
`;

export const Information = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #7a7a7a;
`;

export const AllowBtn = styled.button`
  width: 99px;
  height: 28px;
  background: transparent;
  border: ${({allowed}) => (allowed ? '1px solid #C3C3C3' : '1px solid #ED484F')};
  box-sizing: border-box;
  border-radius: 24px;
  cursor: pointer;
  outline: none;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${({allowed}) => (allowed ? '#545454' : '#ED484F')};
`;

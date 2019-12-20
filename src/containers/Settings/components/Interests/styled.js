import styled from 'styled-components';

export const Add = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 36px;
  border: 1px solid #c3c3c3;
  border-radius: 24px;
  background: transparent;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #464646;
`;

export const Selected = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 32px;
  background: transparent;
  border: 1px solid #8f8f8f;
  border-radius: 16px;
  padding: 0 16px;
  white-space: nowrap;
  margin: 0 16px 0 0;
  &:last-child {
    margin-right: 0;
  }
`;

export const AddNew = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 414px;
  height: 56px;
  border: 1px solid #a7a7a7;
  border-radius: 2px;
  margin: 16px 0 0 0;
  padding: 0 10px 0 0;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 0 0 0 16px;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #000;

  &::placeholder {
    color: #999;
  }
`;

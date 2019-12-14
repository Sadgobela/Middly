import styled from 'styled-components';

export const Container = styled.div`
  margin: 34px 0 0 0;
  background: #fff;
`;

export const List = styled.div`
  padding: 0 0 8px 0;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  padding: 16px 0 12px 36px;
`;

export const Name = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #000;
  margin: 4px 0;
`;

export const ShowAll = styled.button`
  color: #ed484f;
  margin: 0 0 0 85px;
  border: none;
  background: transparent;
  text-align: left;
  padding: 0;
`;

export const Message = styled.p`
  max-width: 224px;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #545454;
`;

export const Date = styled.span`
  position: absolute;
  top: 22px;
  right: 22px;
  font-family: Helvetica Neue, sans-serif;
  font-size: 12px;
  line-height: 140%;
  color: #999999;
`;

export const Activity = styled.div`
  display: flex;
  align-items: center;
`;

export const Likes = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 16px 0 0;
  font-size: 12px;
  line-height: 140%;
  color: #333;
  & svg {
    width: 16px;
    height: 16px;
    & path {
      stroke: #333;
    }
  }
`;

export const Shares = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-size: 12px;
  line-height: 140%;
  color: #000;
`;

export const AddComment = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.08);
  padding: 8px 16px;
`;

export const UserPic = styled.img`
  display: block;
  max-width: 100%;
  width: 40px;
  height: 40px;
  margin: ${({comment}) => (comment ? '0 8px 0 0' : '0 22px 0 0')};
`;

export const InputMessage = styled.input`
  height: 100%;
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
`;

export const Send = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ed494f;
  border: none;
`;

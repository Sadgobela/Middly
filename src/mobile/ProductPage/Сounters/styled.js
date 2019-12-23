import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #e4e4e4;
  justify-content: space-between;
`;

export const Counter = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    fill: #666666;
  }
`;

export const CounterLabel = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #666666;
  padding-left: 8px;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100vw;

  opacity: ${({active}) => (active ? 1 : 0)};
  transform: translateY(${({active}) => (active ? '0px' : '-50px')});
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 110;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: #1a1a1a;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid #efefef;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: auto;
`;

export const AddCommentForm = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 16px;
  height: 65px;
  background: #fff;
  border-top: 1px solid #efefef;
  position: relative;
  z-index: 100;
  margin-top: auto;
`;

export const AddCommentAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AddCommentField = styled.textarea`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #000;
  height: 65px;
  line-height: 1.3;
  padding: 20px 10px;
  border: 0;
  outline: none;
  width: calc(100% - 40px - 32px);
  resize: none;

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #999999;
  }
`;

export const AddCommentSend = styled.button`
  width: 32px;
  height: 32px;
  background: ${primaryColor};
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    fill: #fff;
    position: relative;
    top: 1px;
    left: 1px;
  }
`;

export const Reply = styled.div`
  position: absolute;
  z-index: 90;
  bottom: ${({active}) => (active ? '65px' : '0px')};
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #999999;
  height: 29px;
  padding: 0 16px;
  border-top: 1px solid #efefef;
  background: #fff;
  transition: all 0.3s ease;

  span {
    color: #000;
  }
`;

export const ReplyIcon = styled.div`
  margin-left: auto;
  margin-right: -3px;
`;

export const Comment = styled.div`
  padding: 16px 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`;

export const CommentAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentContent = styled.div`
  width: calc(100% - 40px);
  padding: 0 0 0 10px;
`;

export const CommentName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;

  span {
    margin-left: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #999999;
  }
`;

export const CommentMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0;
`;

export const CommentTools = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const CommentLikes = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;

  svg {
    fill: #333333;
  }

  span {
    margin-left: 4px;
  }
`;

export const CommentReply = styled.span`
  margin-left: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
`;

export const CommentSubComments = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-top: 1px solid #efefef;
  margin-top: 16px;
  margin-bottom: -16px;
  padding-left: 70px;
`;

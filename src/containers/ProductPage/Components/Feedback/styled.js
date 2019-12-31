import styled from 'styled-components';

export const Container = styled.section`
  width: 1014px;
  border-top: 1px solid #e4e4e4;
  margin: 24px auto 0 auto;
`;

export const FeedbackItem = styled.div`
  padding-top: 42px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e4e4e4;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({bottom}) => (bottom ? '17px' : '0px')};
  justify-content: space-between;

  & svg {
    margin-right: 4px;
  }
`;

export const WrapSecond = styled.div``;

export const UserAvatar = styled.img`
  position: relative;
  margin-right: 32px;

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background: #c3c3c3;
    border: 2px solid #ffffff;
    border-radius: 50%;
    right: 0;
    bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const Item = styled.div`
  display: ${({flex}) => (flex ? 'flex' : 'block')};
  align-items: ${({center}) => (center ? 'center' : 'flex-start')};
  justify-content: ${({spaceBetween}) => (spaceBetween ? 'space-between' : 'flex-start')};
  margin-left: ${({center}) => (center ? '292px' : '0')};
`;

export const UserName = styled.span`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 124%;
  letter-spacing: 0.019em;
  color: #000000;
`;

export const FollowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 28px;
  background: transparent;
  border: 1px solid #ed484f;
  border-radius: 24px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #ed484f;
  cursor: pointer;
  margin-top: 11px;
`;

export const Plus = styled.img`
  margin-right: 11px;
`;

export const InfluenceBtn = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #545454;
  margin-top: 8px;
`;

export const Text = styled.span`
  display: ${({block}) => (block ? 'block' : 'inline')};
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${({link}) => (link ? '#ED484F' : '#545454')};
  margin-left: ${({left}) => (left ? '8px' : '0px')};
  margin-top: ${({block}) => (block ? '17px' : '0px')};
`;

export const Date = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #999999;
`;

export const Settings = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 32px;
  height: 34px;
  margin-left: 12px;
  outline: none;
  background: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  margin-top: -8px;
`;

export const Dot = styled.i`
  position: relative;
  width: 4px;
  height: 4px;
  background: #7c7e82;
  border-radius: 50%;

  &::before {
    position: absolute;
    bottom: calc(100% + 3.5px);
    left: 0;
    content: '';
    width: 4px;
    height: 4px;
    background: #7c7e82;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    top: calc(100% + 3.5px);
    left: 0;
    content: '';
    width: 4px;
    height: 4px;
    background: #7c7e82;
    border-radius: 50%;
  }
`;

export const Example = styled.img`
  margin: 12px 18px 21px 0;
`;

export const HelpBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 35px;
  background: #e4e4e4;
  border: none;
  box-sizing: border-box;
  border-radius: 24px;
  cursor: pointer;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #545454;
  margin-right: 12px;
`;

export const Heart = styled.img`
  width: 20px;
  height: 18px;
  margin-right: 4px;
  margin-top: -2px;
`;

export const Reply = styled.div`
  border-bottom: 1px solid #e4e4e4;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #999999;
  padding: 12px 16px;
`;

export const Send = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #c3c3c3;
  border: none;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
`;

export const AddComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 69px;
`;

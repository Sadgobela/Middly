import styled from 'styled-components';

export const Container = styled.section`
  width: 1014px;
  border-top: 1px solid #e4e4e4;
  margin: 24px auto 0 auto;
  padding-top: 27px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({bottom}) => (bottom ? '17px' : '0px')};

  & svg {
    margin-right: 4px;
  }
`;

export const WrapSecond = styled.div``;

export const UserAvatar = styled.img`
  margin-right: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const Item = styled.div`
  display: ${({flex}) => (flex ? 'flex' : 'block')};
  align-items: center;
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
  background: #ed484f;
  border: 1px solid #ed484f;
  border-radius: 24px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
  cursor: pointer;
  margin-left: 32px;
`;

export const InfluenceBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 28px;
  border: none;
  background: transparent;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #545454;
  margin-top: 8px;
`;

export const Text = styled.span`
  max-width: 700px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  margin-left: ${({left}) => (left ? '8px' : '0px')};
  display: ${({block}) => (block ? 'block' : 'inline')};
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
    top: calc(100% + 2.5px);
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 35px;
  background: #fafafa;
  border: 1px solid #c3c3c3;
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

export const Heart = styled.div`
  margin-right: 30px;
`;

export const Reply = styled.div`
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #999999;
  margin: 26px 0 8px;
  padding: 12px 16px;
`;

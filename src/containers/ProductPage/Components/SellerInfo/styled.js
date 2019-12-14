import styled from 'styled-components';

export const Container = styled.section`
  margin: 24px 0 0 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SellerProfile = styled.div`
  padding: 33px 0 34px 32px;
  background: #fff;
`;

export const MoreSameSellerTitle = styled.span`
  display: block;
  font-family: Helvetica Neue, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  margin: 0 0 24px 0;
`;

export const MoreSameSeller = styled.div`
  margin: 34px 0 0 0;
`;

export const MoreSameSellerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    margin-right: 51px;
  }
`;

export const SellerProfileWrap = styled.div`
  display: flex;
`;

export const SellerProfileItem = styled.div`
  ${({alignRight}) =>
    alignRight
      ? `
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		`
      : null};
`;

export const SellerPic = styled.div`
  position: relative;
  width: 61px;
  height: 60px;
  margin-right: 25px;

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background: #2ecc71;
    border: 2px solid #ffffff;
    border-radius: 50%;
    right: 0;
    bottom: 0;
  }
`;

export const SellerLogo = styled.img`
  display: block;
  max-width: 100%;
`;

export const UserType = styled.span`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #8f8f8f;
  padding-bottom: 2px;
`;

export const SellerAbout = styled.div``;

export const SellerInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const SellerName = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 124%;
  letter-spacing: 0.019em;
  color: #000000;
`;

export const SellerCity = styled.div`
  display: flex;
  align-items: center;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #a7a7a7;
  margin-left: 18px;

  &::before {
    content: '';
    background: #c4c4c4;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const SellerRating = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #7a7a7a;
  margin-top: 9px;
  padding-left: 8px;
`;

export const SellerFollowers = styled.span`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #464646;
  margin: 9px 0 0 17px;
`;

export const SellerButtons = styled.div`
  margin: 20px 0 0 0;
`;

export const SellerChatBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 162px;
  height: 28px;
  border: 1px solid #c3c3c3;
  box-sizing: border-box;
  border-radius: 24px;
  background: transparent;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #545454;
  margin-left: 16px;
`;

export const SellerFollowBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 99px;
  height: 28px;
  background: #ed484f;
  border-radius: 24px;
  font-family: Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  border: none;
  line-height: 140%;
  color: #fff;
`;

export const SellerProductsNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 56px;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #000000;
  text-align: center;
  margin-bottom: 35px;
`;

export const SellerFollowersImg = styled.img`
  width: 28px;
  height: 28px;
  margin-left: -15px;
`;

export const SellerFollowersName = styled.span`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 132%;
  color: #000000;
  margin: 0 0 0 8px;
`;

export const SellerFollowersLink = styled.a`
  text-decoration: none;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 132%;
  color: #ed484f;
  margin: 0 0 0 4px;
`;

export const SellerHeading = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin: 0 0 24px 0;
`;

export const ProductInfo = styled.div`
  margin: 24px 0 8px 0;
  padding: 24px 34px;
  background: #fff;
`;

export const ProductInfoItem = styled.div``;

export const ProductInfoHeading = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 8px;
`;

export const ProductInfoText = styled.p`
  display: block;
  max-width: 700px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #363636;
`;

export const HorizontalDivider = styled.i`
  display: block;
  ${({middle}) => (middle ? 'margin: 32px 0;' : null)};
  height: 1px;
  background: #e4e4e4;
`;

export const ProductInfoBtn = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #ea2c34;
  margin-top: 16px;
  cursor: pointer;
`;

export const CustomerFeedbacks = styled.div`
  padding: 24px 32px;
  margin: 8px 0 0 0;
  background: #fff;
`;

export const CustomerFeedbacksHeading = styled.div`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  ${({number}) =>
    number
      ? `
		display: inline;
		font-weight: 400;
		color: #7A7A7A;
	`
      : null};
  ${({photos}) =>
    photos
      ? `
		display: block;
		margin: 64px 0 16px 0;
	`
      : null};
`;

export const FeedbackList = styled.div`
  padding: 0 56px;
`;

export const FeedbackCard = styled.div`
  width: 222px;
  height: 295px;
  border: 1px solid #eeeeee;
  border-radius: 3px;
`;

export const FeedbackInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px 13px;
`;

export const FeedbackAvatar = styled.div`
  margin-right: 8px;
`;

export const FeedbackCity = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
`;

export const FeedbackDate = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #999999;
`;

export const Img = styled.img``;

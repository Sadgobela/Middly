import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 999;
  transform: translateX(100%) translate3d(0px, 0px, 0px);
  transition: 0.3s;

  @media (max-width: 767px) {
    padding: 19px 16px 0;
    left: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -70vw;
    height: 200vh;
    width: 200vw;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
    transition: 0.3s;
    opacity: 0;
  }

  &.notificationBar-enter-active {
    transform: translateX(0px) translate3d(0px, 0px, 0px);

    &::before {
      opacity: 1;
    }
  }

  &.notificationBar-enter-done {
    transform: translateX(0px) translate3d(0px, 0px, 0px);

    &::before {
      opacity: 1;
    }
  }
`;

export const BarContainer = styled.div`
  position: relative;
  width: 375px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  background: #fff;

  @media (max-width: 767px) {
    width: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }
`;

export const BarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 24.5px 0 19px;
`;

export const BarHeading = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

export const BarTitle = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: #000;

  &::after {
    display: block;
    content: '';
    width: 12px;
    height: 7px;
    background: url() no-repeat center;
    background-size: contain;
  }
`;

export const NotificationsItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 16px;
`;

export const ItemDescription = styled.div`
  margin-left: 12px;
`;

export const ItemPic = styled.img`
  display: block;
  width: ${({message}) => (message ? '48px' : '40px')};
  height: ${({message}) => (message ? '48px' : '40px')};
  margin: 0 0 auto 0;
`;

export const MessageDate = styled.span`
  position: absolute;
  right: 17.5px;
  top: 8px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  color: #999;
`;

export const MessageCounter = styled.i`
  position: absolute;
  right: 16px;
  bottom: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ed484f;
  color: #fff;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  &::before {
    content: ${({count}) => (count ? `'${count}'` : null)};
  }
`;

export const UserStatus = styled.i`
  display: block;
  position: absolute;
  top: 38px;
  left: 36px;
  width: 12px;
  height: 12px;
  border-radius: 8px;
  border: 2px solid #fff;
  background: #2ecc71;
`;

export const ItemPicWrap = styled.div`
  position: relative;
`;

export const ItemHeading = styled.span`
  display: block;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: #000;
  margin-bottom: 4px;
  &::after {
    ${({info}) =>
      info
        ? `
      content: '${info}';
      margin: 0 0 0 12px;
      font-size: 14px;
      line-height: 17px;
      color: #999999;
    `
        : null}
  }
`;

export const ItemTitle = styled.span`
  display: block;
  max-width: 227px;
  font-size: 16px;
  line-height: 22px;
  color: ${({gray}) => (gray ? '#999' : '#000')};
  margin: 0 0 6px 0;
  letter-spacing: -0.016em;
  ${({message}) =>
    message
      ? `
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 243px;
  overflow: hidden;
  margin: 4px 0 0 0;
  color: #666666;
  font-size:14px;
  line-height:17px;
  `
      : null};
`;

export const PostTitle = styled.span`
  max-width: 227px;
  font-size: 14px;
  line-height: 17px;
  color: #999;
  margin: 0 4px 0 0;
  font-weight: 300;
`;

export const ItemFollowing = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 84px;
  height: 28px;
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  text-decoration: none;
  border-radius: 24px;
  color: #fff;
  margin: 0 0 0 auto;
  background: #ed484f;
  text-transform: capitalize;

  &::before {
    content: '+';
    color: #fff;
    margin-right: 10px;
  }

  ${({type}) =>
    type === 'following'
      ? `
    background: transparent;
    color: #666;
    border: 1px solid #666;
    &::before{
      content: none;
    }
    `
      : null};
`;

export const ItemReplied = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 0 0 auto;
`;

export const Cart = styled.div``;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 73px;
  padding: 15px 16px;
  border-bottom: 1px solid #e4e4e4;

  @media (max-width: 767px) {
    border-bottom: none;
  }
`;

export const CartHeading = styled.span`
  display: block;
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

export const CartCounter = styled.span`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #656565;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityTitle = styled.span`
  margin: 0 16px 0 0;
  font-size: 14px;
  line-height: 20px;
  color: #a7a7a7;
`;

export const QuantityCounter = styled.input`
  display: inline-flex;
  background: transparent;
  border: none;
  margin: 0 11px;
  width: 7px;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;

export const QuantityAdd = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 21px;
  background: #efefef;
  border: none;
  border-radius: 2px;
  outline: none;

  &::before {
    content: '+';
  }
`;

export const QuantityRemove = styled(QuantityAdd)`
  &::before {
    content: '-';
  }
`;

export const CartItemPreview = styled.img`
  display: block;
  max-width: 100%;
  width: 72px;
  height: 72px;
  align-items: center;
  margin: 0 18px 0 0;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 21px 0;
`;

export const CartPromo = styled.span`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #a7a7a7;
  margin: 3px 0 12px 0;
`;

export const CloseBtn = styled.button`
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const SubTotal = styled.span`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #a7a7a7;
`;

export const SubtotalCount = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const CartCurrency = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0 0 0;
`;

export const CartContent = styled.div`
  padding: 17px 16px 24px;
`;

export const CartCheckout = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 28px;
  font-size: 14px;
  line-height: 140%;
  border-radius: 24px;
  color: #545454;
  border: 1px solid #c3c3c3;
  background: transparent;
  outline: none;
  text-decoration: none;
`;

export const CartView = styled(CartCheckout)`
  border: none;
  color: #fff;
  background: #ed484f;
`;

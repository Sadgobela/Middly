import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 999;
  transform: translateX(100%) translate3d(0px, 0px, 0px);
  transition: 0.3s;

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
  width: 375px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  background: #fff;
`;

export const BarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 73px;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 24.5px 0 19px;
`;

export const BarHeading = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

export const BarTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;

export const NotificationsItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 80px;
  border-bottom: 1px solid #efefef;
  padding: 16px;
`;

export const ItemDescription = styled.div`
  margin: 0 0 0 12px;
`;

export const ItemPic = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

export const MessageDate = styled.span`
  position: absolute;
  right: 17.5px;
  top: 16px;
  font-size: 14px;
  line-height: 16px;
  color: #999;
`;

export const ItemHeading = styled.span`
  display: block;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #000;
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
  font-size: 14px;
  line-height: 16px;
  color: ${({gray}) => (gray ? '#999' : '#000')};
`;

export const PostTitle = styled.span`
  max-width: 227px;
  font-size: 14px;
  line-height: 17px;
  color: #999;
  margin: 0 4px 0 0;
`;

export const ItemFollowing = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 84px;
  height: 28px;
  font-size: 12px;
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
`;

export const Cart = styled.div``;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 73px;
  padding: 0 0 0 16px;
  border-bottom: 1px solid #e4e4e4;
`;

export const CartHeading = styled.span`
  display: block;
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

export const CartCounter = styled.span`
  display: block;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityTitle = styled.span`
  margin: 0 16px 0 0;
`;

export const QuantityCounter = styled.input`
  display: inline-flex;
  background: transparent;
  border: none;
  margin: 0 11px;
  width: 7px;
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

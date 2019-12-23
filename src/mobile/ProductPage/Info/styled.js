import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 0 16px 34px;
  border-bottom: 1px solid #e4e4e4;
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  margin: 0 0 4px 0;
  position: relative;
  top: 1px;
`;

export const SubName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin: 0 0 9px;
  letter-spacing: 0.4px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  i {
    margin-right: 2px;
  }
`;

export const Reviews = styled.span`
  display: inline-flex;
  padding-left: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1;
  color: #7a7a7a;
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0 0 0;
`;

export const Price = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: ${primaryColor};
  letter-spacing: -2.9px;
`;

export const OldPrice = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-decoration-line: line-through;
  color: #999999;
  margin-left: 10px;
  line-height: 1;
  position: relative;
  top: 4px;
  letter-spacing: -0.4px;
`;

export const Sale = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  color: ${primaryColor};
  margin-left: 13px;
`;

export const Coins = styled.span`
  margin-left: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1;
  text-align: right;
  color: #398287;
  position: relative;
  top: 4px;
  letter-spacing: -0.2px;

  span {
    font-size: 14px;
  }

  svg {
    stroke: #398287;
    position: relative;
    top: 1px;
  }
`;

export const Delivery = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #000000;
  display: flex;
  align-items: center;
  margin: 22px 0 0;

  span {
    font-size: 12px;
  }
`;

export const DeliveryLabel = styled.div`
  margin-right: 4px;
`;

export const DeliveryDate = styled.strong`
  color: #2a6924;
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: #e4e4e4;
  margin: 0 8px;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  opacity: ${({active}) => (active ? 1 : 0)};
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
`;

export const PopupWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  background: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100vw;
  padding: 56px 16px 16px;

  opacity: ${({active}) => (active ? 1 : 0)};
  transform: translateY(${({active}) => (active ? '0px' : '50px')});
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: -3px;
  right: 0;
  z-index: 110;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 32px;
`;

export const FormTitle = styled.h3`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 16px;

  span {
    font-weight: 500;
    font-size: 14px;
    color: #ed484f;
    margin-left: auto;
    color: ${primaryColor};
  }
`;

export const FormValues = styled.div`
  display: flex;
  margin: 0 -16px;

  .ScrollbarsCustom-Content {
    display: flex;
    padding: 0 16px !important;

    &:after {
      content: '';
      min-width: 16px;
      height: 1px;
      display: inline-flex;
    }
  }

  .TrackX {
    display: none;
  }
`;

export const FormValue = styled.div`
  height: 40px;
  border: 1px solid ${({active}) => (active ? '#000000' : '#999999')};
  padding: 0 16px;
  line-height: 38px;
  border-radius: 2px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${({active}) => (active ? '#000000' : '#999999')};
  transition: all 0.3s ease;
  box-shadow: ${({active}) => (active ? 'inset 0 0 0 1px #000' : 'inset 0 0 0 1px transparent')};
  white-space: nowrap;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

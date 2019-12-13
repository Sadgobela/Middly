import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.5);
`;

export const Added = styled.div`
  width: 450px;
  background: #fafafa;
  border-radius: 2px;
`;

export const Header = styled.div`
  background: #e4e4e4;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  padding: 30px 28px;
`;

export const Product = styled.div`
  padding: 30px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: ${({space}) => (space ? 'space-between' : 'flex-start')};
`;

export const ProductItem = styled.img`
  width: 100px;
  height: 100px;
  background: grey;
  margin-right: ${({right}) => (right ? '20px' : '0px')};
  margin-bottom: ${({right}) => (right ? '30px' : '6px')};
`;

export const Wrap = styled.div`
  display: ${({flex}) => (flex ? 'flex' : 'block')};
  justify-content: space-between;
`;

export const Price = styled.span`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  color: #dc5555;
  padding-top: ${({small}) => (small ? '0px' : '15px')};
  font-size: ${({small}) => (small ? '12px' : '14px')};
  line-height: ${({small}) => (small ? '14px' : '17px')};
`;

export const Title = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 29px;
  color: #000000;
`;

export const TocartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 184px;
  height: 40px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  outline: none;
  background: #dc5555;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-right: 22px;
`;

export const ContinueBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 184px;
  height: 40px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ed494f;
  outline: none;
  background: transparent;
  border: 1px solid #dc5555;
  border-radius: 20px;
  cursor: pointer;
`;

export const Grey = styled.div`
  height: 8px;
  background: #e4e4e4;
`;

export const Heading = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding-bottom: 24px;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;

export const ProductName = styled.span`
  display: block;
  font-family: 'SF Pro Display', sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  padding-bottom: 3px;
`;

export const Likes = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #313131;
`;

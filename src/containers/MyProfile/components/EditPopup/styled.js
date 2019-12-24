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

export const Wrap = styled.div`
  width: 566px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: #e4e4e4;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding: 19px 24px 19px 36px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CrossBtn = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const List = styled.div`
  padding: 25px 36px 47px;
`;

export const Title = styled.label`
  display: block;
  width: 109px;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #464646;
  padding: ${({last}) => (last ? '0 15px 0 0' : '10px 15px 0 0')};
`;

export const Description = styled.div`
  display: block;
  width: 369px;
  height: ${({textarea}) => (textarea ? '138px' : '40px')};
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 10px 15px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CheckBox = styled.div``;

export const Input = styled.span`
  display: block;
  width: 369px;
  font-family: Helvetica, sans-serif;
  font-weight: ${({checked}) => (checked ? '700' : '400')};
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  padding-bottom: 14px;
`;

export const Details = styled(Input)`
  display: inline;
  font-weight: ${({checked}) => (checked ? '700' : '400')};
  color: #7a7a7a;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e4e4e4;
  padding: 24px 36px;
`;

export const Group = styled.div`
  display: ${({flex}) => (flex ? 'flex' : 'block')};
  align-items: center;
`;

export const DeleteBtn = styled.button`
  width: 120px;
  height: 36px;
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #7a7a7a;
`;

export const CancelBtn = styled(DeleteBtn)`
  color: #000000;
  margin-right: 16px;
`;

export const SaveBtn = styled(DeleteBtn)`
  background: #ed484f;
  border-radius: 24px;
  color: #ffffff;
`;

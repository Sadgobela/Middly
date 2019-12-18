import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 14px -5px 0;
  width: calc(100% + 10px);
`;

export const FieldGroup = styled.div`
  margin: 0 5px;
  width: 100%;
`;

export const FieldWrapper = styled.div`
  position: relative;

  i {
    position: absolute;
    top: calc(50% - 5px);
    right: 30px;
    transform: rotate(90deg) translateY(-50%);
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 9px;
`;

export const Field = styled.input`
  width: 100%;
  outline: none;
  background: ${({active}) => (active ? '#FFFFFF' : '#FAFAFA')};
  border: 1px solid #a7a7a7;
  border-radius: 2px;
  height: 40px;
  padding: 10px 15px;
  line-height: 40px;
  color: #000;

  &:placeholder {
    color: #999999;
  }
`;

import styled from 'styled-components';

export const Label = styled.label``;

export const InputField = styled.input`
  width: 372px;
  height: 40px;
  background: transparent;
  border: 1px solid #e4e4e4;
  border-radius: 2px;
  outline: none;
`;
export const EyeIcon = styled.i`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;

  &::before {
    ${({show}) => (show ? null : 'content: ""')};
    position: absolute;
    top: 50%;
    left: 0;
    height: 30px;
    width: 2px;
    background: #8f8f8f;
    border-radius: 2px;
    transform: translate(11px, -50%) rotate(-45deg);
  }
`;

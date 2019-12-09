import styled from 'styled-components';

const Badge = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 24px;
  height: 24px;
  justify-content: center;
  background: transparent;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 20px 0 0;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 767px) {
    margin: 0 24px 0 0;
    &:last-child {
      margin-right: 0;
    }
  }

  & .badge--active path {
    fill: #ed494f;
  }

  &:hover path {
    fill: #ed494f;
  }

  &::before {
    content: ${({counter}) => (counter ? `'${counter}'` : 'none')};
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    top: -4px;
    right: -4px;
    width: 16px;
    height: 16px;
    background: #ed494f;
    border-radius: 50%;
  }
`;

export default Badge;

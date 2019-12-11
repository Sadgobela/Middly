import styled from 'styled-components';
// import theme from "../UI-kit/theme";

const Parent = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

export const AddToCart = styled(Parent)`
  width: 160px;
  height: 36px;
  border: 1px solid #ed484f;
  color: #ed484f;
  border-radius: 24px;
`;

export const Buy = styled(AddToCart)`
  background: #ed484f;
  border-radius: 24px;
  color: #fff;
`;

export const SeeMore = styled(Parent)`
  position: relative;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 3px solid #ed484f;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #000000;
  &::before {
    content: ${({withText}) => (withText ? `'See more'` : null)};
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => {
// 	if (props.red) return theme.colors.red;
// 	if (props.white) return theme.colors.white;
// 	return "white";
// }};
//   color: ${props => props.red ? "white" : "palevioletred"};
//
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 1px solid palevioletred;
//   border-radius: ${props => props.radius ? "30px" : "3px"};
//   cursor: pointer;
//   transition: all 0.3s;
//
//   &:hover {
//     opacity: 0.7;
//   }
// `;

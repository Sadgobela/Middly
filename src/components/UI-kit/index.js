import React from 'react';
import styled from 'styled-components';
import theme from "./theme";
import media from 'constants/media';

const Container = styled.div`
  padding: 40px 60px;
`;

const KitHeading = styled.h1`
  font-size: 36px;
  text-align: center;
  border-bottom: 1px solid #000;
`;

const HorizontalDevider = styled.div`
  border-bottom: 1px solid #000;
  margin: 20px 0;
`;

// Typography Styles

const Title = styled.h1`
  color: ${ props => {
    if (props.dark) return theme.colors.dark;
    if (props.doveGray) return theme.colors.doveGray;
    if (props.white) return theme.colors.white;
    if (props.text) return theme.colors.text;
  return theme.colors.black;
}};
  font-size: ${props => {
    if (props.xl) return theme.fontSize.xl;
    if (props.lg) return theme.fontSize.lg;
    if (props.md) return theme.fontSize.md;
    if (props.sm) return theme.fontSize.sm;
  return theme.fontSize.nm;
}};
  font-weight: ${props => props.thin ? "normal" : "bold"};
  text-transform: ${props => {
    if (props.capitalize) return "capitalize";
    if (props.uppercase) return "uppercase";
  return "none";
}};
  @media (max-width: ${media.mobileMax}) {
    font-size: ${props => {
      if (props.lg) return "18px";
      if (props.mdSmall) return "14px";
      return "14px";
    }};
  }
`;

const TitleH2 = Title.withComponent("h2");
const TitleH3 = Title.withComponent("h3");
const TitleH4 = Title.withComponent("h4");
const TitleH5 = Title.withComponent("h5");

const Paragraph = Title.withComponent("p");

const Text = styled(Paragraph)`
  line-height: 26px;
`;

// Button Styles

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => {
    if (props.red) return theme.colors.red;
    if (props.white) return theme.colors.white;
    return "white";
  }};
  color: ${props => props.red ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: ${props => props.radius ? "30px" : "3px"};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    opacity: 0.7;
  }
`;

export default function UIkit() {
  return (
    <Container>
      <KitHeading>UI kit</KitHeading>
      <Title xl capitalize text name="h1">Title font-size: 42px;</Title>
      <Title lg capitalize doveGray name="h1">H1 title font-size: 32px;</Title>
      <TitleH2 md dark name="h2">H2 thin Title font-size: 28px;</TitleH2>
      <TitleH3 mdSmall black name="h3">H3 Title font-size: 18px;</TitleH3>
      <TitleH4 nm black thin name="h4">H4 thin Title font-size: 16px;</TitleH4>
      <TitleH5 sm black name="h5">H5 Title font-size: 16px;</TitleH5>
      <Text nm doveGray thin name="text">Text font-size: 16px;</Text>
      <HorizontalDevider />
      <Button name="button">Normal</Button>
      <Button red name="button">Primary</Button>
      <Button red radius name="button">Primary</Button>
      <Button radius name="button">Primary</Button>
    </Container>
  );
}

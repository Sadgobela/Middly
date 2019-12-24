import styled from 'styled-components';

export const Wrap = styled.div`
  width: 300px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 24px;
`;

export const Item = styled.div`
  width: 290px;
  border-bottom: 0.5px solid #7a7a7a59;
  margin: 0 auto;
  padding: 12px 4px 8px 19px;

  :first-child {
    padding-top: 24px;
  }

  :last-child {
    border-bottom: none;
    padding-bottom: 24px;
  }
`;

export const Heading = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  padding-bottom: 8px;
`;

export const Text = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #545454;
`;

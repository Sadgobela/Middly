import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 16px;
`;

export const Row = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Label = styled.div`
  min-width: 32%;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const Value = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100vw;

  opacity: ${({active}) => (active ? 1 : 0)};
  transform: translateY(${({active}) => (active ? '0px' : '-50px')});
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 3px;
  z-index: 110;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid #efefef;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: auto;
`;

export const Content = styled.div`
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin: 0 0 16px 0;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin: 0 0 16px 0;
  }

  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin: 0;
    padding: 0;

    li {
      margin: 0 0 16px 0;
    }
  }
`;

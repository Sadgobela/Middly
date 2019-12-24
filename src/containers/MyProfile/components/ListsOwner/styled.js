import styled from 'styled-components';

export const Wrap = styled.div`
  width: 862px;
  margin: 0 0 0 36px;
`;

export const BackLink = styled.a`
  display: flex;
  align-items: center;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #545454;
  margin-bottom: 21px;
  text-decoration: none;
`;

export const Title = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 120%;
  letter-spacing: 0.011em;
  color: #000000;
`;

export const Heading = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #7a7a7a;
  padding-left: 31px;
`;

export const Text = styled.span`
  display: block;
  font-family: SF Pro Display, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #000000;
  padding: 0 0 36px 31px;
`;

export const Line = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({flexStart}) => (flexStart ? 'flex-start' : 'space-between')};
  margin-bottom: ${({marginBottom}) => (marginBottom ? '10px' : '27px')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  background: grey;
  border-radius: 50%;
  margin-left: -20px;
  margin-right: ${({last}) => (last ? '12px' : '0')};

  &:first-child {
    margin-left: 0;
  }
`;

export const Follow = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-weight: ${({thin}) => (thin ? '300' : '700')};
  font-size: 16px;
  line-height: 20px;
  color: #7a7a7a;
  padding-left: ${({thin}) => (thin ? '5px' : '0')};
`;

export const Number = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding: 2px 5px 0;
`;

export const Views = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding-left: ${({shortPadding}) => (shortPadding ? '24px' : '60px')};
`;

export const Pic = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Sale = styled.div`
  position: absolute;
  width: 45px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 12px;
  right: 7px;
  background: #f0646a;
  border-radius: 2px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 276px;
  height: 373px;
  background: #ffffff;
  border-radius: 4px;
  border: ${({empty}) => (empty ? '1px solid #E4E4E4;' : 'none')};
  margin-bottom: 24px;
`;

export const Information = styled.div`
  width: 100%;
  height: 97px;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  padding: 12px 12px 23px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Price = styled.span`
  display: inline-block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: ${({little}) => (little ? '12px' : '24px')};
  line-height: 132%;
  letter-spacing: -0.024em;
  color: ${({red}) => (red ? '#ED494F' : '#000000')};
  padding-right: ${({red}) => (red ? '5px' : '0')};
`;

export const OldPrice = styled(Price)`
  font-size: 12px;
  color: ${({red}) => (red ? '#ED494F' : ' #999999')};
  padding-right: 0;
  padding-left: ${({red}) => (red ? '0' : '5px')};
  text-decoration: ${({red}) => (red ? 'none' : 'line-through')};
`;

export const Name = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
`;

export const EditList = styled.div`
  position: absolute;
  width: 252px;
  height: 186px;
  top: ${({owner}) => (owner ? '0' : '185px')};
  left: ${({owner}) => (owner ? '' : '276px')};
  right: ${({owner}) => (owner ? '50px' : '')};
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.28);
  border-radius: 8px;
  z-index: 99;
`;

export const MoveList = styled(EditList)`
  width: 343px;
  height: auto;
`;

export const MoveFunction = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #fafafa;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  cursor: pointer;
  padding: 14px 0 14px 47px;
  color: ${({checked}) => (checked ? '#ffffff' : '#000000')};
  background: ${({checked}) => (checked ? '#ED484F' : 'transparent')};

  &:hover {
    background: #fafafa;
    font-weight: 700;
  }

  &:first-child {
    background: #fafafa;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }

  &:last-child {
    color: #000000;
    font-weight: 700;
    border-bottom: none;
  }
`;

export const MoveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 28px;
  border: none;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  cursor: pointer;
  color: ${({checked}) => (checked ? '#ffffff' : '#7A7A7A')};
  background: ${({checked}) => (checked ? '#ED484F' : '#E4E4E4')};
  border-radius: 24px;
  margin-right: 4px;
`;

export const MoveLine = styled.div`
  display: flex;
  align-items: center;
  background: #fafafa;
`;

export const Shopping = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.016em;
  color: #000000;
`;

export const FollowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99px;
  height: 28px;
  background: transparent;
  border: 1px solid #ed484f;
  border-radius: 24px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #ed484f;
  outline: none;
  cursor: pointer;
  margin-left: 63px;
`;

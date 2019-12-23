import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 24px 16px 16px;
`;

export const RatingWrapper = styled.div`
  display: flex;
`;

export const Evaluation = styled.div`
  width: 95px;
`;

export const EvaluationValue = styled.div`
  font-weight: 500;
  font-size: 52px;
  line-height: 63px;
  color: #000000;
  margin-bottom: 7px;
  margin-top: 4px;
  letter-spacing: -2.8px;

  span {
    font-size: 18px;
    line-height: 21px;
    color: #666666;
    letter-spacing: 4.2px;
  }
`;

export const EvaluationRating = styled.div`
  span {
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #666666;
    mix-blend-mode: normal;
    opacity: 0.6;
    letter-spacing: -0.1px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  i {
    margin-right: 4px;
  }
`;

export const RatingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: calc(100% - 95px);
  padding: 12px 0 0 36px;
`;

export const Row = styled.div`
  display: flex;
  align-items-center;
  width: 100%;
  
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Star = styled.div`
  width: 22px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  position: relative;
  top: 5px;
  color: #000000;

  i {
    position: relative;
    top: -9px;
    left: 3px;
  }
`;

export const Line = styled.div`
  width: calc(100% - 22px - 38px);
  height: 16px;
  background: #efefef;
  border-radius: 4px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({background}) => background || '#208C4E'};
    width: ${({progress}) => progress}%;
    border-radius: 4px;
  }
`;

export const Percent = styled.div`
  width: 38px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  text-align: right;
`;

export const Photos = styled.div`
  margin-top: 35px;
`;

export const PhotosTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  width: 100%;
  display: flex;
  align-items: center;

  span {
    margin-right: auto;
  }
`;

export const PhotosAvatar = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({image}) => image});
  margin-right: 0 !important;
  margin-left: -9px;

  ${({last, more}) => {
    if (last) {
      return `
        border: 1px solid #fff;
        position: relative;
        
        &:before {
          ${more ? `content: '+${more}';` : ``}
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 50%;
          background: linear-gradient(0deg, rgba(46, 46, 46, 0.54), rgba(46, 46, 46, 0.54));
          font-style: normal;
          font-weight: bold;
          font-size: 6px;
          z-index: 2;
          line-height: 22px;
          color: #FAFAFA;
          text-align: center;
          margin-right: 0 !important;
        }
      `;
    }
  }}
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

export const GalleryCol = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

export const GalleryItem = styled.div`
  width: ${({big}) => (big ? 'calc(100% - 10px)' : 'calc(50% - 10px)')};
  padding-bottom: ${({big}) => (big ? 'calc(100% - 10px)' : 'calc(50% - 10px)')};
  height: 0;
  margin: 5px;
  border-radius: 2px;
  border: 1px solid #efefef;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({image}) => image});

  ${({last, more}) => {
    if (last) {
      return `
        position: relative;
        
        &:before {
          ${more ? `content: '+${more}';` : ``}
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 2;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.86));
          font-size: 18px;
          line-height: 1;
          text-align: center;
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `;
    }
  }}
`;

export const FeedbackItem = styled.div`
  margin: 16px 0 0 0;
  padding: 20px 0 0;
  border-top: 1px solid #999999;
`;

export const FeedbackItemHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const FeedbackItemImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #efefef;
`;

export const FeedbackItemName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0 0 0 12px;

  span {
    display: block;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #9b9b9b;
  }
`;

export const FeedbackItemRating = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  display: flex;
  align-items: center;
  margin: 6px 0 0 0;

  > div {
    margin: 0 5px 0 0;

    i {
      margin: 0;
    }
  }
`;

export const FeedbackItemText = styled.div`
  margin: 6px 0 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  max-width: 90%;

  .ScrollbarsCustom-TrackY {
    background: rgba(155, 155, 155, 0.2) !important;
    border-radius: 3px !important;
    width: 4px !important;
  }

  .ScrollbarsCustom-ThumbY {
    background: #9b9b9b !important;
    border-radius: 3px !important;
  }

  .ScrollbarsCustom-Scroller {
    padding-right: 36px !important;
  }
`;

export const FeedbackItemFooter = styled.div`
  margin: 16px 0 0;
  display: flex;
  align-items: center;
`;

export const FeedbackItemLikes = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  display: flex;
  align-items: center;

  svg {
    width: 13px;
    height: 13px;
    fill: #333333;
    margin-right: 5px;
  }
`;

export const FeedbackItemComments = styled.div`
  margin-left: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  color: #999999;
`;

export const FeedbackItemSeeMore = styled(Link)`
  border: 1px solid #ed484f;
  border-radius: 24px;
  min-width: 99px;
  height: 28px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${primaryColor};
  margin-left: auto;
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
  left: 0;
  z-index: 110;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: #1a1a1a;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid #efefef;
  position: relative;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: auto;
`;

export const MainImage = styled.img`
  height: auto;
  width: 100%;
  max-width: calc(100% - 32px);
  margin: 10px 16px 16px;
`;

export const Thumbs = styled.div`
  margin-bottom: 16px;

  .ScrollbarsCustom-Content {
    display: flex;
    padding: 0 12px !important;

    &:after {
      content: '';
      min-width: 12px;
      height: 1px;
      display: inline-flex;
    }
  }

  .TrackX {
    display: none;
  }
`;

export const Thumb = styled.img`
  width: 72px;
  height: 72px;
  border: 1px solid #999999;
  border-radius: 2px;
  margin: 0 4px;
  object-fit: cover;
`;

export const Product = styled.div`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  padding: 9px;
  display: flex;
  margin: 0 16px 16px;
  width: calc(100% - 32px);
`;

export const ProductThumb = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 1px;
`;

export const ProductContent = styled.div`
  width: calc(100% - 74px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-left: 16px;
`;

export const ProductName = styled.p`
  width: calc(100% - 120px);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 3px 0 8px 0;
`;

export const ProductFree = styled.span`
  width: calc(100% - 100px);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 132%;
  color: #666666;
  margin: 0 0 8px 0;
`;

export const ProductButton = styled.button`
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translateY(-50%);
  width: 99px;
  height: 32px;
  background: #ed484f;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
  padding: 0 10px 0 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  color: #ffffff;
  outline: none;

  svg {
    margin-right: 10px;
    max-width: 15px;
    max-height: 15px;
  }
`;

export const FeedbackFollowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  outline: none;
  padding: 0 10px;
  height: 28px;
  min-width: 110px;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  border-radius: 24px;
  background: #fff;
  margin: 0 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  svg {
    max-width: 10px;
    max-height: 10px;
    margin-right: 10px;
  }

  ${({type}) => {
    if (type === 'primary') {
      return `
        min-width: 124px;
        border: 1px solid #666666;
        color: #666666;
      `;
    }
  }}
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  i {
    margin-right: 2px;
  }
`;

export const ProductReviews = styled.span`
  display: inline-flex;
  padding-left: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1;
  color: #7a7a7a;
`;

export const FeedbackRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;

  i {
    margin-right: 2px;
  }
`;

export const Helpful = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin: 0 10px;
  background: #f2f2f2;
  border-radius: 24px;
  border: 0;
  outline: none;
  height: 36px;
  font-weight: normal;
  font-size: 14px;
  line-height: 34px;
  color: #656565;
  padding: 0 31px;
`;

export const More = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`;

export const MoreDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #7c7e82;
  display: inline-flex;
  margin: 0 1.5px;
`;

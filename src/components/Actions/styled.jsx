import styled from 'styled-components';

export const Wrapper = styled.div`
	
`;

export const ActionButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 4px 6px 0 0;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #7c7e82;
    margin-left: 3px;
    
    &:first-child {
      margin-left: 0;
    }
  }

  ${({inline}) => {
    if (inline) {
      return `
          bottom: inherit;
          right: -10px;
          top: -10px;
        `;
    }
  }}
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 10000;
  opacity: ${({ show }) => show ? 1 : 0};
  pointer-events: none;
  transition: all .3s ease;
  display: flex;
  flex-wrap: wrap;
  
`;

export const PopupOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0,0,0,.5);
  opacity: 0;
  pointer-events: none;
  transition: all .3s ease;
  
  ${({show}) => show && `
    opacity: 1;
    pointer-events: all;
  `}
  
  ${({showSaved}) => showSaved && `
    opacity: 0;
    pointer-events: none;
  `}
`;

export const PopupContent = styled.div`
  margin: auto 10px 10px 10px;
  background: #FFFFFF;
  border-radius: 12px;
  padding: 29px 25px 13px;
  width: calc(100% - 20px);
  position: relative;
  z-index: 2;
  transition: all .3s ease;
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: ${({ show }) => show ? 'all' : 'none'};
  bottom: ${({ show }) => show ? '0' : '-100%'};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  min-height: 24px;
  cursor: pointer;
  
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const ItemLabel = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  display: flex;
  align-items: center;
  
  svg {
    stroke: #666666;
    margin-left: 12px;
  }
`;

export const ItemRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddedToWishlist = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
  display: flex;
  align-items: center;
  
  span {
    opacity: 0.8;
  }
`;

export const AddedToWishlistIcon = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #2ECC71;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    fill: #2ECC71;
    max-width: 7px;
    max-height: 6px;
  }
`;

export const IconShare = styled.span`
  svg {
    fill: #ED484F;
  }
`;

export const ItemThumb = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid #EFEFEF;
  margin-right: 12px;
  object-fit: cover;
`;

export const ItemName = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const ItemFollow = styled.button`
  margin-left: auto;
  border: 0;
  outline: none;
  background: #fff;
  width: ${({followed}) => followed ? '99px' : '82px'};
  height: 24px;
  border: 1px solid ${({followed}) => followed ? '#8F8F8F' : '#EA2C34'};
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  color: ${({followed}) => followed ? '#8F8F8F' : '#EA2C34'};
  
  svg {
    margin-right: 9px;
  }
`;

export const IconLoader = styled.span`
  margin-top: -1px;
  
  svg {
    margin: 0;
  }
`;

export const IconCheck = styled.span`
  svg {
    fill: #7A7A7A;
    max-width: 10px;
    max-height: 8px;
  }
`;

export const Title = styled.span`
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;  
  color: #000000;
  margin: 0 0 22px;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin: 0 0 14px;
  width: 100%;
  max-width: 100%;

  svg {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const Search = styled.input`
  background: #efefef;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px 0 50px;
  outline: none;
  color: #000;

  &:placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #999999;
  }
`;

export const SearchReset = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  svg {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const AddNewList = styled.button`
  outline: none;
  height: 55px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #FAFAFA;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  margin-top: 12px;
  
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  
  svg {
    width: 100px;
    height: 100px;
    max-width: 14px;
    max-height: 14px;
    margin-right: 20px;
  }
`;

export const List = styled.div`
  margin: 0 -25px;
  width: calc(100% + 50px);
  
  .ScrollbarsCustom-TrackY {
    right: 14px !important;
    width: 4px !important;
    background: rgba(155, 155, 155, .2) !important;
    border-radius: 2px !important;
  }
  
  .ScrollbarsCustom-ThumbY {
    background: #C3C3C3 !important;
    border-radius: 2px !important;
  }
`;

export const ListItem = styled.div`
  height: 53px;
  position: relative;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 0 25px;
  color: ${({checked}) => checked ? '#000' : '#666'};
  background: ${({checked}) => checked ? 'rgba(74, 144, 226, .15)' : '#fff'};
  transition: all .3s ease;
`;

export const ListItemCheck = styled.span`
  position: absolute;
  top: 50%;
  right: 26px;
  transform: translate(0, -50%);
  
  svg {
    max-width: 18px;
    max-height: 13px;
    fill: #000000;
  }
`;

export const ListItemLock = styled.span`
  margin-left: 12px;
  margin-bottom: -2px;
  
  svg {
    max-width: 16px;
    max-height: 16px;
    stroke: #666666;  
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 19px;
`;

export const FieldLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 8px;
  display: block;
`;

export const Field = styled.input`
  outline: none;
  width: 100%;
  border: 1px solid #A7A7A7;
  border-radius: 2px;
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  
  &:placeholder {
    font-size: 14px;
    line-height: 17px;
    color: #CCCCCC;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 27px;
`;

export const CreateButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 160px;
  height: 40px;
  background: #ED484F;
  border-radius: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  padding: 0;
  border: 0;
`;

export const CancelButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  cursor: pointer;
  margin-top: 24px;
  border: 0;
`;

export const SavedTo = styled.div`
  display: flex;
  align-items: center;
  
  span {
    padding: 0 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  
  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #999999;
    margin-left: auto;
  }
`;

export const SavedIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2ECC71;
  
  svg {
    max-width: 11px;
    max-height: 8px;
    fill: #2ECC71;
  }
`;
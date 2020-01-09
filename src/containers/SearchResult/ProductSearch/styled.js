import styled from 'styled-components';

export const Row = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
`;

export const StyledCategory = styled.div`
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.016em;
  color: #000000;
  margin: 13px 0;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
`;

export const PopularTags = styled.div`
  line-height: 120%;
  color: #343434;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0.013em;
  padding-bottom: 20px;
  border-bottom: 2px solid #ED4850;
`;

export const HashTag = styled.button`
  outline: none;
  margin: 0 16px 16px 0;
  border: 1px solid #C3C3C3;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #545454;
  padding: 6px 20px;
  background: #fff;
  &:hover {
    color: #000;
    border-color: #000;
  }
`;

export const TagsWrapper = styled.div``;

export const Tags = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
`;
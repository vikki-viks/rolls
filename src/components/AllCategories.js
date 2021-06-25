import styled from 'styled-components';

const CategoriesWrapper = styled.div`
  display: flex;
`;

const Categories = styled.button`
  border-radius: 14px;
  margin: 30px 30px;
  border: 0;
  padding: 7px 17px;
`;

export function AllCategories() {
  return (
    <CategoriesWrapper>
      <Categories>Все</Categories>
      <Categories>Запеченные</Categories>
      <Categories>Вегетерианские</Categories>
      <Categories>Классические</Categories>
      <Categories>Темпура</Categories>
      <Categories>Сеты</Categories>
    </CategoriesWrapper>
  );
}

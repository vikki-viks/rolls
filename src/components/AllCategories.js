import styled from 'styled-components';

const CategoriesWrapper = styled.div`
  display: flex;
`;

const Categories = styled.button`
  border-radius: 14px;
  margin: 30px 30px;
  border: 0;
  padding: 7px 17px;
  outline: 0;
  cursor: pointer;
`;

export function AllCategories({ setSelectedCategoryId }) {
  return (
    <CategoriesWrapper>
      <Categories onClick={() => setSelectedCategoryId(0)}>Все</Categories>
      <Categories onClick={() => setSelectedCategoryId(1)}>
        Запеченные
      </Categories>
      <Categories onClick={() => setSelectedCategoryId(2)}>
        Вегетерианские
      </Categories>
      <Categories onClick={() => setSelectedCategoryId(3)}>
        Классические
      </Categories>
      <Categories onClick={() => setSelectedCategoryId(4)}>Темпура</Categories>
      <Categories onClick={() => setSelectedCategoryId(5)}>Сеты</Categories>
    </CategoriesWrapper>
  );
}

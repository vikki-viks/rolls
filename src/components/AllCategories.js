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
  &.selected {
    background-color: #ff694a;
    color: white;
  }
`;

export function AllCategories({ selectedCategoryId, setSelectedCategoryId }) {
  return (
    <CategoriesWrapper>
      <Categories
        className={selectedCategoryId === 0 ? 'selected' : ''}
        onClick={() => setSelectedCategoryId(0)}
      >
        Все
      </Categories>
      <Categories
        className={selectedCategoryId === 1 ? 'selected' : ''}
        onClick={() => setSelectedCategoryId(1)}
      >
        Запеченные
      </Categories>
      <Categories
        className={selectedCategoryId === 2 ? 'selected' : ''}
        onClick={() => setSelectedCategoryId(2)}
      >
        Вегетерианские
      </Categories>
      <Categories
        className={selectedCategoryId === 3 ? 'selected' : ''}
        onClick={() => setSelectedCategoryId(3)}
      >
        Классические
      </Categories>
      <Categories
        className={selectedCategoryId === 4 ? 'selected' : ''}
        onClick={() => setSelectedCategoryId(4)}
      >
        Темпура
      </Categories>
      <Categories
        className={selectedCategoryId === 5 ? 'selected' : ''}
        onClick={() => setSelectedCategoryId(5)}
      >
        Сеты
      </Categories>
    </CategoriesWrapper>
  );
}

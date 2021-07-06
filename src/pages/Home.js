import styled from 'styled-components';
import { AllCategories } from '../components/AllCategories';
import { CardRolls } from '../components/CardRoll';
import { SortPopup } from '../components/SortPopup';

const AllRollsTitle = styled.div`
  font-size: 25px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;
export function Home({
  data,
  selectedCategoryId,
  selectedSortStatus,
  setSelectedCategoryId,
  setSelectedSortStatus,
  setRollsId,
}) {
  return (
    <>
      <AllCategories
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <CategoriesWrapper>
        <AllRollsTitle>Все роллы</AllRollsTitle>
        <SortPopup
          selectedSortStatus={selectedSortStatus}
          setSelectedSortStatus={setSelectedSortStatus}
        />
      </CategoriesWrapper>

      <CardsWrapper>
        {data
          .filter((roll) => {
            if (selectedCategoryId === 0) return true;
            return roll.categories.includes(selectedCategoryId);
          })
          .sort((roll, secondRoll) => {
            if (roll[selectedSortStatus] > secondRoll[selectedSortStatus]) {
              return 1;
            }
            if (roll[selectedSortStatus] < secondRoll[selectedSortStatus]) {
              return -1;
            }
            return 0;
          })
          .map((roll) => {
            return <CardRolls setRollsId={setRollsId} roll={roll} />;
          })}
      </CardsWrapper>
    </>
  );
}

import styled from 'styled-components';
import axios from 'axios';

import { AllCategories } from './components/AllCategories';
import { CardRolls } from './components/CardRoll';
import { Header } from './components/Header';
import { SortPopup } from './components/SortPopup';

import React from 'react';

const MainWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 40px;
`;

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

function App() {
  const [data, setData] = React.useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(0);
  const [selectedSortPopular, setSelectedSortPopular] = React.useState(true);
  const [selectedSortPrice, setSelectedSortPrice] = React.useState(false);
  const [, setSelectedSortAlphabet] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/db.json')
      .then(({ data }) => setData(data.rolls));
  }, []);

  return (
    <MainWrapper>
      <Header />
      <AllCategories
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <CategoriesWrapper>
        <AllRollsTitle>Все роллы</AllRollsTitle>
        <SortPopup
          setSelectedSortPopular={setSelectedSortPopular}
          setSelectedSortPrice={setSelectedSortPrice}
          setSelectedSortAlphabet={setSelectedSortAlphabet}
        />
      </CategoriesWrapper>

      <CardsWrapper>
        {data
          .filter((roll) => {
            if (selectedCategoryId === 0) return true;
            return roll.categories.includes(selectedCategoryId);
          })
          .sort((roll, secondRoll) => {
            if (selectedSortPopular) {
              if (roll.rating > secondRoll.rating) {
                return 1;
              }
              if (roll.rating < secondRoll.rating) {
                return -1;
              }
              return 0;
            } else if (selectedSortPrice) {
              if (roll.price > secondRoll.price) {
                return 1;
              }
              if (roll.price < secondRoll.price) {
                return -1;
              }
              return 0;
            } else {
              if (roll.name > secondRoll.name) {
                return 1;
              }
              if (roll.name < secondRoll.name) {
                return -1;
              }
              return 0;
            }
          })
          .map((roll) => {
            return <CardRolls roll={roll} />;
          })}
      </CardsWrapper>
    </MainWrapper>
  );
}

export default App;

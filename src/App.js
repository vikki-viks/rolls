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

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setData(data.rolls));
  }, []);

  return (
    <MainWrapper>
      <Header />
      <AllCategories setSelectedCategoryId={setSelectedCategoryId} />
      <CategoriesWrapper>
        <AllRollsTitle>Все роллы</AllRollsTitle>
        <SortPopup />
      </CategoriesWrapper>

      <CardsWrapper>
        {data
          .filter((roll) => {
            if (selectedCategoryId === 0) return true;
            return roll.categories.includes(selectedCategoryId);
          })
          .map((roll) => {
            return <CardRolls roll={roll} />;
          })}
      </CardsWrapper>
    </MainWrapper>
  );
}

export default App;

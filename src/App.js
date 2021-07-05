import styled from 'styled-components';
import axios from 'axios';

import { AllCategories } from './components/AllCategories';
import { CardRolls } from './components/CardRoll';
import { Header } from './components/Header';
import { SortPopup } from './components/SortPopup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  const [selectedSortStatus, setSelectedSortStatus] = React.useState('rating');
  const [rollsId, setRollsId] = React.useState([8, 7]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/db.json')
      .then(({ data }) => setData(data.rolls));
  }, []);

  return (
    <Router>
      <MainWrapper>
        <Header rollsId={rollsId} />
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
      </MainWrapper>
    </Router>
  );
}

export default App;

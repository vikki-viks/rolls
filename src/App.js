import styled from 'styled-components';
import axios from 'axios';

import { AllCategories } from './components/AllCategories';
import { CardRolls } from './components/CardRoll';
import { Header } from './components/Header';
import React, { useState } from 'react';

const MainWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const AllRollsTitle = styled.div`
  font-size: 25px;
`;

const CardsWrapper = styled.div`
  display: flex;
`;

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setData(data.rolls));
  }, []);

  return (
    <MainWrapper>
      <Header />

      <AllCategories />

      <AllRollsTitle>Все роллы</AllRollsTitle>

      <CardsWrapper>
        {data.map((roll) => {
          return <CardRolls roll={roll} />;
        })}
      </CardsWrapper>
    </MainWrapper>
  );
}

export default App;

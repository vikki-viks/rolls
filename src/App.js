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
        <CardRolls
          roll={{
            id: 0,
            imageUrl:
              'https://user-images.githubusercontent.com/77355397/123433379-13fc0a80-d5d4-11eb-9bae-15bf66339eee.png',
            name: 'Ролл Филадельфия',
            amount: [6, 8],
            price: 449,
            category: 0,
            rating: 4,
          }}
        />
      </CardsWrapper>
    </MainWrapper>
  );
}

export default App;

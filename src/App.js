import styled from 'styled-components';

import { AllCategories } from './components/AllCategories';
import { CardRolls } from './components/CardRoll';
import { Header } from './components/Header';

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
  return (
    <MainWrapper>
      <Header />

      <AllCategories />

      <AllRollsTitle>Все роллы</AllRollsTitle>

      <CardsWrapper>
        <CardRolls />
      </CardsWrapper>
    </MainWrapper>
  );
}

export default App;

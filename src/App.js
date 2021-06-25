import styled from 'styled-components';
import { CartImage } from './components/CartImage';
import { Logo } from './components/Logo';
import RollImg from './assets/img/roll1-removebg-preview.png';

const MainWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-left: 16px;
`;

const CartButton = styled.button`
  display: flex;
  border-radius: 17px;
  background-color: #ff694a;
  padding: 7px 17px;
  outline: 0;
  border: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const CartPrice = styled.div`
  margin-left: 10px;
`;

const CategoriesWrapper = styled.div`
  display: flex;
`;

const Categories = styled.button`
  border-radius: 14px;
  margin: 30px 30px;
  border: 0;
  padding: 7px 17px;
`;

const AllRollsTitle = styled.div`
  font-size: 25px;
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const CardRolls = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageRolls = styled.img`
  width: 260px;
  border-radius: 16px;
`;

const TitleRolls = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const RollsAmountWrapper = styled.div`
  border-radius: 13px;
  margin: 8px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
`;

const RollsAmount = styled.div`
  padding: 8px 33px;
`;

function App() {
  return (
    <MainWrapper>
      <Header>
        <div>
          <LogoWrapper>
            <Logo />
            <TitleWrapper>
              <div>REACT ROLLS</div>
              <div>самые вкусные роллы во вселенной</div>
            </TitleWrapper>
          </LogoWrapper>
        </div>

        <CartButton>
          <CartImage />
          <CartPrice>1347</CartPrice>
        </CartButton>
      </Header>

      <CategoriesWrapper>
        <Categories>Все</Categories>
        <Categories>Запеченные</Categories>
        <Categories>Вегетерианские</Categories>
        <Categories>Классические</Categories>
        <Categories>Темпура</Categories>
        <Categories>Сеты</Categories>
      </CategoriesWrapper>

      <AllRollsTitle>Все роллы</AllRollsTitle>

      <CardsWrapper>
        <CardRolls>
          <ImageRolls src={RollImg} />
          <TitleRolls>Ролл Филадельфия</TitleRolls>
          <RollsAmountWrapper>
            <RollsAmount>6 шт</RollsAmount>
            <RollsAmount>8 шт</RollsAmount>
          </RollsAmountWrapper>
        </CardRolls>
      </CardsWrapper>
    </MainWrapper>
  );
}

export default App;

import styled from 'styled-components';
import { CartImage } from './components/CartImage';
import { Logo } from './components/Logo';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
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
`;

const CartPriceWrapper = styled.div`
  margin-left: 10px;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  /* margin-top: 30px; */
`;
const Categories = styled.button`
  border-radius: 17px;
  margin: 30px 30px;
`;

function App() {
  return (
    <div>
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
          <CartPriceWrapper>1347</CartPriceWrapper>
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
    </div>
  );
}

export default App;

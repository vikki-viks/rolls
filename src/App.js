import styled from 'styled-components';
import { CartImage } from './components/CartImage';
import { Logo } from './components/Logo';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const LogoWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  margin-left: 16px;
`;

const CartButton = styled.button`
  display: block;
  border-radius: 17px;
  background-color: #ff694a;
  padding: 7px 17px;
  padding-left: 40px;
  outline: 0;
  border: 0;
  position: relative;
  text-align: left;
`;

function App() {
  return (
    <div>
      <Header>
        <div>
          <LogoWrapper>
            <Logo></Logo>

            <TitleWrapper>
              <div>REACT ROLLS</div>
              <div>самые вкусные роллы во вселенной</div>
            </TitleWrapper>
          </LogoWrapper>
        </div>

        <CartButton>
          <CartImage></CartImage> 1347
        </CartButton>
      </Header>
    </div>
  );
}

export default App;

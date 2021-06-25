import { CartImage } from './CartImage';
import { Logo } from './Logo';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
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

export function Header() {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
}

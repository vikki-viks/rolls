import { Cart } from '../pages/Cart';
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

export function Header({ rollsId }) {
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
      <Cart rollsId={rollsId}></Cart>
    </HeaderWrapper>
  );
}

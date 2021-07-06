import { Logo } from './Logo';
import styled from 'styled-components';
import { CartButton } from './CartButton';
import { Link } from 'react-router-dom';

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
  color: black;
  text-decoration: none;
`;

export function Header({ rollsId, data }) {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/" component="a">
          <LogoWrapper>
            <Logo />
            <TitleWrapper>
              <div>REACT ROLLS</div>
              <div>самые вкусные роллы во вселенной</div>
            </TitleWrapper>
          </LogoWrapper>
        </Link>
      </div>
      <CartButton rollsId={rollsId} data={data}></CartButton>
    </HeaderWrapper>
  );
}

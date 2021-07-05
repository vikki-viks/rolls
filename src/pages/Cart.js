import styled from 'styled-components';
import { CartImage } from '../components/CartImage';

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
  outline: 0;
  cursor: pointer;
`;

const CartPrice = styled.div`
  margin-left: 10px;
`;

export function Cart({ rollsId }) {
  return (
    <CartButton>
      <CartImage />
      <CartPrice>{rollsId}</CartPrice>
    </CartButton>
  );
}

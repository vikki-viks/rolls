import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartImage } from './CartImage';

const CartButtonWrapper = styled.button`
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

export function CartButton({ rollsId, data }) {
  function totalPrice() {
    let totalPrice = 0;
    rollsId.forEach((selId) => {
      const found = data.find(({ id }) => id === selId);
      totalPrice += found.price;
    });
    return totalPrice;
  }

  return (
    <Link to="/cart">
      <CartButtonWrapper>
        <CartImage />
        <CartPrice>{totalPrice()}</CartPrice>
      </CartButtonWrapper>
    </Link>
  );
}

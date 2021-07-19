import styled from 'styled-components';
import { CartImage } from '../components/CartImage';
import { TrashImage } from '../components/TrashImage';

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartTitle = styled.h1``;

const ClearCartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ClearCartTitle = styled.h2``;

export function Cart({ rollsId }) {
  const uniqueRollIdsWithAmount = rollsId
    .map((id, _, arr) => {
      const occ = arr.filter((arrId) => arrId === id).length;
      return { id, amount: occ };
    })
    .filter(
      (val, index, arr) => arr.findIndex(({ id }) => id === val.id) === index
    );

  return (
    <>
      <Line>
        <CartTitleWrapper>
          <CartImage isBlack></CartImage>
          <CartTitle>Корзина</CartTitle>
        </CartTitleWrapper>
        <ClearCartWrapper>
          <TrashImage></TrashImage>
          <ClearCartTitle>Очистить корзину</ClearCartTitle>
        </ClearCartWrapper>
      </Line>
    </>
  );
}

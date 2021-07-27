import styled from 'styled-components';
import { CartImage } from '../components/CartImage';
import { TrashImage } from '../components/TrashImage';
import CloseButton from '../assets/img/Group 36.png';

const AllWrapper = styled.div`
  /* width: 50%;
  height: 50%;
  position: fixed; */
  /* top: 30%; */
  /* left: 50px; */
  display: flex;
  min-height: 70vh;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;

  /* overflow: auto; */
  /* flex-wrap: wrap; */
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

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RollName = styled.div`
  display: flex;
  align-items: center;
`;

const CounterRollsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Counter = styled.button`
  border-radius: 17px;
  background-color: white;
  padding: 7px 17px;
  border: 3px solid #ff694a;
  outline: none;
`;

const AmountCounter = styled.div``;

const PriceRoll = styled.div``;

const ImageCancel = styled.img``;

const ClearCartTitle = styled.h2``;

export function Cart({ rollsId, data }) {
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
      <AllWrapper>
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

        {uniqueRollIdsWithAmount.map((roll) => {
          console.log(roll); // am + id
          // data [{id: ?, ....}, ...]
          const findRoll = data.find((r) => r.id === roll.id);
          return (
            <Line>
              <RollName>{findRoll.name}</RollName>
              <CounterRollsWrapper>
                <Counter>-</Counter>
                <AmountCounter>{roll.amount}</AmountCounter>
                <Counter>+</Counter>
              </CounterRollsWrapper>
              <PriceRoll>{findRoll.price}</PriceRoll>
              <ImageCancel src={CloseButton} alt={'close button'}></ImageCancel>
            </Line>
          );
        })}
      </AllWrapper>
    </>
  );
}

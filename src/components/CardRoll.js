import styled from 'styled-components';

const CardRollsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
`;

const ImageRolls = styled.img`
  width: 260px;
  border-radius: 16px;
`;

const TitleRolls = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  height: 50px;
`;

const RollsAmountWrapper = styled.div`
  border-radius: 13px;
  margin: 8px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  height: 30px;
`;

const RollsAmount = styled.div`
  padding: 8px 33px;
  font-size: 13px;
  outline: 0;
  cursor: pointer;
`;

const RollsPrice = styled.div`
  margin: 10px;
  height: 16px;
`;

const RollsCart = styled.button`
  padding: 8px 70px;
  border-radius: 17px;
  border: 0;
  margin-top: 8px;
  color: #ff694a;
  cursor: pointer;
  outline: 0;
  height: 36px;
`;

export function CardRolls({ roll }) {
  return (
    <CardRollsWrapper>
      <ImageRolls src={roll.imageUrl} />
      <TitleRolls>{roll.name}</TitleRolls>
      <RollsAmountWrapper>
        <RollsAmount>{roll.amount[0]} шт</RollsAmount>
        <RollsAmount>{roll.amount[1]} шт</RollsAmount>
      </RollsAmountWrapper>
      <RollsPrice>{roll.price} р </RollsPrice>
      <RollsCart>В корзину</RollsCart>
    </CardRollsWrapper>
  );
}

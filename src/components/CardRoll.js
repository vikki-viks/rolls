import styled from 'styled-components';
import RollImg from '../assets/img/roll1-removebg-preview.png';

const CardRollsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageRolls = styled.img`
  width: 260px;
  border-radius: 16px;
`;

const TitleRolls = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const RollsAmountWrapper = styled.div`
  border-radius: 13px;
  margin: 8px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
`;

const RollsAmount = styled.div`
  padding: 8px 33px;
  font-size: 13px;
`;

const RollsPrice = styled.div`
  margin: 10px;
`;

const RollsCart = styled.button`
  padding: 8px 70px;
  border-radius: 17px;
  border: 0;
  margin-top: 8px;
  color: #ff694a;
`;

export function CardRolls() {
  return (
    <CardRollsWrapper>
      <ImageRolls src="https://user-images.githubusercontent.com/77355397/123433379-13fc0a80-d5d4-11eb-9bae-15bf66339eee.png" />
      <TitleRolls>Ролл Филадельфия</TitleRolls>
      <RollsAmountWrapper>
        <RollsAmount>6 шт</RollsAmount>
        <RollsAmount>8 шт</RollsAmount>
      </RollsAmountWrapper>
      <RollsPrice>от 395 р</RollsPrice>
      <RollsCart>В корзину</RollsCart>
    </CardRollsWrapper>
  );
}

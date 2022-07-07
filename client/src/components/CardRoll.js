import React from 'react';
import Modal from 'react-modal';
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
  &.selected {
    background-color: #ff694a;
    color: white;
    border-radius: 13px;
  }
`;

const RollsPrice = styled.div`
  margin: 10px;
  height: 16px;
`;

const Space = styled.span`
  height: 47px;
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function CardRolls({ roll, setRollsId }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function addToCart() {
    setRollsId((state) => [...state, roll.id]);
    openModal();
    setTimeout(closeModal, 3000);
  }

  const [selectedAmountRolls, setSelectedAmountRolls] = React.useState(0);

  return (
    <CardRollsWrapper>
      <ImageRolls src={roll.imageUrl} />

      <TitleRolls>{roll.name}</TitleRolls>

      {roll.amount ? (
        <RollsAmountWrapper>
          <RollsAmount
            className={selectedAmountRolls === 0 ? 'selected' : ''}
            onClick={() => setSelectedAmountRolls(0)}
          >
            {roll.amount[0]} шт
          </RollsAmount>
          <RollsAmount
            className={selectedAmountRolls === 1 ? 'selected' : ''}
            onClick={() => setSelectedAmountRolls(1)}
          >
            {roll.amount[1]} шт
          </RollsAmount>
        </RollsAmountWrapper>
      ) : (
        <Space />
      )}

      <RollsPrice>
        {selectedAmountRolls === 0 ? roll.price : roll.increased} р
      </RollsPrice>

      <RollsCart onClick={addToCart}>В корзину</RollsCart>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {roll.name} добавлен в корзину!!
      </Modal>
    </CardRollsWrapper>
  );
}

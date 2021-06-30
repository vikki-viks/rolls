import React from 'react';
import styled from 'styled-components';
import { Triangle } from './Triangle';

const SortPopupWrapper = styled.div`
  position: relative;
`;

const SortButton = styled.button`
  border: 0;
  background-color: white;
  font-size: 16px;
`;

const Popup = styled.div`
  border: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
`;

const PopupButton = styled.button`
  border: 0;
  background-color: white;
  font-size: 16px;
  text-align: left;
  padding: 8px 2px;
  padding-left: 16px;
`;

export function SortPopup() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SortPopupWrapper>
      <Triangle isOpen={isOpen} />
      <SortButton onClick={() => setIsOpen(!isOpen)}>
        Сортировать по полулярности
      </SortButton>
      {isOpen && (
        <Popup>
          <PopupButton> полулярности</PopupButton>
          <PopupButton> цене</PopupButton>
          <PopupButton> алфавиту</PopupButton>
        </Popup>
      )}
    </SortPopupWrapper>
  );
}

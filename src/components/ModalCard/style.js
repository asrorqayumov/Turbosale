import styled from "styled-components";

export const ModalTitle = styled.div`
  background-color: var(--main-dark);
  height: 73px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: medium;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonClear = styled.button`
  border: none;
  color: rgb(83, 159, 213);
  background: transparent;
  cursor: pointer;
`;

export const IsEmpty = styled.div`
  text-align: center;
  padding: 30px;
`;
export const ImgEmpty = styled.img`
  width: 90px;
`;
export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: 300;
`;
export const Text = styled.p`
  font-size: 13px;
  color: rgb(119, 119, 119);
  margin: 15px ;
`;

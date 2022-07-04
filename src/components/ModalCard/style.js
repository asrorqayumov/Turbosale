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
  font-size: 24px;
  margin-bottom: 0px;
`;
export const Text = styled.p`
  font-size: 13px;
  color: rgb(119, 119, 119);
  margin: 15px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: var(--danger);
  color: #fff;
  border: 1px solid var(--danger);
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  justify-items: flex-end;
`;
export const UploadImg = styled.div`
  width: 50%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  object-fit: cover;
  border: 1px dashed;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  visibility: hidden;
`;

export const InputFile = styled.input`
  display: none;
`;
export const LabelFile = styled.label`
  text-align: center;
`;
export const RightSide = styled.div`
  width: 50%;
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-direction: column;
`;

export const BtnSubmit = styled.button`
  margin-top: auto;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`

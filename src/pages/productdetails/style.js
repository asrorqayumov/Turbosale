import styled from "styled-components";

export const WrapperDetails = styled.div`
  display: flex;
  padding: 100px 0px;
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 0;
  top: 0px;
  left: 0px;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
`;
export const ModalDialog = styled.div`
  width: 100%;
  border-radius: 0px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;
  background: rgb(255, 255, 255);
  box-shadow: var(--box-shadow);
  position: relative;
  color: rgb(66, 69, 97);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ModalContent = styled.div`
  padding: 50px;
  width: ${(props) => (props.left ? "40%" : "60%")};
  @media (max-width: 768px) {
    width: 100%;
    &:last-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:last-of-type {
    border-left: 1px solid rgb(238, 238, 238);
  }
`;
export const Img = styled.img`
  width: 100%;
  max-width: 300px;
  min-width: 260px;
  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const Title = styled.h1`
  margin: 0px 0px 10px;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const SubTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 12px 0px;
`;
export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const CountWrapper = styled.div`
  width: 120px;
  margin-right: 20px;
  background: none;
  border: 1px solid var(--main-dark);
  border-radius: 4px;
  height: 36px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  font-size: 16px;
`;

export const Button = styled.span`
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  background-color: transparent;
  cursor: pointer;
  left: auto;
  justify-content: center;
  color: var(--main-dark);
  border-width: 0px;
  padding: 0px;
  &:last-of-type {
    border-left: 1px solid;
    right: 0px;
  }
  &:first-of-type {
    border-right: 1px solid;
  }
`;
export const Input = styled.input`
  width: calc(100% - 54px);
  position: absolute;
  left: 27px;
  top: 0px;
  height: 100%;
  font-family: Lato, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background-color: transparent;
  padding: 0px;
  border-width: 0px;
  color: var(--main-dark);
  outline: none;
`;

export const Price = styled.div`
  font-size: 24px;
`;
export const AddButton = styled.button`
  max-width: 400px;
  margin-top: 50px;
  background-color: var(--orange);
  color: rgb(255, 255, 255);
  border-color: var(--orange);
  padding: 10px;
  border-radius: 3px;
  &:hover {
    background-color: var(--main-dark);
    color: var(--white);
    transition: all 0.4s ease 0s;
  }
`;

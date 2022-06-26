import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
  width: 100%;
  border-radius: 5px;
`;

export const Auth = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const ImgSide = styled.div`
  background: var(--main-dark);
`;

export const Img = styled.img`
  height: 50px;
`;
export const Text = styled.h2`
  color: var(--main-dark);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 320px;
  padding: 20px;
`;
export const Label = styled.label`
  position: relative;
  margin: 0px 0px 30px;
  z-index: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--main-dark);
  &:last-child {
    justify-content: space-between;
    border-bottom: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  padding: 2px 25px 2px 0px;
  background-color: transparent;
  border: none;
  color: var(--main-dark);
  outline: none;
  z-index: 2;
  height: 35px;
  &::placeholder {
    opacity: 0.5;
  }
`;

export const Icon = styled.span`
  font-size: 16px;
  color: var(--main-dark);
  padding-right: 3px;
`;

export const Button = styled.button``;
export const InputChekbox = styled.input`
  visibility: hidden;
`;
export const LabelCheckbox = styled.label`
  font-size:13px !important;
  position: relative;
  bottom: 12px;
  left: 10px;
  color: #a9a9a9;
  cursor: pointer;
`;

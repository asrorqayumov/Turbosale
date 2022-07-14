import styled from "styled-components";

export const CardW = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-right: 0.5px solid rgb(220, 220, 220);
  border-bottom: 0.5px solid rgb(220, 220, 220);
  padding: 15px;
  border-radius: 2px;
  transition: all 0.2s ease 0s;
  background-color: #fff;
  width: 250px;
  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const CardImgW = styled.div`
  position: relative;
`;
export const CardImg = styled.img`
  width: 100%;
`;
export const CardInfo = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const CardTitle = styled.h3`
  text-transform: capitalize;
  padding-bottom: 5px;
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
`;
export const CardPriceItem = styled.p`
  color: var(--green);
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
`;

export const CardIcon = styled.span`
  font-size: 22px;
  color: var(--orange);
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border: 0.2px solid #000;
  border-radius: 25%;
  margin-right: 10px;
`;
export const WrapperAmount = styled.div`
  display: flex;
  border: 0.1px solid #c8c2c2;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 1px;
  border-radius: 4px;
  width: 80px;
  font-size: 12px;
  margin: 0px 10px 0px 10px;
`;
export const BtnAmount = styled.span`
  cursor: pointer;
  border: none;
  padding: 0px 2px;
  height: 100%;
  width: 36px;
  background-color: transparent;
`;
export const InputAmount = styled.input`
  outline: none;
  width: 100%;
  text-align: center;
  border: none;
  padding-top: 4px;
`;
export const ButtonX = styled.button`
  cursor: pointer;
  border: none;
  margin-left: 10px;
  font-size: 12px;
  color: var(--orange);
`;

export const Title = styled.p`
  width: 20%;
`
export const Price = styled.p`
  width:15%;
 min-width:15%;
`
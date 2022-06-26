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
  &:hover{
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

export const CardPrice  = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 12px;
`
export const CardPriceItem  = styled.p`
    color:var(--green);
    font-size: 20px;
    font-weight: 700;
    margin-top: 12px;
`

export const CardIcon = styled.span`
  font-size: 22px;
  color: var(--orange);
`
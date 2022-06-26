import styled from "styled-components";

export const Img = styled.img`
  max-width: 600px;
  @media  (max-width: 850px) {
    max-width: 400px;
  }
`;
export const Slideinfo = styled.div`
  color: var(--green);
`;
export const Slidetitle = styled.h1`
  font-size: 34px;
  letter-spacing: 0.68px;
  text-transform: capitalize;
  margin-bottom: 0px;
  @media  (max-width: 850px) {
    font-size: 27px;
  }
`;
export const Slideprice = styled.p`
  margin: 30px 5px;
  letter-spacing: 0.6px;
  font-weight: bold;
  color: var(--green);
  font-size: 30px;
  @media  (max-width: 850px) {
    font-size: 25px;
  }
`;

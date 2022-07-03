import styled from "styled-components";

export const Header = styled.header`
  width: 200px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background: var(--main-dark);
  color: var(--white);
  box-shadow: var(--box-shadow);
  z-index: 50;
  overflow-y: auto;
  scroll-behavior: smooth;
  @media (max-width: 991px) {
    width: 70px;
    z-index: 9;
  }
`;

export const Logo = styled.div`
  position: sticky;
  top: 0px;
  height: 60px;
  background: var(--main-dark);
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  display: block;
  width: 90%;
  margin: auto;
  max-width: 180px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
`;
export const ListItem = styled.li`
  margin: 3px 0px;
  list-style: none;
  font-size: 16px;
  position: relative;
  color: #fff;
  &:last-of-type {
    margin-top: auto;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 991px) {
    a > span {
      display: none;
    }
    a>svg{
        font-size: 20px;
    }
  }
`;

export const Span = styled.span`
  padding-left: 8px;
`;
export const Button = styled.button`
  @media (max-width: 991px) {
    span{
        display: none;
    }
  }
`;

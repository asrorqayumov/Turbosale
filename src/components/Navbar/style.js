import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  height: 80px;
  padding:0 40px;
  background-color: #001529;
  width: 100vw;
  color: #fff;
  @media (max-width:760px ){
    justify-content: space-around;
  }
`;
export const Img = styled.img`
  width: 160px;
  @media (max-width:760px ){
    width: 150px;
  }
`;

export const ImgCircle = styled.img`
   width: 35px;
   height: 35px;
   border-radius: 50%;
`

export const Navlist = styled.ul`
  list-style: none;
  display: flex;
`;
export const NavItem = styled.li`
  padding: 0 30px;
`;
export const NavItemProfile = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const Navright = styled.div`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &>li{
    padding: 0 10px;
  }
`;
export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -12px;
  font-size:14px;
  background: #FF9800;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Role = styled.span`
  padding-left: 125px;
`
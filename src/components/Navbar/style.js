import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  height: ${(props) => (props.public ? "80px" : "60px")};
  padding: 0 ${(props) => (props.public ? "40px" : "20px")};
  background-color: ${(props) => (props.public ? "#001529" : "white")};
  box-shadow: ${(props) => (props.shadow ? "var(--box-shadow)" : "none")};
  width: 100vw;
  color: #fff;
  @media (max-width: 760px) {
    justify-content: space-around;
  }
`;
export const Img = styled.img`
  width: 160px;
  @media (max-width: 760px) {
    width: 150px;
  }
`;

export const ImgRocket = styled.img`
  width: 30px;
`;

export const ImgCircle = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const Navlist = styled.ul`
  list-style: none;
  display: flex;
`;
export const NavItem = styled.li`
  padding: 0 30px;
`;

export const Navright = styled.div`
  position: ${(props) => (props.public ? "relative" : "static")};
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  & > li {
    padding: 0 10px;
  }
`;
export const Badge = styled.span`
  position: absolute;
  top: ${(props) => (props.public ? "-10px" : "5px")};
  right: ${(props) => (props.public ? "-12px" : "10px")};
  font-size: 14px;
  background: #ff9800;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.public ? "#fff" : "#000")};
  font-size: 20px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 500px !important;
  height: 35px;
  display: inline-block;
  padding: 7px 10px 7px 20px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid var(--grey);
  background-color: var(--bg-light);
  outline: none;
  margin-left: 200px;
  &::placeholder{
    opacity: .5;
  }
  @media (max-width: 991px) {
    margin-left: 54px;
  }
  @media (max-width: 768px) {
    margin-left: 54px;
  }
`;
export const NavLeft = styled.div`
  display: flex;
    justify-content: flex-start;
    width: 660px;
    @media (max-width:991px){
      width: 400px;
    }
`;

export const ProfilInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-flow: column nowrap;
  padding-right: 5px;
`;
export const Small = styled.small`
  font-size: 12px;
  letter-spacing: 0.2px;
  word-break: keep-all;
  word-wrap: unset;
`;
export const Card = styled.div``;

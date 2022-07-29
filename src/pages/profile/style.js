import styled from "styled-components";

export const ProfileBox = styled.div`
  position: relative;
`;

export const Header = styled.header`
  position: absolute;
  left: -15px;
  top: -29px;
  width: calc(100% + 30px);
  height: 200px;
  background: url(./profilebackround.png) center center / contain repeat-x;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
  top: 60px;
  padding: 40px;
  z-index: 2;
  @media (max-width: 768px) {
    flex-direction: column;
    top: 0px;
    padding: 70px 0px;
  }
`;

export const ProfileHeader = styled.div`
  width: 220px;
  background-color: rgb(255, 255, 255);
  padding: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ProfileContent = styled.div`
  width: calc(100% - 240px);
  background-color: rgb(255, 255, 255);
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const Badge = styled.div`
  position: absolute;
  margin-top: 97px;
  margin-left: 104px;
  z-index: 1;
`;

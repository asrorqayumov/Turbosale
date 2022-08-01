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
export const ImgWrapper = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100px;
  height: 100px;
`;

export const ImgCircle = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
`;

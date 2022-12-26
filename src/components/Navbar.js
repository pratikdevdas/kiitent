import React from "react";
import styled from "styled-components";
import LogoIcon from "../DesignAGENCY.png";
import Burger from './Burger';

const PrimaryNav = styled.nav`
  height: 90px;
  background-color: #d7f5dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 calc((100vw - 1400px) / 2);
  @media (max-width: 1440px) {
    max-width: 1100px;
  margin: 0 auto ;
  }

  @media (max-width: 1200px) {
    max-width: 900px;
  margin: 0 auto ;
  }

  @media (max-width: 1000px) {
    max-width: 800px;
     margin: 0 auto ;
  }
`;

const HeaderImage = styled.img`
  height: 25%;
  @media (max-width: 768px) {
    margin: auto;
    height: 30%;
    max-width: 100vh;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
`;

const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <HeaderImage src={LogoIcon} />
        <Menu>
          <Burger/>
        </Menu>
      </PrimaryNav>
    </>
  );
};
export default Navbar;

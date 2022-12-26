import React from 'react';
import styled from 'styled-components';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 2px 2px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #0D2538; */
    position: fixed;
    align-items: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    /* padding-top: 3.5rem; */
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const MenuLink = styled.a`
  color: #000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  height: 100%;
  &.active {
    color: #000000;
  }
  border-radius: 10px;  
  padding: 0.7rem 1.3rem;
  @media (max-width: 1000px) {
    margin: 0 .4rem;
    font-size: .8rem;
  }
  @media (max-width: 768px) {
    height: 5%;
    margin: 0 10px;
    border: none;
    padding: 10px 20px;
  }
`;

const ButtonLink = styled(MenuLink)`
  border: 1.15px solid #20b15a;
  color: ${(props) => props.register && "white"};
  background-color: ${(props) => props.register && "#20B15A"};
  &:hover {
    color: black;
  }
  @media (max-width: 768px) {
    background-color: #D7F5DC;
    border: none;
    color: black;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
            <MenuLink to="/home" activeStyle>
            Services
            <MdOutlineKeyboardArrowDown/>
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About Us
          </MenuLink>
          <MenuLink to="/products" activeStyle>
            Contact Us
          </MenuLink>
          <ButtonLink to="/blog">Login</ButtonLink>
          <ButtonLink to="/blog" register>
            Register
          </ButtonLink>
    </Ul>
  )
}

export default RightNav
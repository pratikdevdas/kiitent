import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 960px) and (min-width: 770px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 3.5vw, 4.5rem);
  margin-bottom: 1rem;
  font-weight: 700;
  @media screen and (max-width: 1440px ) and (min-width: 770px) {
    font-size: clamp(1.5rem, 2.8vw, 2.5rem);
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  background: #20b15a;
  padding: 20px 30px;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
  border: none;
  &:hover {
    color: black;
  }
  @media screen and (max-width: 1100px) {
    padding: 10px 15px;
    font-size: 16px;
  }
`;

export default GlobalStyle;

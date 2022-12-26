import React from "react";
import styled from "styled-components";
import Notion from "../icons/Notion.png";
import Google from "../icons/google.png";
import Trello from "../icons/Trello.png";
import Monday from "../icons/monday.png";
import Slack from "../icons/Slack.png";
import { Container } from "../globalStyles";

const Wrapper = styled.div`
  background: white;
  /* height: 130px; */
  padding: 30px 0px;
  width: 100vw;

  @media (max-width: 1000px) {
    padding: 30px 10px;
  }
  @media (max-width: 370px) {
    padding: 30px 0px;
  }
`;

const IconWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 100%;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 1500px) {
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
  }

  @media (max-width: 500px) {
   display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
    gap: 20px;
  }

  @media (max-width: 370px) {
    display: flex;
    flex-direction: column;

  }
`;

const Icon = styled.img`
display: block;
background-color: white;
`;

const Bottom = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src={Google}></Icon>
        <Icon src={Trello}></Icon>
        <Icon src={Monday}></Icon>
        <Icon src={Notion}></Icon>
        <Icon src={Slack}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default Bottom;

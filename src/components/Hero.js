import React from "react";
import styled from "styled-components";
import Lady from "../Lady.png";
import { Button, Container, MainHeading } from "../globalStyles";

const HeroSection = styled.section`
  padding-top: clamp(20px, 2vh, 220px);
  @media (max-width: 1440px) {
    max-width: 1100px;
    margin: 0 auto;
  }
  @media (max-width: 1200px) {
    max-width: 900px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    max-width: 760px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 770px) {
    justify-content: space-between;

    flex-direction: column;
    margin: 0 auto;
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 1500px) {
    max-width: 40%;
  }
  @media (max-width: 770px) {
    max-width: 90%;
  }
`;

const ImageWrapper = styled.div`
`;

const Image = styled.img`
display: block;
  @media (max-width: 1500px) {
    display: block;
    width: 90%;
    height: 80%;
  }
`;

const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Wrapper>
          <TextWrapper>
            <MainHeading>
              Increase Your Customers Loyalty and Satisfaction
            </MainHeading>
            <HeroText>
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </HeroText>
            <Button>Get Started</Button>
          </TextWrapper>
          <ImageWrapper>
            <Image src={Lady}></Image>
          </ImageWrapper>
        </Wrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;

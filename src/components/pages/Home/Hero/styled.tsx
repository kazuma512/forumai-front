"use client";

import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  height: 825px;

  padding-top: 170px;

  background: url("assets/home-hero.png");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    background-position: 75% 50%;
  }
`;

export const Container = styled.div`
  flex: 1;

  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0px 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 425px) {
    align-items: flex-start;
  }
`;

export const MainTitle = styled.div`
  width: 780px;

  font-family: Montserrat;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;

  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 42px;
  }

  @media screen and (max-width: 560px) {
    font-size: 38px;
  }

  @media screen and (max-width: 425px) {
    text-align: left;
  }
`;

export const MainDesc = styled.div`
  width: 624px;
  margin-top: 24px;

  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;

  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 32px;
  }

  @media screen and (max-width: 425px) {
    text-align: justify;
  }
`;

export const BookBtn = styled.div`
  padding: 16px 32px;
  margin-top: 40px;
  border-radius: 100px;

  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;

  background: #33eda6;
  color: #333333;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Partners = styled.div`
  width: 100%;
  height: 143px;

  background: #155e4133;
  backdrop-filter: blur(20px);

  display: flex;
  justify-content: center;

  z-index: 1;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 36px;
    height: 166px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0px 100px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Round = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #33eda6;

  margin-right: 15px;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  flex: 1;
  margin-left: 40px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex: none;
    margin-left: 0px;

    margin-top: 26px;
  }
`;

export const Background1 = styled.div`
  position: absolute;

  top: -100px;
  left: -100px;

  width: 600px;
  height: 600px;
  opacity: 0.3;

  border-radius: 50%;
  filter: blur(167px);

  background: #33eda6;

  @media screen and (max-width: 1024px) {
    top: -200px;
    left: -200px;
  }
  @media screen and (max-width: 768px) {
    top: -300px;
    left: -300px;
  }
`;

export const Background2 = styled.div`
  position: absolute;

  bottom: -100px;
  right: -100px;

  width: 600px;
  height: 600px;
  opacity: 0.3;

  border-radius: 50%;
  filter: blur(167px);

  background: #33eda6;

  @media screen and (max-width: 1024px) {
    bottom: -200px;
    right: -200px;
  }
  @media screen and (max-width: 768px) {
    right: -300px;
  }
  @media screen and (max-width: 425px) {
    right: -400px;
  }
`;

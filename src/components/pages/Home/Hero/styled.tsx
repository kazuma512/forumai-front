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

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.div`
  width: 780px;

  font-family: Montserrat;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;

  text-align: center;
`;

export const MainDesc = styled.div`
  width: 624px;
  margin-top: 24px;

  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;

  text-align: center;
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
`;

export const Partners = styled.div`
  width: 100%;
  height: 143px;

  background: #155e4133;
  backdrop-filter: blur(20px);

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0px 100px;

  display: flex;
  align-items: center;

  z-index: 1;
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
`;
export const SwiperContainer = styled.div`
  flex: 1;
  border: 1px solid red;
`;
export const Background = styled.div`
  position: absolute;

  top: -100px;
  left: -100px;

  width: 600px;
  height: 600px;  
  opacity: 0.3;

  border-radius: 50%;
  filter: blur(167px);

  background: #33EDA6;
`;

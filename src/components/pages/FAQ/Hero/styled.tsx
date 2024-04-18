"use client";

import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  min-height: 825px;

  padding-top: 170px;
  padding-bottom: 80px;

  background: #131313;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
`;

export const MainTitle = styled.div`
  width: 780px;

  font-family: Montserrat;
  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
`;

export const MainDesc = styled.div`
  width: 624px;

  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  margin-top: 24px;
`;

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 643px;

  margin-top: 60px;
`;

export const Background1 = styled.div`
  position: absolute;

  bottom: -100px;
  right: -100px;

  width: 600px;
  height: 600px;
  opacity: 0.3;

  border-radius: 50%;
  filter: blur(167px);

  background: #33eda6;
`;

export const Background2 = styled.div`
  position: absolute;

  top: -100px;
  left: -100px;

  width: 600px;
  height: 600px;
  opacity: 0.3;

  border-radius: 50%;
  filter: blur(167px);

  background: #33eda6;
`;

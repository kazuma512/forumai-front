"use client";

import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  min-height: 655px;

  padding-top: 130px;
  padding-bottom: 70px;

  background-color: #131313;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 2;

  @media screen and (max-width: 1024px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const Title = styled.div`
  width: 100%;
  max-width: 732px;

  font-family: Poppins;
  font-size: 54px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  width: 100%;
  max-width: 808px;

  margin-top: 24px;

  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 425px) {
    text-align: justify;
  }
`;

export const BookButton = styled.div`
  margin-top: 60px;

  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #333333;

  padding: 16px 32px;
  border-radius: 100px;

  background: #33eda6;

  z-index: 1;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Effect = styled.div`
  position: absolute;

  top: -100px;
  left: -100px;

  width: 600px;
  height: 600px;

  border-radius: 50%;
  filter: blur(100px);

  background: #162331;

  @media screen and (max-width: 1024px) {
    top: -200px;
    left: -200px;
  }
  @media screen and (max-width: 768px) {
    top: -300px;
    left: -300px;
  }
`;

export const Background1 = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("/assets/home-revolutionize.png");
  background-size: cover;
  background-position: center;
  opacity: 0.6;

  z-index: 1;
`;

export const Background2 = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("/assets/home-revolutionize1.png");
  background-size: cover;
  background-position: center;
  opacity: 0.2;

  z-index: 1;
`;

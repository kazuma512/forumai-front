"use client";

import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  min-height: 622px;

  padding-top: 60px;
  padding-bottom: 80px;

  background-color: #131313;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    min-height: 580px;
  }

  @media screen and (max-width: 1024px) {
    min-height: 450px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0px 100px;

  display: flex;
  align-items: center;

  z-index: 1;

  @media screen and (max-width: 1280px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 20px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 464px;
  height: 371px;
  min-width: 464px;

  margin-right: 20px;

  @media screen and (max-width: 1280px) {
    width: 400px;
    min-width: 400px;
    height: 320px;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    min-width: 300px;
    height: 240px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    min-width: 400px;
    height: 320px;

    margin-right: 0px;
    margin-top: 60px;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
    min-width: 300px;
    height: 240px;
  }
`;
export const Main = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;

  @media screen and (max-width: 1280px) {
    font-size: 38px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileTitle = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
  }
`;

export const Desc = styled.div`
  width: 100%;
  max-width: 670px;

  margin-top: 24px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;

  @media screen and (max-width: 1280px) {
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
export const DetailBox = styled.div`
  margin-top: 40px;

  display: flex;

  & > :not(:last-child) {
    margin-right: 64px;
  }

  @media screen and (max-width: 1280px) {
    & > :not(:last-child) {
      margin-right: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    & > :not(:last-child) {
      margin-right: 10px;
      margin-left: 10px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
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

export const Background = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("/assets/home-solution.png");
  background-size: cover;
  background-position: center;
  opacity: 0.28;

  z-index: 1;
`;

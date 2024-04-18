"use client";

import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  height: 622px;

  padding-top: 60px;

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
  align-items: center;

  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 464px;
  height: 371px;
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
`;
export const Desc = styled.div`
  width: 670px;

  margin-top: 24px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;
export const DetailBox = styled.div`
  margin-top: 40px;

  display: flex;

  & > :not(:last-child) {
    margin-right: 64px;
  }
`;

export const Effect1 = styled.div`
  position: absolute;

  top: -100px;
  left: -100px;

  width: 600px;
  height: 600px;

  border-radius: 50%;
  filter: blur(167px);

  background: #162331;
`;

export const Effect2 = styled.div`
  position: absolute;

  top: -200px;
  right: -100px;

  width: 600px;
  height: 600px;

  border-radius: 50%;
  filter: blur(167px);
  opacity: 0.22;

  background: #33EDA6;
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

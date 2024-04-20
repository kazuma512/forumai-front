"use client";

import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  height: 690px;

  padding-top: 70px;

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

  z-index: 1;
`;

export const Title = styled.div`
  font-family: Poppins;

  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: #33eda6;
`;
export const Content = styled.div`
  margin-top: 10px;

  width: 100%;
  max-width: 600px;

  font-family: Poppins;
  font-size: 34px;
  font-weight: 600;
  line-height: 37.4px;
  text-align: center;
`;
export const DetailBox = styled.div`
  margin-top: 10px;

  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailItem = styled.div`
  font-family: Poppins;
  font-size: 19px;
  font-weight: 400;
  line-height: 28.5px;
  text-align: left;
`;

export const SolutionBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`;

export const Effect = styled.div`
  position: absolute;

  top: -100px;
  left: -100px;

  width: 600px;
  height: 600px;

  border-radius: 50%;
  filter: blur(167px);

  background: #162331;
`;

export const Background = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("/assets/home-our.png");
  background-size: cover;
  background-position: center;
  opacity: 0.28;

  z-index: 1;
`;

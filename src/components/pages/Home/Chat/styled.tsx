"use client";

import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  min-height: 438px;

  background: #020210;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Background = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("/assets/home-chat.png");
  background-size: cover;
  background-position: center;
  opacity: 0.5;

`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 64px;
  font-weight: 700;
  line-height: 70.4px;
  text-align: center;

  span {
    color: #33eda6;
  }

  z-index: 1;

  @media screen and (max-width: 1280px) {
    font-size: 56px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
`;

export const Contact = styled.div`
  margin-top: 24px;

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

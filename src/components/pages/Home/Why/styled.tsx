"use client";

import styled from "styled-components";
//-------------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  min-height: 665px;

  background-color: #131313;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 665px;

  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    width: 100%;
    min-height: 665px;
  }

  z-index: 2;
`;

export const Background1 = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("/assets/home-why.png");
  background-size: cover;
  background-position: center;

  z-index: 1;
`;

export const Background2 = styled.div`
  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 100px;

  background: linear-gradient(180deg, rgba(21, 26, 24, 0) 0%, #151c19 100%);
  z-index: 3;
`;

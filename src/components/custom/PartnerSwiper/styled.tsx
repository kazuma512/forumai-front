"use client";

import styled from "styled-components";

//--------------------------------------------------------------------

export const Layout = styled.div`
  position: absolute;

  width: 100%;

  margin-top: -18px;

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  width: 100%;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    min-width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer1 = styled.div`
  position: relative;
  width: 194px;
  height: 36px;
`;
export const ImageContainer2 = styled.div`
  position: relative;
  width: 157px;
  height: 36px;
`;
export const ImageContainer3 = styled.div`
  position: relative;
  width: 120px;
  height: 36px;
`;
export const ImageContainer4 = styled.div`
  position: relative;
  width: 180px;
  height: 36px;
`;

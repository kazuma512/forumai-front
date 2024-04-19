"use client";

import styled from "styled-components";

//-------------------------------------------------------

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Num = styled.div`
  font-family: Poppins;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;

  color: #33eda6;
  
  @media screen and (max-width: 1280px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Title = styled.div`
  margin-top: 4px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }

`;

"use client";

import styled from "styled-components";

//-------------------------------------------------------

export const Layout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

export const ImageContainer = styled.div`
  position: relative;

  width: 78px;
  height: 78px;
  min-width: 78px;
  min-height: 78px;
`;

export const Title = styled.div`
  margin-top: 24px;

  width: 300px;

  font-family: Poppins;
  font-size: 25px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
`;

export const Detail = styled.span`
  margin-top: 24px;

  font-family: Poppins;
  font-size: 19px;
  font-weight: 400;
  line-height: 28.5px;
  text-align: left;
`;

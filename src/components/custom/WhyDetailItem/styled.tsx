"use client";

import styled from "styled-components";

//-------------------------------------------------------

export const Layout = styled.div`
  display: flex;
  align-items: center;
`;

export const Round = styled.div`
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  border-radius: 50%;
  background: #33eda6;
  margin-right: 16px;
`;

export const Title = styled.div`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  text-align: left;
`;

export const Detail = styled.span`
  font-family: Poppins;
  font-size: 19px;
  font-weight: 400;
  line-height: 28.5px;
  text-align: left;
`;

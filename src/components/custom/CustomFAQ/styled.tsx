"use client";

import styled from "styled-components";
//--------------------------------------------------

export const Layout = styled.div`
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const ItemContainer = styled.div`
  padding-bottom: 14px;
  border-bottom: 1px dashed #f6f8f9;
`;
export const TitleContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  font-family: Poppins;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
`;
export const IconContainer = styled.div<{ active: boolean }>`
  font-size: 35px;
  transition: all 0.2s;

  ${(props) =>
    props.active ? "transform: rotate(45deg)" : "transform: rotate(0deg)"};
`;

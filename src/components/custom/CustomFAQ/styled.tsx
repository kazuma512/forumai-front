"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

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

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const IconContainer = styled.div<{ active: boolean }>`
  font-size: 35px;
  transition: all 0.2s;

  ${(props) =>
    props.active ? "transform: rotate(45deg)" : "transform: rotate(0deg)"};

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Section = styled(motion.section)`
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

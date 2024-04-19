"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";

//-------------------------------------------------------

export const Layout = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;

  width: 100%;

  display: flex;
  justify-content: center;

  z-index: 1000;

  background-color: ${(props) =>
    props.isScrolled ? "rgba(0, 0, 0, 0.4)" : "transparent"};
  box-shadow: ${(props) =>
    props.isScrolled ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};

  backdrop-filter: ${(props) => props.isScrolled && "blur(10px)"};

  transition: background-color 0.3s;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 40px 100px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 40px 50px 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

export const LogoContainer = styled.div`
  position: relative;

  width: 223px;
  height: 34px;

  @media screen and (max-width: 1024px) {
    width: 180px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 40px;
  }

  @media screen and (max-width: 1024px) {
    & > :not(:last-child) {
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  transition: all 0.3s;

  color: ${(props) => (props.active ? "#33EDA6" : "white")};
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`;

export const MobileMenuButton = styled.div<{ open: boolean }>`
  display: none;

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    transition: all 0.3s;

    div {
      width: 100%;
      height: 3px;
      background: white;
      transition: all 0.3s;
    }

    :nth-child(2) {
      width: 70%;
    }

    ${(props) =>
      props.open &&
      `
    :nth-child(2) {
      display: none;
    }
    
    :nth-child(1) {
      transform: rotate(45deg) translateY(12px);
    }
    
    :nth-child(3) {
      transform: rotate(-45deg) translateY(-12px);
    }
    `}
  }
`;

export const MobileMenuLayout = styled.div<{ open: boolean }>`
  position: absolute;
  top: 94px;
  left: 0;

  width: 100vw;
  height: calc(100vh - 94px);

  background: #080808;

  transition: all 0.3s;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  opacity: ${(props) => (props.open ? "1" : "0")};

  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileMenu = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > :not(:last-child) {
    margin-bottom: 25px;
  }
`;

const breatheAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MobileMenuItem = styled.div<{
  active: boolean;
  open: boolean;
  delay: number;
}>`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;

  transition: all 0.3s;

  color: ${(props) => (props.active ? "#33EDA6" : "white")};

  opacity: 0;
  transform: translateX(-100%);

  animation-name: ${(props) => (props.open ? breatheAnimation : ``)};
  animation-delay: ${(props) => (props.delay ? props.delay + "s" : `0s`)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  z-index: 1;
`;

export const MobileBackground = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};

  position: absolute;

  top: 0;
  left: calc(50% - 550px);

  width: 1100px;
  height: 1100px;

  opacity: 0.08;

  border-radius: 50%;
  filter: blur(100px);

  background: #33eda6;
`;

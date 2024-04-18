"use client";

import styled from "styled-components";

//-------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  background: #010203;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 40px 100px;

  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    padding: 40px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const LogoContainer = styled.div`
  position: relative;

  width: 223px;
  height: 34px;

  @media screen and (max-width: 1024px) {
    width: 180px;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
  }

  @media screen and (max-width: 375px) {
    width: 250px;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 40px;
  }

  @media screen and (max-width: 1024px) {
    & > :not(:last-child) {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    & > :not(:last-child) {
      margin-right: 40px;
    }
  }

  @media screen and (max-width: 375px) {
    & > :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const MenuItem = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 900px) {
    & > :not(:last-child) {
      margin-right: 25px;
    }
  }
`;

export const SocialItem = styled.div`
  width: 42px;
  height: 42px;

  border-radius: 50%;
  border: 1px solid white;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 900px) {
    width: 42px;
    height: 42px;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #ffffff66;
`;

export const License = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    & > :not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

export const Copy = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  @media screen and (max-width: 372px) {
    font-size: 12px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 16px;
  }
`;

export const Terms = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  @media screen and (max-width: 372px) {
    font-size: 12px;
  }
`;

export const Round = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffffff66;
`;

export const Policy = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media screen and (max-width: 372px) {
    font-size: 12px;
  }
`;

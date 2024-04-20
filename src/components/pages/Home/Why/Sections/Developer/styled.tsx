"use client";

import styled from "styled-components";

//-----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 665px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1440px;

  padding: 0px 60px 0px 100px;

  @media screen {
    padding: 0px 30px 0px 50px;
  }
`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-family: Poppins;
  font-size: 54px;
  font-weight: 600;
  line-height: 72px;
  text-align: left;

  margin-bottom: 24px;

  @media screen and (max-width: ){
    
  }
`;
export const Role = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;

  color: #33eda6;

  margin-bottom: 30px;
`;
export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 545px;
  height: 641px;
  min-width: 545px;
  min-height: 641px;
`;

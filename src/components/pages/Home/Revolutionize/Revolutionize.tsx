"use client";

import React, { useState } from "react";

// styled
import * as S from "./styled";

//---------------------------------------------------------------------

const Revolutionize = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.Title>
          Performance. Scalability.
          <br /> Cost-effectiveness.
        </S.Title>
        <S.Desc>
          Whether you're an enterprise in search of a decentralized machine
          learning model, or a data center contributing to a powerful AI
          network, ForumAI marketplace is the perfect solution for you.
        </S.Desc>
        <S.BookButton>Book A Demo</S.BookButton>
      </S.Container>
      <S.Effect />
      <S.Background1 />
      <S.Background2 />
    </S.Layout>
  );
};

export default Revolutionize;

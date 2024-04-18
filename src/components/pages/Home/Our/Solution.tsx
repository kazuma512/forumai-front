"use client";

import React, { useState } from "react";
import Image from "next/image";

// styled
import * as S from "./styled";

// components
import DetailItem from "@/components/custom/DetailItem/DetailItem";

//---------------------------------------------------------------------

const Solution = () => {
  const [detail, setDetail] = useState([
    { num: "24K+", title: "Happy Customers" },
    { num: "320K+", title: "Models Supported" },
    { num: "160K+", title: "Total Integrations" },
  ]);

  return (
    <S.Layout>
      <S.Container>
        <S.ImageContainer>
          <Image src="/assets/home-solution-main.png" alt="No Solution" fill />
        </S.ImageContainer>
        <S.Main>
          <S.Title>The One Stop AI Solution</S.Title>
          <S.Desc>
            ForumAI uses advanced 'model markets' smart contracts to streamline
            authorization, payments and access to open-source machine learning
            models. With a five-minute setup using a single SDK and wallet,
            users can integrate any model into their existing systems and
            applications.
          </S.Desc>
          <S.DetailBox>
            {detail.map((item, index) => (
              <DetailItem key={index} title={item.title} num={item.num} />
            ))}
          </S.DetailBox>
        </S.Main>
      </S.Container>
      <S.Effect />
      <S.Background />
    </S.Layout>
  );
};

export default Solution;

"use client";

import React, { useState } from "react";
import Image from "next/image";

// styled
import * as S from "./styled";

// components
import DetailItem from "@/components/custom/DetailItem/DetailItem";

//---------------------------------------------------------------------

const Gaming = () => {
  const [detail, setDetail] = useState([
    { num: "24K+", title: "Happy Customers" },
    { num: "320K+", title: "Models Supported" },
    { num: "160K+", title: "Total Integrations" },
  ]);

  return (
    <S.Layout>
      <S.Container>
        <S.Main>
          <S.Title>For Web3 gaming and beyond</S.Title>
          <S.Desc>
            Web3 gaming requires low-latency for real-time interaction and
            seamless play, which ForumAI supports with decentralized nodes for
            robust performance and direct connections for efficient data flow,
            enhancing gaming environments.
          </S.Desc>
          <S.DetailBox>
            {detail.map((item, index) => (
              <DetailItem key={index} title={item.title} num={item.num} />
            ))}
          </S.DetailBox>
        </S.Main>
        <S.ImageContainer>
          <Image src="/assets/home-solution-main.png" alt="No Solution" fill />
        </S.ImageContainer>
      </S.Container>
      <S.Effect1 />
      <S.Effect2 />
      <S.Background />
    </S.Layout>
  );
};

export default Gaming;

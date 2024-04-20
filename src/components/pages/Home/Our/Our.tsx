"use client";

import React, { useState } from "react";
import Image from "next/image";

// styled
import * as S from "./styled";
import { Title, Content, DetailBox, DetailItem, SolutionBox } from "./styled";

// components
import SolutionItem from "@/components/custom/SolutionItem/SolutionItem";

// constant
import { SolutionData } from "@/constants/solution";

//---------------------------------------------------------------------

const Our = () => {
  return (
    <S.Layout>
      <S.Container>
        <Title>Our Solutions</Title>
        <Content>
          ForumAI: Decentralized Machine Learning Model Market Place
        </Content>
        <DetailBox>
          <DetailItem>Built on SKALE : Titan AI Hub</DetailItem>
          <DetailItem>
            Model Markets: Mixtral8x7B, Illama 2 (Coming soon)
          </DetailItem>
          <DetailItem>
            Proof-of-stake consensus mechanism and validators system
          </DetailItem>
        </DetailBox>
        <SolutionBox>
          {SolutionData.map((item, index) => (
            <SolutionItem
              image={item.image}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </SolutionBox>
      </S.Container>
      <S.Effect />
      <S.Background />
    </S.Layout>
  );
};

export default Our;

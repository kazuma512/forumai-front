import React from "react";

// styled
import * as S from "./styled";

// component
import PartnerSwiper from "@/components/custom/PartnerSwiper/PartnerSwiper";

//---------------------------------------------------------------------

const Hero = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.Main>
          <S.MainTitle>Decentralized Machine Learning Inference</S.MainTitle>
          <S.MainDesc>
            Access the most powerful open-source machine learning models on
            ForumAI’s market place,
            hosted by data centers around the world
          </S.MainDesc>
          <S.BookBtn>Book A Demo</S.BookBtn>
        </S.Main>
      </S.Container>
      <S.Partners>
        <S.MainContainer>
          <S.TitleContainer>
            <S.Round />
            <S.Title>Trusted by great Partners</S.Title>
          </S.TitleContainer>
          <S.SwiperContainer>
            <PartnerSwiper />
          </S.SwiperContainer>
        </S.MainContainer>
      </S.Partners>
      <S.Background1 />
      <S.Background2 />
    </S.Layout>
  );
};

export default Hero;

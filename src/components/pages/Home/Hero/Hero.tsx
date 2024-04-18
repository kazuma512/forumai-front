import React from "react";

// styled
import * as S from "./styled";

//---------------------------------------------------------------------

const Hero = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.Main>
          <S.MainTitle>Decentralized Machine Learning Inference</S.MainTitle>
          <S.MainDesc>
            Access the most powerful open-source machine learning models on
            ForumAI’s market place, <br />
            hosted by data centers around the world
          </S.MainDesc>
          <S.BookBtn>Book A Demo</S.BookBtn>
        </S.Main>
      </S.Container>
      <S.Partners>
        <S.Container>
          <S.TitleContainer>
            <S.Round />
            <S.Title>Trusted by great Partners</S.Title>
          </S.TitleContainer>
          <S.SwiperContainer></S.SwiperContainer>
        </S.Container>
      </S.Partners>
      <S.Background />
    </S.Layout>
  );
};

export default Hero;

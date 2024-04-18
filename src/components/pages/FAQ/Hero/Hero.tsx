import React from "react";

// styled
import * as S from "./styled";

// components
import CustomFAQ from "@/components/custom/CustomFAQ/CustomFAQ";

// constants
import { FAQData } from "@/constants/faq";

//---------------------------------------------------------------------

const Hero = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.MainTitle>Frequently Asked Questions</S.MainTitle>
        <S.MainDesc>
          Our platform revolutionizes the way AI models are deployed, offering a
          scalable, decentralized marketplace designed specifically for
          enterprise-grade machine learning inference.
        </S.MainDesc>
        <S.FAQContainer>
          <CustomFAQ data={FAQData} />
        </S.FAQContainer>
      </S.Container>
      <S.Background1 />
      <S.Background2 />
    </S.Layout>
  );
};

export default Hero;

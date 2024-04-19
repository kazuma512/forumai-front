import React from "react";
import Image from "next/image";

// styled
import * as S from "./styled";

//-----------------------------------------------------
const SolutionItem: React.FC<{
  image: string;
  title: string;
  detail: string;
}> = ({ image, title, detail }) => {
  return (
    <S.Layout>
      <S.ImageContainer>
        <Image src={image} alt="No SolutionItem" fill />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.Detail>{detail}</S.Detail>
    </S.Layout>
  );
};

export default SolutionItem;

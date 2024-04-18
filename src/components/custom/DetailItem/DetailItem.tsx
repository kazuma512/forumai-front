import React from "react";

// styled
import * as S from "./styled";

//-----------------------------------------------------

const DetailItem: React.FC<{ title: string; num: string }> = ({
  title,
  num,
}) => {
  return (
    <S.Layout>
      <S.Num>{num}</S.Num>
      <S.Title>{title}</S.Title>
    </S.Layout>
  );
};

export default DetailItem;

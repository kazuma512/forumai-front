import React from "react";

// styled
import * as S from "./styled";

//-----------------------------------------------------

const WhyDetailItem: React.FC<{ title: string; detail: string }> = ({
  title,
  detail,
}) => {
  return (
    <S.Layout>
      <S.Round />
      <S.Title>
        {title} <S.Detail>{detail}</S.Detail>
      </S.Title>
    </S.Layout>
  );
};

export default WhyDetailItem;

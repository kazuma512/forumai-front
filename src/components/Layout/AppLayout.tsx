import React from "react";

// components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// styled
import * as S from "./styled";

//------------------------------------------------
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Layout>
  );
};

export default AppLayout;

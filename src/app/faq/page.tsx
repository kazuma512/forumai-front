import Image from "next/image";

// styled
import * as S from "./styled";

// sections
import Hero from "@/components/pages/FAQ/Hero/Hero";

//--------------------------------------------------

export default function Home() {
  return (
    <S.Layout>
      <Hero />
    </S.Layout>
  );
}

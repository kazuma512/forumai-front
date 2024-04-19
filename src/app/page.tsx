// styled
import * as S from "./styled";

// sections
import {
  Hero,
  Solution,
  Gaming,
} from "@/components/pages/Home";

//--------------------------------------------------

export default function Home() {
  return (
    <S.Layout>
      <Hero />
      <Solution />
      <Gaming />
    </S.Layout>
  );
}

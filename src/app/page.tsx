// styled
import * as S from "./styled";

// sections
import {
  Hero,
  Solution,
  Gaming,
  Why,
  Our,
  Revolutionize,
  Chat,
} from "@/components/pages/Home";

//--------------------------------------------------

export default function Home() {
  return (
    <S.Layout>
      <Hero />
      <Solution />
      <Gaming />
      <Why />
      <Our />
      <Revolutionize />
      <Chat />
    </S.Layout>
  );
}

import React from "react";
import Image from "next/image";

// styled
import {
  Layout,
  Container,
  MainContainer,
  Title,
  Role,
  DetailBox,
  ImageContainer,
} from "./styled";

// constant
import { WhyDetailEnterpriseData } from "@/constants/why";

// component
import WhyDetailItem from "@/components/custom/WhyDetailItem/WhyDetailItem";

//-----------------------------------------------------------

const Enterprise = () => {
  return (
    <Layout>
      <Container>
        <MainContainer>
          <Title>Why ForumAI?</Title>
          <Role>For Enterprise:</Role>
          <DetailBox>
            {WhyDetailEnterpriseData.map((item, index) => (
              <WhyDetailItem
                key={index}
                title={item.title}
                detail={item.detail}
              />
            ))}
          </DetailBox>
        </MainContainer>
        <ImageContainer>
          <Image src="/assets/why-enterprise.png" alt="No Enterprise" fill />
        </ImageContainer>
      </Container>
    </Layout>
  );
};

export default Enterprise;

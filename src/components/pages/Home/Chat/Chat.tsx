import React from "react";

// styled
import { Layout, Background, Title, Contact } from "./styled";

//-------------------------------------------------------------

const Chat = () => {
  return (
    <Layout>
      <Title>
        Let’s <span>Chat!</span>
      </Title>
      <Contact>Contact Us</Contact>
      <Background />
    </Layout>
  );
};

export default Chat;

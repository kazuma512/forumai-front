"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// types
import { FAQItem } from "@/types/components";

// styled
import {
  Layout,
  ItemContainer,
  TitleContainer,
  Title,
  IconContainer,
} from "./styled";

//-----------------------------------------------------------------

const CustomFAQ: React.FC<{ data: FAQItem[] }> = ({ data }) => {
  const [open, setOpen] = useState(0);

  return (
    <Layout>
      {data.map((item, index) => (
        <ItemContainer key={index}>
          <TitleContainer
            onClick={() => {
              if (index + 1 === open) {
                setOpen(0);
              } else {
                setOpen(index + 1);
              }
            }}
          >
            <Title>{item.title}</Title>
            <IconContainer active={index + 1 === open}>&#x2B;</IconContainer>
          </TitleContainer>
          <AnimatePresence initial={false}>
            {open === index + 1 && (
              <motion.section
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "12px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "1.3",
                  textAlign: "left",
                }}
              >
                {item.content}
              </motion.section>
            )}
          </AnimatePresence>
        </ItemContainer>
      ))}
    </Layout>
  );
};

export default CustomFAQ;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// types
import { FAQItem } from "@/types/components";

// styled
import * as S from "./styled";

//-----------------------------------------------------------------

const CustomFAQ: React.FC<{ data: FAQItem[] }> = ({ data }) => {
  const [open, setOpen] = useState(0);

  return (
    <S.Layout>
      {data.map((item, index) => (
        <S.ItemContainer key={index}>
          <S.TitleContainer
            onClick={() => {
              if (index + 1 === open) {
                setOpen(0);
              } else {
                setOpen(index + 1);
              }
            }}
          >
            <S.Title>{item.title}</S.Title>
            <S.IconContainer active={index + 1 === open}>
              &#x2B;
            </S.IconContainer>
          </S.TitleContainer>
          <AnimatePresence initial={false}>
            {open === index + 1 && (
              <S.Section
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "12px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {item.content}
              </S.Section>
            )}
          </AnimatePresence>
        </S.ItemContainer>
      ))}
    </S.Layout>
  );
};

export default CustomFAQ;

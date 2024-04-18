"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// styled
import * as S from "./styled";

// hooks
import UseScrollPosition from "@/hooks/UseScrollPosition";

// constants
import { HeaderMenuData } from "@/constants/menu";

//-----------------------------------------------------

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isScrolled = UseScrollPosition(50);

  const [open, setOpen] = useState(false);

  return (
    <S.Layout isScrolled={isScrolled}>
      <S.Container>
        <S.LogoContainer>
          <Image src="/assets/Logo.png" alt="No Logo" fill />
        </S.LogoContainer>
        <S.HeaderMenu>
          {HeaderMenuData.map((item, index) => (
            <S.MenuItem
              active={item.path === pathname}
              key={index}
              href={item.path}
            >
              {item.text}
            </S.MenuItem>
          ))}
        </S.HeaderMenu>
        <S.MobileMenuButton
          open={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </S.MobileMenuButton>
      </S.Container>
      <S.MobileMenuLayout open={open}>
        <S.MobileMenu>
          {HeaderMenuData.map((item, index) => (
            <S.MobileMenuItem
              active={item.path === pathname}
              key={index}
              open={open}
              delay={0.3 * (index + 1)}
              onClick={() => {
                setOpen(false);
                router.push(item.path);
              }}
            >
              {item.text}
            </S.MobileMenuItem>
          ))}
          <S.MobileBackground />
        </S.MobileMenu>
      </S.MobileMenuLayout>
    </S.Layout>
  );
};

export default Header;

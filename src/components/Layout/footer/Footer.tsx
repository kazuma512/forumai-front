import React from "react";
import Image from "next/image";

// styled
import * as S from "./styled";

// icon
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

//-----------------------------------------------------

const Footer = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.Main>
          <S.LogoContainer>
            <Image src="/assets/Logo.png" alt="No Logo" fill />
          </S.LogoContainer>
          <S.FooterMenu>
            <S.MenuItem>Home</S.MenuItem>
            <S.MenuItem>Features</S.MenuItem>
            <S.MenuItem>Contact Us</S.MenuItem>
          </S.FooterMenu>
          <S.SocialBox>
            <S.SocialItem>
              <RiInstagramFill size={20} />
            </S.SocialItem>
            <S.SocialItem>
              <FaFacebookF size={20} />
            </S.SocialItem>
            <S.SocialItem>
              <FaTwitter size={20} />
            </S.SocialItem>
          </S.SocialBox>
        </S.Main>
        <S.Line />
        <S.License>
          <S.Copy>Copyright @2024 ForumAI. All Right Reserved</S.Copy>
          <S.TextBox>
            <S.Terms>Terms & Conditions</S.Terms>
            <S.Round />
            <S.Policy>Privacy Policy</S.Policy>
          </S.TextBox>
        </S.License>
      </S.Container>
    </S.Layout>
  );
};

export default Footer;

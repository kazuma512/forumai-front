"use client";

import React from "react";
import Image from "next/image";

// styled
import * as S from "./styled";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//----------------------------------------------------------

const PartnerSwiper = () => {
  return (
    <S.Layout>
      <S.Container>
        <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={40}
          breakpoints={{
            375: {
              slidesPerView: 1.8,
              spaceBetween: 20,
              centeredSlides: true,
            },
            560: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1120: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide>
            <S.ImageContainer1>
              <Image src="/assets/coinbase.png" alt="No Coinbase" fill />
            </S.ImageContainer1>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageContainer2>
              <Image src="/assets/sequoia.png" alt="No Coinbase" fill />
            </S.ImageContainer2>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageContainer3>
              <Image src="/assets/binance.png" alt="No Coinbase" fill />
            </S.ImageContainer3>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageContainer4>
              <Image src="/assets/combinator.png" alt="No Coinbase" fill />
            </S.ImageContainer4>
          </SwiperSlide>
        </Swiper>
      </S.Container>
    </S.Layout>
  );
};

export default PartnerSwiper;

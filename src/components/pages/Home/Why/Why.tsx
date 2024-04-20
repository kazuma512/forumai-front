"use client";

import React, { useState } from "react";

// styled
import * as S from "./styled";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// sections
import { Enterprise, Developer, DataCenters } from "./Sections";

//---------------------------------------------------------------------

const Why = () => {
  return (
    <S.Layout>
      <S.Container>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Enterprise />
          </SwiperSlide>
          <SwiperSlide>
            <Developer />
          </SwiperSlide>
          <SwiperSlide>
            <DataCenters />
          </SwiperSlide>
        </Swiper>
      </S.Container>
      <S.Background1 />
      <S.Background2 />
    </S.Layout>
  );
};

export default Why;

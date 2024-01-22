"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "./style.module.scss";
export default function Slide() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class=" navi-wrap ' + className + '">' + (index + 1) + "</span>"
      );
    },
  };
  const slideData = [
    {
      id: 1,
      text: "테스트 테스트",
      src: "/images/main_banner1.jpg",
    },
    {
      id: 2,
      text: "테스트 테스트",
      src: "/images/main_banner2.jpg",
    },
    {
      id: 3,
      text: "테스트 테스트",
      src: "/images/main_banner3.jpg",
    },
  ];
  return (
    <div className="swiper-container">
      <Swiper
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        navigation={true} // prev, next button
        pagination={pagination}
        modules={[Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
      >
        {slideData.map((slide) => (
          <div key={slide.id} className={style.SwiperWrap}>
            <SwiperSlide>
              <div className={style.imageWrapper}>
                <Image
                  alt={String(slide.id)}
                  src={slide.src}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

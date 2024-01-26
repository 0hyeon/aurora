"use client";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "./style.module.scss";
export default function SlideSmall() {
  const [swiperIndex, setSwiperIndex] = useState(0); //페이지네이션
  const [swiper, setSwiper] = useState<SwiperClass>(); //슬라이드
  SwiperCore.use([Scrollbar, Autoplay, Pagination]);

  const slideData = [
    {
      id: 1,
      text: "테스트 테스트",
      src: "/images/202312291320514_middle_banner_1.jpg",
    },
    {
      id: 2,
      text: "테스트 테스트",
      src: "/images/202401161039141_middle_banner_1.jpg",
    },
    {
      id: 3,
      text: "테스트 테스트",
      src: "/images/202401251637378_middle_banner_1.jpg",
    },
  ];
  return (
    <div className={style.SwiperWrap}>
      <Swiper
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
      >
        {slideData.map((slide) => (
          <div key={slide.id} className={style.SwiperWrapImg}>
            <SwiperSlide>
              <div style={{ height: 180 }}>
                <Image
                  alt={String(slide.id)}
                  src={slide.src}
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

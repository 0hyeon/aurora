"use client";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "./style.module.scss";
export default function Slide() {
  const [swiperIndex, setSwiperIndex] = useState(0); //페이지네이션
  const [swiper, setSwiper] = useState<SwiperClass>(); //슬라이드
  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };
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
    <div className={style.SwiperWrapMain}>
      <Swiper
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        navigation={true} // prev, next button
        autoplay={{
          delay: 4200,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {slideData.map((slide, idx) => (
          <div key={idx} className={style.SwiperWrap}>
            <SwiperSlide key={slide.id}>
              <div className={style.imageWrapper}>
                <Image
                  alt={String(slide.id)}
                  src={slide.src}
                  // height={203}
                  // width={1080}
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className={style.navi_wrap}>
        <div className={style.navi_page}>
          <div className={style.leftBtn} onClick={handlePrev}></div>
          <div className={style.innertxt}>
            <span>{swiperIndex + 1}</span>
            <span>{"/"}</span>
            <span>{slideData.length}</span>
          </div>
          <div className={style.rightBtn} onClick={handleNext}></div>
        </div>
      </div>
    </div>
  );
}

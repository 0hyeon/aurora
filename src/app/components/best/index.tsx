"use client";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "./styles.module.scss";
export default function Best() {
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
  const DiscountPrice = (per: number, price: number): number => {
    const minusNumber = 1 - per / 100;
    const result = price * minusNumber;
    return result;
  };
  const slideData = [
    {
      id: 1,
      text: "[6개월 매월또박] 드시모네 키즈 스텝1 블루베리/딸기/사과 중 택1",
      src: "/images/202401031646580_popular_goods.png",
      price: 78000,
      sale: 15,
      reviews: 1247,
    },
    {
      id: 2,
      text: "[6개월 매월또박] 드시모네 키즈 스텝1 블루베리/딸기/사과 중 택1",
      src: "/images/202401031646580_popular_goods.png",
      price: 78000,
      sale: 15,
      reviews: 1247,
    },
    {
      id: 3,
      text: "[6개월 매월또박] 드시모네 키즈 스텝1 블루베리/딸기/사과 중 택1",
      src: "/images/202401031646580_popular_goods.png",
      price: 78000,
      sale: 15,
      reviews: 1247,
    },
    {
      id: 4,
      text: "[6개월 매월또박] 드시모네 키즈 스텝1 블루베리/딸기/사과 중 택1",
      src: "/images/202401031646580_popular_goods.png",
      price: 78000,
      sale: 15,
      reviews: 1247,
    },
    {
      id: 5,
      text: "[6개월 매월또박] 드시모네 키즈 스텝1 블루베리/딸기/사과 중 택1",
      src: "/images/202401031646580_popular_goods.png",
      price: 78000,
      sale: 15,
      reviews: 1247,
    },
    {
      id: 6,
      text: "[6개월 매월또박] 드시모네 키즈 스텝1 블루베리/딸기/사과 중 택1",
      src: "/images/202401031646580_popular_goods.png",
      price: 78000,
      sale: 15,
      reviews: 1247,
    },
  ];
  return (
    <div className={style.SwiperWrapMain}>
      <Swiper
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={4} // 보여질 슬라이스 수
        navigation={true} // prev, next button
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
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
              <div className={style.productBox}>
                <div>{slide.text}</div>
                <div className={style.priceBox}>
                  <div className={style.leftPriceBox}>{slide.price}원</div>
                  <div className={style.rightPriceBox}>
                    {DiscountPrice(slide.sale, slide.price)}원
                  </div>
                </div>
                <div className={style.reviewBox}>(리뷰{slide.reviews}개)</div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

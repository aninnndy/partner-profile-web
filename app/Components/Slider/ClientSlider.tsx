"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const client = [
  {
    path: "/img/client/asiapest.png",
  },
  {
    path: "/img/client/bank-dki.png",
  },
  {
    path: "/img/client/djp.png",
  },
  {
    path: "/img/client/fastmed.png",
  },
  {
    path: "/img/client/hastek.jpg",
  },
  {
    path: "/img/client/mediaoptima.jpg",
  },
  {
    path: "/img/client/pertamina.png",
  },
  {
    path: "/img/client/primed.png",
  },
  {
    path: "/img/client/pringastula.png",
  },
  {
    path: "/img/client/value-star.png",
  },
];

const ClientSlider = () => {
  return (
    <Swiper
      slidesPerView={6}
      modules={[Autoplay]}
      loop={true}
      speed={8000}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
      }}
      className="clientSwiper rounded-lg bg-white"
    >
      {client.map((content, index) => (
        <SwiperSlide key={index}>
          <Image
            src={content.path}
            width={200}
            height={100}
            alt="Client Image"
            className="w-[100px] select-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSlider;

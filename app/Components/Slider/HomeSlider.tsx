"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BorderedButton from "../Button/BorderedButton";

const HomeSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={600}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="homeSwiper rounded-lg bg-white"
    >
      <SwiperSlide>
        <div className="bg-gradient-to-t h-full w-full from-colorPrimary/50 to-colorWhite/0">
          <div className="bg-[url('/img/HomeElement.png')] bg-cover bg-center flex justify-center h-full w-full items-center flex-col gap-2">
            <h2 className="text-4xl font-bold bg-clip-text text-colorWhite/0 bg-gradient-to-r from-colorPrimaryDark to-colorPrimary">
              Aplikasi Berbasis Web
            </h2>
            <p className="text-xl font-semibold text-white drop-shadow-md">
              Aplikasi Web yang sudah teruji dan siap pakai
            </p>
            <BorderedButton content="Digitalisasi Sekarang" href="/" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gradient-to-t h-full w-full from-colorPrimary/50 to-colorWhite/0">
          <div className="bg-[url('/img/HomeElement.png')] bg-cover bg-center flex justify-center h-full w-full items-center flex-col gap-2">
            <h2 className="text-4xl font-bold bg-clip-text text-colorWhite/0 bg-gradient-to-r from-colorPrimaryDark to-colorPrimary">
              Wujudkan Impian Digital Anda
            </h2>
            <p className="text-xl font-semibold text-white drop-shadow-md">
              Solusi yang tepat untuk impian Digital Anda
            </p>
            <BorderedButton content="Digitalisasi Sekarang" href="/" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gradient-to-t h-full w-full from-colorPrimary/50 to-colorWhite/0">
          <div className="bg-[url('/img/HomeElement.png')] bg-cover bg-center flex justify-center h-full w-full items-center flex-col gap-2">
            <h2 className="text-4xl font-bold bg-clip-text text-colorWhite/0 bg-gradient-to-r from-colorPrimaryDark to-colorPrimary">
              Aplikasi Mobile
            </h2>
            <p className="text-xl font-semibold text-white drop-shadow-md">
              Mendukung Interaksi dan Loyalitas Pelanggan
            </p>
            <BorderedButton content="Digitalisasi Sekarang" href="/" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;

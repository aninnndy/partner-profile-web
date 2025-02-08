"use client";
import Slider from "react-slick";
import BorderedButton from "../Button/BorderedButton";
import Image from "next/image";

interface SliderProps {
  title: string;
  description: string;
}

const BlankArrow = () => {
  return (
    <div>
      <span></span>
    </div>
  );
};

const SliderComponent: React.FC<SliderProps> = ({ title, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2 h-96">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-colorWhiteDark to-colorWhite bg-clip-text">
        {title}
      </h1>
      <p className="text-xl font-semibold text-colorSecondary drop-shadow-md px-4 rounded-full">
        {description}
      </p>
      <Image
        src="/img/HomeElement.png"
        alt="Grid Image"
        layout="fill"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 grayscale"
      />
      <div className="flex flex-row gap-2 pt-2">
        <BorderedButton content="Digitalisasi Sekarang" href="/" />
      </div>
    </div>
  );
};

const HomeSlider = () => {
  const slides = [
    {
      title: "Wujudkan Impian Digital Anda",
      description: "Solusi yang tepat untuk impian digital Anda",
    },
    {
      title: "Aplikasi Berbasis Web",
      description: "Aplikasi Berbasis Website Tanpa Ribet dan Murah",
    },
    {
      title: "Aplikasi Mobile",
      description: "Mendukung Interaksi, Transaksi dan Loyalitas Pelanggan",
    },
    {
      title: "Aplikasi Desktop",
      description: "Mendukung dengan Efisiensi data dan Produktivitas",
    },
  ];
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <BlankArrow />,
    prevArrow: <BlankArrow />,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <SliderComponent {...slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;

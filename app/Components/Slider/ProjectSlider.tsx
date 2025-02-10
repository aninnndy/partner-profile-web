"use client";
import Slider from "react-slick";
import Image from "next/image";

const BlankArrow = () => {
  return (
    <div>
      <span></span>
    </div>
  );
};

const ProjectSlider = () => {
  const settings = {
    className:
      "w-[99vw] flex justify-center items-center gap-12 outline-none mt-32",
    dots: false,
    fade: false,
    infinite: true,
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <BlankArrow />,
    prevArrow: <BlankArrow />,
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
    <div className="slider-container outline-none">
      <Slider {...settings}>
        <div className="p-4">
          <div className="px-2 py-2 border bg-gradient-to-r rounded-xl from-colorWhite/20 to-colorWhite/40">
            <Image
              src="/img/projects/hero-api-gps.jpg"
              width={800}
              height={100}
              className="h-[30vh] object-center object-cover rounded-2xl drop-shadow-xl"
              alt="Slider Image"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="px-2 py-2 border bg-gradient-to-r rounded-xl from-colorWhite/20 to-colorWhite/40">
            <Image
              src="/img/projects/hero-clinic.jpg"
              width={800}
              height={100}
              className="h-[30vh] object-center object-cover rounded-2xl drop-shadow-xl"
              alt="Slider Image"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="px-2 py-2 border bg-gradient-to-r rounded-xl from-colorWhite/20 to-colorWhite/40">
            <Image
              src="/img/projects/hero-api-payment.jpg"
              width={800}
              height={100}
              className="h-[30vh] object-center object-cover rounded-2xl drop-shadow-xl"
              alt="Slider Image"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="px-2 py-2 border bg-gradient-to-r rounded-xl from-colorWhite/20 to-colorWhite/40">
            <Image
              src="/img/projects/hero-web.jpg"
              width={800}
              height={100}
              className="h-[30vh] object-center object-cover rounded-2xl drop-shadow-xl"
              alt="Slider Image"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="px-2 py-2 border bg-gradient-to-r rounded-xl from-colorWhite/20 to-colorWhite/40">
            <Image
              src="/img/projects/hero-hcms.jpg"
              width={800}
              height={100}
              className="h-[30vh] object-center object-cover rounded-2xl drop-shadow-xl"
              alt="Slider Image"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="px-2 py-2 border bg-gradient-to-r rounded-xl from-colorWhite/20 to-colorWhite/40">
            <Image
              src="/img/projects/hero-covid.jpg"
              width={800}
              height={100}
              className="h-[30vh] object-center object-cover rounded-2xl drop-shadow-xl"
              alt="Slider Image"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProjectSlider;

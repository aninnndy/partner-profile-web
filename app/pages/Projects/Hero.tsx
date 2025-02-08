import BorderedButton from "@/app/Components/Button/BorderedButton";
import ProjectSlider from "@/app/Components/Slider/ProjectSlider";

const Hero = () => {
  return (
    <section className="h-[80vh] pt-12 bg-gradient-to-b from-colorPrimary to-colorPrimaryDark flex justify-center flex-col items-center">
      <div>
        <ProjectSlider />
      </div>
      <div className="flex flex-row justify-center items-center h-full pt-2 container">
        <div>
          <h2 className="text-5xl font-bold text-colorWhite/0 bg-gradient-to-l from-colorGray to-colorWhite bg-clip-text py-1">
            Project Terbaik Kami
          </h2>
          <p className="font-medium  text-white text-xl w-[80%]">
            Tingkatkan kredibilitas bisnis Anda dengan website yang cepat,
            responsif, dan menarik.
          </p>
        </div>
        <div className="mt-12">
          <BorderedButton content="Digitalisasi Sekarang" href="/" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import HomeSlider from "../../Components/Slider/HomeSlider";

const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-colorPrimary to-colorPrimaryDark  h-[70vh] flex justify-center pt-24">
        <div className="w-[80vw] bg-white/20 border-2 border-t-0 border-colorWhite rounded-b-xl h-[40vh] drop-shadow-xl shadow-colorSecondary">
          <HomeSlider />
        </div>
      </section>
    </>
  );
};

export default Hero;

import BorderedButton from "@/app/Components/Button/BorderedButton";

const Hero = () => {
  return (
    <section className="h-[40vh] pt-12 bg-gradient-to-b from-colorPrimary to-colorPrimaryDark flex justify-center flex-col items-center">
      <span className="inline-block w-32 h-32 rounded-full bg-colorSecondary absolute right-52 top-52 blur-2xl"></span>

      <span className="inline-block w-32 h-32 rounded-full bg-colorSecondary absolute left-52 top-52 blur-2xl"></span>
      <div className="flex flex-row justify-center items-center h-full section-container mt-32 z-20 gap-[15%]">
        <div className="flex justify-center items-start flex-col">
          <h2 className="text-5xl font-bold text-colorWhite/0 bg-gradient-to-l from-colorGray to-colorWhite bg-clip-text py-1">
            Project Terbaik Kami
          </h2>
          <p className="font-medium text-start text-white text-xl w-[80%]">
            Tingkatkan kredibilitas bisnis Anda dengan website yang cepat,
            responsif, dan menarik.
          </p>
        </div>
        <div className="mt-20">
          <BorderedButton content="Digitalisasi Sekarang" href="/" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

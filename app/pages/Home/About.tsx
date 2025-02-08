import Image from "next/image";
import ClientGroup from "@/app/Components/Home/ClientGroup";

const About = () => {
  return (
    <>
      <section className="w-[100vw] flex justify-center items-center">
        <div className="section-container flex flex-row justify-around items-center">
          <div className="flex justify-start items-start flex-col w-[30vw] gap-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-colorPrimaryDark to-colorPrimary bg-clip-text text-colorWhite/0">
              Tentang Birohmatika
            </h2>
            <p className="font-medium text-wrap px-1">
              Birohmatika adalah suatu usaha mandiri yang memiliki fokus utama
              dalam pengembangan di bidang teknologi dan informasi. <br />
              <br />
              Tim ini resmi didirikan pada tanggal 01 Mei 2019 dan sejak saat
              itu terus berkomitmen untuk memberikan solusi inovatif dalam
              mendukung perkembangan dunia teknologi dan informasi di berbagai
              sektor.
            </p>
            <button className="bg-gradient-to-r from-colorPrimaryDark to-colorPrimary font-semibold text-colorWhite px-5 py-2  rounded-full hover:from-colorPrimary hover:to-colorPrimaryDark flex justify-around items-center gap-2 hover:drop-shadow-xl animate">
              Pelajari Selengkapnya
              <i className="ri-arrow-right-up-line px-1 border rounded-full"></i>
            </button>
          </div>

          <Image
            src="/img/About-Thumb.png"
            alt="About Thumbnail"
            width="500"
            height="200"
          />
        </div>
      </section>
      <ClientGroup />
    </>
  );
};

export default About;

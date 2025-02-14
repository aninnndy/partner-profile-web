"use client";
import { useParams } from "next/navigation";
import HeroDetail from "@/app/Json/HeroDetail.json";
import Image from "next/image";

export const Hero = () => {
  const params = useParams();
  const { id } = params;

  const filterCard = HeroDetail.filter(
    (content) => content.name.replace(/ /g, "-").toLowerCase() === id
  ).map((content) => content);
  return (
    <section className="h-[80vh] flex justify-center items-center bg-gradient-to-r from-colorPrimary to-colorPrimaryDark pt-20">
      {filterCard.map((content, index) => {
        const categories = content.categories.replace(/-/g, " ");
        const featureSplit = content.features.split(" ");
        return (
          <div
            key={index}
            className="section-container flex justify-center gap-[10%] items-center"
          >
            <Image
              src={content.thumbnail}
              alt="Image Thumbnail"
              width={900}
              height={100}
              className="rounded-xl w-[40%]"
            />
            <div className="justify-start items-start w-[40%] h-full  text-white flex flex-col gap-4">
              {/* Project Title */}
              <div>
                <h2 className="font-bold text-5xl">{content.name}</h2>
                <p className="text-xl">{categories}</p>
              </div>
              {/* Project Feature */}
              <div>
                <h3 className="text-3xl font-semibold">Feature</h3>
                <ul className="flex gap-4 flex-wrap">
                  {featureSplit.slice(0, 4).map((content, index) => (
                    <li
                      key={index}
                      className="underline decoration-2 underline-offset-[4px] decoration-colorSecondary"
                    >
                      {content.replace(/-/g, " ")}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-3xl font-semibold">Tentang Project</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam, aut maiores alias culpa quas temporibus neque id
                  corrupti aperiam odio necessitatibus vel voluptates!
                  Recusandae veritatis reprehenderit ex, dicta quibusdam qui?
                </p>
              </div>
              <hr className="w-full h-[1px] bg-colorSecondary border-none" />
              <div className="flex justify-between w-full items-start">
                <div>
                  <h5 className="text-base">Harga Project</h5>
                  <p className="text-2xl font-semibold">Rp. 1,000,000,00</p>
                </div>
                <button className="bg-gradient-to-r from-colorSecondaryDark to-colorSecondary hover:from-colorSecondary hover:to-colorSecondaryDark px-8 py-2 rounded-md font-semibold">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

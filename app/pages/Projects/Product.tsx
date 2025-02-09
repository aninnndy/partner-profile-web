"use client";
import SearchBar from "@/app/Components/Projects/SearchBar";
import Pagination from "@/app/Components/Projects/Pagination";
import CardList from "@/app/Json/CardList.json";
import Image from "next/image";
import ProjectCategories from "@/app/Components/Projects/ProjectCategories";
import { useState } from "react";

const Product = () => {
  const [data, setData] = useState(true);

  return (
    <section className="w-[100vw] flex flex-row justify-center items-start h-full mt-12">
      <ProjectCategories
        contentAll="All Categories"
        eventAll={() => setData(!data)}
      />
      <div className="flex flex-col gap-8">
        <div className="w-[75vw] flex flex-row gap-2 px-12">
          <SearchBar />
          <Pagination />
        </div>
        <div className="flex flex-wrap justify-start w-[75vw] items-center">
          {/* Card Wrapper */}
          <div className="grid grid-cols-3 px-12 gap-4">
            {CardList.map((content, index) => {
              const productFeatures = content.features.split(" ");
              const categories = content.categories.replace(/-/g, " ");

              return (
                // Card
                <div
                  key={index}
                  className="w-[360px] h-[390px] bg-white rounded-xl"
                >
                  <Image
                    src={content.thumbnail}
                    width={400}
                    height={100}
                    alt="Card Image"
                    className="h-[24vh] object-cover rounded-t-xl cursor-pointer hover:opacity-90 animate"
                  />
                  <div className="h-[10vh] px-5 py-3 border-t-4 border-colorSecondary text-colorBlack gap-2 flex flex-col">
                    {/* Card Title */}
                    <div>
                      <h2 className="font-semibold text-2xl">{content.name}</h2>
                      <p className="font-medium">{categories}</p>
                    </div>
                    {/* Card Features */}
                    <div>
                      <h3 className="text-xl font-semibold">Features</h3>
                      <ul className="flex flex-row flex-wrap gap-2">
                        {productFeatures.slice(0, 2).map((features, index) => (
                          <li key={index}>
                            <i className="ri-git-commit-line text-colorSecondary font-semibold"></i>{" "}
                            {features.replace(/-/g, " ")}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

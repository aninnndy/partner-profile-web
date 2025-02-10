"use client";
import SearchBar from "@/app/Components/Projects/SearchBar";
import Pagination from "@/app/Components/Projects/Pagination";
import CardList from "@/app/Json/CardList.json";
import Image from "next/image";
import ProjectCategories from "@/app/Components/Projects/ProjectCategories";
import { useState, useEffect } from "react";

const Product = () => {
  const [projectCategories, setProjectCategories] = useState("");
  const [list, setList] = useState(true);
  const [filteredCards, setFilteredCards] = useState(CardList);

  useEffect(() => {
    if (projectCategories === "") {
      setFilteredCards(CardList);
      return;
    }

    const filtered = CardList.filter(
      (item) => item.categories.toLowerCase() === projectCategories
    );
    setFilteredCards(filtered);
  }, [projectCategories]);

  return (
    <section className="flex flex-row justify-center items-start h-full mt-12">
      <ul className="bg-white w-[50%] ml-12 rounded-2xl px-12 flex flex-col items-start gap-2 py-8 animate">
        <h2
          className="text-2xl font-semibold cursor-pointer select-none w-full flex gap-28"
          onClick={() => setList(!list)}
        >
          Project Categories{" "}
          <i
            className={list ? `ri-arrow-up-s-line` : `ri-arrow-down-s-line`}
          ></i>
        </h2>
        {list && (
          <ProjectCategories
            contentAll="All Categories"
            eventAll={() => setProjectCategories("")}
            colorAll={
              projectCategories === "" ? "bg-colorPrimary text-white" : ""
            }
            contentFirst="Project Management System"
            eventFirst={() => setProjectCategories("project-management-system")}
            colorFirst={
              projectCategories === "project-management-system"
                ? "bg-colorPrimary text-white"
                : ""
            }
            contentSecond="Clinic Management System"
            eventSecond={() => setProjectCategories("clinic-management-system")}
            colorSecond={
              projectCategories === "clinic-management-system"
                ? "bg-colorPrimary text-white"
                : ""
            }
            contentThird="Learning Management System"
            eventThird={() =>
              setProjectCategories("learning-management-system")
            }
            colorThird={
              projectCategories === "learning-management-system"
                ? "bg-colorPrimary text-white"
                : ""
            }
            contentFour="Human Capital Management"
            eventFour={() =>
              setProjectCategories("human-capital-management-system")
            }
            colorFour={
              projectCategories === "human-capital-management-system"
                ? "bg-colorPrimary text-white"
                : ""
            }
            contentFive="Queue System"
            eventFive={() => setProjectCategories("queue-system")}
            colorFive={
              projectCategories === "queue-system"
                ? "bg-colorPrimary text-white"
                : ""
            }
          />
        )}
      </ul>
      <hr className="bg-transparent w-24" />
      <div className="flex flex-col gap-8">
        <div className="w-[70vw] flex flex-row gap-2 px-12">
          <SearchBar />
          <Pagination />
        </div>
        <div className="flex flex-wrap justify-start w-[70vw] h-[80vh] items-start">
          {/* Card Wrapper */}
          <div className="grid grid-cols-3 px-12 gap-4">
            {filteredCards.slice(0, 6).map((content, index) => {
              const productFeatures = content.features.split(" ");
              const categories = content.categories.replace(/-/g, " ");

              return (
                // Card
                <div
                  key={index}
                  className="w-[410px] h-[390px] bg-white rounded-xl"
                >
                  <Image
                    src={content.thumbnail}
                    width={450}
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
                      <ul className="flex flex-row flex-wrap gap-2 text-sm">
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

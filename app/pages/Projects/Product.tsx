"use client";

import { useState } from "react";
import SearchBar from "@/app/Components/Projects/SearchBar";
import Pagination from "@/app/Components/Projects/Pagination";
import CardList from "@/app/Json/CardList.json";
import Image from "next/image";
import ProjectCategories from "@/app/Components/Projects/ProjectCategories";
import Link from "next/link";

const Product = () => {
  const [projectCategories, setProjectCategories] = useState("");
  const [stepOne, setStepOne] = useState(0);
  const [stepTwo, setStepTwo] = useState(6);

  // Handle Step Card List
  const handleStep = (stepFirst: number, stepSec: number) => {
    setStepOne(stepFirst);
    setStepTwo(stepSec);
  };

  const nextStep = () => {
    if (stepOne >= 6) {
      handleStep(stepOne - 6, stepTwo - 6);
    }
  };

  const prevStep = () => {
    if (stepTwo < filteredCards.length) {
      handleStep(stepOne + 6, stepTwo + 6);
    }
  };

  const handlePagination = () => {
    if (stepOne >= 6) {
      handleStep(stepOne - 6, stepTwo - 6);
    }
    if (stepTwo < filteredCards.length) {
      handleStep(stepOne + 6, stepTwo + 6);
    }
  };

  // Filter Category Card
  const filteredCards = projectCategories
    ? CardList.filter((item) => item.categories === projectCategories)
    : CardList;

  return (
    <section className="flex justify-center items-start h-full mt-12 z-50">
      {/* Filter Categories */}
      <div className="section-container flex flex-row gap-8">
        <nav className="w-[25%] gap-2 bg-white h-[50%] px-5 py-5 rounded-xl">
          <h2 className="text-2xl font-bold text-colorBlackSolid py-2 px-2">
            Project Categories
          </h2>
          <ProjectCategories
            content="All Categories"
            value=""
            id="all-categories"
            checked={projectCategories === ""}
            changed={() => {
              setProjectCategories("");
              nextStep();
            }}
          />
          <ProjectCategories
            content="Clinic Management System"
            value="Clinic-Management-System"
            id="Clinic-Management-System"
            checked={projectCategories === "Clinic-Management-System"}
            changed={() => {
              setProjectCategories("Clinic-Management-System");
              nextStep();
            }}
          />
          <ProjectCategories
            content="Queue System"
            value="Queue-System"
            id="Queue-System"
            checked={projectCategories === "Queue-System"}
            changed={() => {
              setProjectCategories("Queue-System");
              nextStep();
            }}
          />
          <ProjectCategories
            content="Human Capital Management"
            value="Human-Capital-Management-System"
            id="Human-Capital-Management-System"
            checked={projectCategories === "Human-Capital-Management-System"}
            changed={() => {
              setProjectCategories("Human-Capital-Management-System");
              nextStep();
            }}
          />
          <ProjectCategories
            content="Learning Management System"
            value="Learning-Management-System"
            id="Learning-Management-System"
            checked={projectCategories === "Learning-Management-System"}
            changed={() => {
              setProjectCategories("Learning-Management-System");
              nextStep();
            }}
          />
          <ProjectCategories
            content="Total Relationship Management"
            value="Total-Relationship-Management"
            id="Total-Relationship-Management"
            checked={projectCategories === "Total-Relationship-Management"}
            changed={() => {
              setProjectCategories("Total-Relationship-Management");
              nextStep();
            }}
          />
          <ProjectCategories
            content="GPS Tracking"
            value="GPS-Tracking"
            id="GPS-Tracking"
            checked={projectCategories === "GPS-Tracking"}
            changed={() => {
              setProjectCategories("GPS-Tracking");
              nextStep();
            }}
          />
        </nav>

        <div className="flex flex-col gap-8 justify-start items-start">
          <div className="flex flex-row gap-2 w-full">
            <SearchBar />
            <Pagination
              handlePagination={() => handlePagination()}
              stepOne={() => nextStep()}
              stepTwo={() => prevStep()}
            />
          </div>

          {/* Card Wrapper */}
          <div className="grid grid-cols-3 gap-4 h-[100vh]">
            {filteredCards.length > 0 ? (
              filteredCards.slice(stepOne, stepTwo).map((content, index) => {
                // const productFeatures = content.features.split(" ");
                // const categories = content.categories.replace(/-/g, " ");
                const advantageIcon = content.advantageIcon.split(" ");
                const categories = content.categories.replace(/-/g, " ");
                const advantage = content.advantage.split(" ");
                const contentParams = content.name
                  .replace(/ /g, "-")
                  .toLowerCase();

                return (
                  // Card
                  <div
                    key={index}
                    className="w-[380px] h-[490px] bg-white rounded-xl"
                  >
                    <Link href={`/projects/detail/${contentParams}`}>
                      <Image
                        src={content.thumbnail}
                        width={880}
                        height={100}
                        alt="Card Image"
                        className="h-[24vh] object-cover rounded-t-xl cursor-pointer hover:opacity-90 animate"
                      />
                    </Link>
                    <div className="h-[10vh] px-9 py-3 text-colorBlack gap-2 flex flex-col">
                      {/* Card Title */}
                      <div>
                        <h2 className="font-semibold text-xl">
                          {content.name}
                        </h2>
                        <p className="text-sm font-medium">{categories}</p>
                        <ul className="flex flex-row gap-2 items-center pt-2">
                          {advantage.map((content, index) => (
                            <li
                              key={index}
                              className="flex items-center text-gray-400 text-sm justify-center gap-2"
                            >
                              <i
                                className={`text-sm text-colorSecondary ${advantageIcon[index]}`}
                              ></i>{" "}
                              {content.replace(/-/g, " ")}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Card Features */}
                      <div>
                        <h3 className="text-md font-semibold">
                          Keunggulan Aplikasi
                        </h3>
                        <p className="text-sm font-medium">
                          Aplikasi ini telah membantu beberapa Klien kami
                          terkait manajemen pasien dan terbukti kualitasnya.
                        </p>
                      </div>
                      {/* Button Group */}
                      <div className="flex flex-row gap-4">
                        <button className="bg-gradient-to-r from-colorPrimary to-colorPrimaryDark px-5 py-2 rounded-xl font-semibold text-white flex justify-center items-center gap-2 hover:from-colorPrimary hover:to-colorPrimary ">
                          Copy
                          <i className="ri-file-copy-fill"></i>
                        </button>
                        <Link
                          className="font-medium py-2 hover:underline hover:underline-offset-4 hover:decoration-colorSecondary  select-none"
                          href={`projects/detail/${contentParams}`}
                        >
                          Baca Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 text-lg">
                Tidak ada category project.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

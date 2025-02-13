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

  // Filter daftar kartu berdasarkan kategori yang dipilih
  const filteredCards = projectCategories
    ? CardList.filter((item) => item.categories === projectCategories)
    : CardList;

  return (
    <section className="flex justify-center items-start h-full mt-12 z-50">
      {/* Filter Categories */}
      <div className="section-container flex flex-row gap-8">
        <nav className="w-[25%] gap-2 bg-white h-[50%] px-5 py-5 rounded-xl">
          <h2 className="text-2xl font-semibold text-colorBlackSolid py-2 px-2 underline decoration-colorSecondary">
            Project Categories
          </h2>
          <ProjectCategories
            content="All Categories"
            value=""
            id="all-categories"
            checked={projectCategories === ""}
            changed={() => setProjectCategories("")}
          />
          <ProjectCategories
            content="Clinic Management System"
            value="Clinic-Management-System"
            id="Clinic-Management-System"
            checked={projectCategories === "Clinic-Management-System"}
            changed={() => setProjectCategories("Clinic-Management-System")}
          />
          <ProjectCategories
            content="Queue System"
            value="Queue-System"
            id="Queue-System"
            checked={projectCategories === "Queue-System"}
            changed={() => setProjectCategories("Queue-System")}
          />
          <ProjectCategories
            content="Human Capital Management"
            value="Human-Capital-Management-System"
            id="Human-Capital-Management-System"
            checked={projectCategories === "Human-Capital-Management-System"}
            changed={() =>
              setProjectCategories("Human-Capital-Management-System")
            }
          />
          <ProjectCategories
            content="Learning Management System"
            value="Learning-Management-System"
            id="Learning-Management-System"
            checked={projectCategories === "Learning-Management-System"}
            changed={() => setProjectCategories("Learning-Management-System")}
          />
          <ProjectCategories
            content="Project Management System"
            value="Project-Management-System"
            id="Project-Management-System"
            checked={projectCategories === "Project-Management-System"}
            changed={() => setProjectCategories("Project-Management-System")}
          />
          <ProjectCategories
            content="GPS Tracking"
            value="GPS-Tracking"
            id="GPS-Tracking"
            checked={projectCategories === "GPS-Tracking"}
            changed={() => setProjectCategories("GPS-Tracking")}
          />
        </nav>

        <div className="flex flex-col gap-8 justify-start items-start">
          <div className="flex flex-row gap-2 w-full">
            <SearchBar />
            <Pagination />
          </div>

          {/* Card Wrapper */}
          <div className="grid grid-cols-3 gap-4 h-[90vh]">
            {filteredCards.length > 0 ? (
              filteredCards.slice(0, 6).map((content, index) => {
                // const productFeatures = content.features.split(" ");
                // const categories = content.categories.replace(/-/g, " ");
                const advantageIcon = content.advantageIcon.split(" ");
                const advantage = content.advantage.split(" ");
                const contentParams = content.name
                  .replace(/ /g, "-")
                  .toLowerCase();

                return (
                  // Card
                  <div
                    key={index}
                    className="w-[380px] h-[460px] bg-white rounded-xl"
                  >
                    <Link href={`/projects/detail/${contentParams}`}>
                      <Image
                        src={content.thumbnail}
                        width={380}
                        height={100}
                        alt="Card Image"
                        className="h-[24vh] object-cover rounded-t-xl cursor-pointer hover:opacity-90 animate"
                      />
                    </Link>
                    <div className="h-[10vh] px-5 py-3 text-colorBlack gap-2 flex flex-col">
                      {/* Card Title */}
                      <div>
                        <h2 className="font-semibold text-xl">
                          {content.name}
                        </h2>
                        <ul className="flex flex-row gap-2 items-center">
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
                Tidak ada data yang sesuai.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

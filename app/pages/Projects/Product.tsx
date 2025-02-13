"use client";

import { useState } from "react";
import SearchBar from "@/app/Components/Projects/SearchBar";
import Pagination from "@/app/Components/Projects/Pagination";
import CardList from "@/app/Json/CardList.json";
import Image from "next/image";
import ProjectCategories from "@/app/Components/Projects/ProjectCategories";

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
        <nav className="w-[25%] gap-2 bg-white h-[50%] px-5 py-2 rounded-xl">
          <h2 className="text-xl font-bold py-2 px-2">Project Categories</h2>
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
          <div className="grid grid-cols-3 gap-4 h-[75vh]">
            {filteredCards.length > 0 ? (
              filteredCards.slice(0, 6).map((content, index) => {
                const productFeatures = content.features.split(" ");
                const categories = content.categories.replace(/-/g, " ");

                return (
                  // Card
                  <div
                    key={index}
                    className="w-[340px] h-[390px] bg-white rounded-xl"
                  >
                    <Image
                      src={content.thumbnail}
                      width={340}
                      height={100}
                      alt="Card Image"
                      className="h-[24vh] object-cover rounded-t-xl cursor-pointer hover:opacity-90 animate"
                    />
                    <div className="h-[10vh] px-5 py-3 border-t-4 border-colorSecondary text-colorBlack gap-2 flex flex-col">
                      {/* Card Title */}
                      <div>
                        <h2 className="font-semibold text-xl">
                          {content.name}
                        </h2>
                        <p className="font-medium text-md">{categories}</p>
                      </div>
                      {/* Card Features */}
                      <div>
                        <h3 className="text-xl font-semibold">Features</h3>
                        <ul className="flex flex-row flex-wrap gap-2 text-sm">
                          {productFeatures
                            .slice(0, 2)
                            .map((features, index) => (
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

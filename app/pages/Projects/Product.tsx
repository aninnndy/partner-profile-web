import SearchBar from "@/app/Components/Projects/SearchBar";
import Pagination from "@/app/Components/Projects/Pagination";
import CardList from "@/app/Json/CardList.json";
import Image from "next/image";

const Product = () => {
  return (
    <section className="w-[100vw] flex flex-col justify-center items-center h-full mt-24 gap-8">
      <div className="container flex flex-row gap-2 px-44">
        <SearchBar />
        <Pagination />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {/* Card Wrapper */}
        <div className="flex flex-wrap container justify-center items-center px-44 gap-4">
          {CardList.map((content, index) => {
            const productFeatures = content.features.split(" ");
            const categories = content.categories.replace(/-/g, " ");

            return (
              // Card
              <div
                key={index}
                className="w-[380px] h-[390px] bg-white rounded-xl"
              >
                <Image
                  src={content.thumbnail}
                  width={800}
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
                  {/* Card Button */}
                  {/* <button className="bg-gradient-to-r hover:from-colorPrimaryDark hover:to-colorPrimary from-colorPrimary to-colorPrimaryDark text-white w-full font-medium rounded-lg py-2">
                    Lihat Projects <i className="ri-arrow-right-up-line"></i>
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;

import CardList from "@/app/Json/CardList.json";

interface arrowStep {
  handlePagination: () => void;
  stepOne: () => void;
  stepTwo: () => void;
}

const Pagination: React.FC<arrowStep> = ({
  stepOne,
  stepTwo,
  handlePagination,
}) => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <ul className="flex flex-row gap-2 cursor-pointer">
        {CardList.slice(0, 4).map((_, index) => (
          <li
            className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50 select-none"
            onClick={handlePagination}
            key={index}
          >
            {index + 1}
          </li>
        ))}
        <li
          className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50 select-none"
          onClick={stepOne}
        >
          <i className="ri-arrow-left-line"></i>
        </li>
        <li
          className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50 select-none"
          onClick={stepTwo}
        >
          <i className="ri-arrow-right-line"></i>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

const Pagination = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <ul className="flex flex-row gap-2 cursor-pointer">
        <li className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50">
          1
        </li>
        <li className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50 ">
          2
        </li>
        <li className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50">
          3
        </li>
        <li className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50">
          4
        </li>
        <li className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50">
          <i className="ri-arrow-left-line"></i>
        </li>
        <li className="bg-white px-5 py-1 rounded-md font-medium hover:bg-colorSecondary/50">
          <i className="ri-arrow-right-line"></i>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

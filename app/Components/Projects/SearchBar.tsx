const SearchBar = () => {
  return (
    <div className="bg-white flex gap-4 px-5 py-2 w-full rounded-xl drop-shadow-sm">
      <i className="ri-search-line text-colorGray"></i>
      <input
        type="text"
        placeholder="Search by name"
        className="outline-none placeholder:text-colorGray w-full"
      />
      <div className="flex flex-row gap-2 text-xs justify-center items-center font-medium text-colorPrimary">
        <span className="bg-colorPrimary/10 px-2 rounded-md py-1">CTRL</span>
        <span>+</span>
        <span className="bg-colorPrimary/10 px-2 rounded-md py-1">/</span>
      </div>
    </div>
  );
};

export default SearchBar;

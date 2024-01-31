import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="w-[23.1875rem] p-0.5 bg-white rounded-md flex items-center justify-between shadow-sm">
      <input
        className="pl-2.5 w-full focus:border-0 focus-within:outline-none"
        type="text"
        placeholder="Search by Dua Name"
      />

      <div className="bg-primaryColor p-2 rounded-md">
        <Image
          src="/assets/icons/search.svg"
          width={25}
          height={25}
          alt="search"
          className=" "
        />
      </div>
    </div>
  );
};

export default SearchBar;

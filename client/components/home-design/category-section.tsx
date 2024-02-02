import DuasSection from "./duas-section";
import LocalSearchBar from "./local-searchbar";

const CategoriesSection = () => {
  return (
    <div className="max-w-[350px] w-full bg-white shadow-sm rounded-md max-h-[85vh] overflow-hidden sticky top-20 ">
      <h2 className="text-base text-center bg-secondary_green text-white py-3 font-semibold">
        Categories
      </h2>
      <div className="px-3 my-3 h-full">
        <LocalSearchBar />
        <DuasSection />
      </div>
    </div>
  );
};

export default CategoriesSection;

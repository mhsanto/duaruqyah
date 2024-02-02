import DuaCategories from "./dua-categories";
type Category = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};
const DuasSection = async () => {
  const duas = await fetch(
    `${process.env.GET_DATA_FROM_SERVER}/categories`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col items-start max-h-full  overflow-y-scroll ">
      {duas.category.map((cat: Category) => (
        <DuaCategories key={cat.id} cat={cat} />
      ))}

      <div className=" ml-6 flex flex-col gap-2 h-max border-dashed border-l-2 border-secondary_green pl-2 ">
        <div className="flex w-full relative ">
          <span className="custom_class" />
          <p className="text-xs font-medium">what is dua</p>
        </div>
      </div>
    </div>
  );
};

export default DuasSection;

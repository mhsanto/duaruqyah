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
const CategoryList = async () => {
  const duas = await fetch(
    `${process.env.GET_DATA_FROM_SERVER}/categories`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col items-start h-full sm:h-full overflow-y-scroll pb-7 bg-white">
      {duas.category.map((cat: Category) => (
        <DuaCategories key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CategoryList;

"use client";
import { DuaCategoriesType } from "@/app/type";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import DuaByCategory from "./dua-by-category";

const DuaCategories: React.FC<DuaCategoriesType> = ({ cat }) => {
  const searchParams = useSearchParams();
  const catId = searchParams.get("cat");
  const newUrl = `/duas/${encodeURIComponent(
    cat.cat_name_en.replace(/'/g, "").replace(/\s+/g, "-").replace(/&/g, "and")
  )}`;
  const getSubCategorybyCatId = async (catId: string) => {
    const subCat = await fetch(
      `${process.env.GET_DATA_FROM_SERVER}/subcategories/${catId}`
    ).then((res) => res.json());
    return subCat;
  };
  return (
    <Link
      href={`${newUrl}/?cat=${cat.cat_id}`}
      key={cat.id}
      className={cn(
        catId === cat.cat_id.toString() ? `bg-thirdColor` : `bg-white`,
        `flex my-1 justify-between w-full p-3 rounded-xl hover:bg-thirdColor transition`
      )}
    >
      <DuaByCategory cat={cat} />
    </Link>
  );
};

export default DuaCategories;

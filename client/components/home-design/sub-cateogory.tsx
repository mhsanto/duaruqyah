"use client";
import { SubCategoriesItem } from "@/app/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubCategory = ({ subcat }: { subcat: SubCategoriesItem }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={{
        pathname: pathName,
        query: {
          cat: subcat.cat_id.toString(),
          subcatId: subcat.subcat_id.toString(),
        },
      }}
      className="flex w-full relative  "
      key={subcat.id}
    >
      <span className="custom_class" />
      <p className="text-xs font-medium">{subcat.subcat_name_en}</p>
    </Link>
  );
};

export default SubCategory;

import { DuaCategoriesType } from "@/app/type";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const DuaCategories: React.FC<DuaCategoriesType> = ({ cat }) => {
  const headerList = headers();
  const pathName = headerList.get("x-pathname");
  const newUrl = `/duas/${encodeURIComponent(
    cat.cat_name_en
      .replace(/'/g, "")
      .replace(/\s+/g, "-")
      .replace(/&/g, "and")
  )}`;

  const url = new URL(pathName ? "" : "/", `http://localhost:3001/${newUrl}`);

  url.searchParams.set(
    "cat",
    cat.cat_id.toString().replace(/'/g, "").replace(/\s+/g, "-")
  );
  const paramsIs = url.searchParams.get("cat");
  const isActive = 
  //   url.searchParams.set("id", cat.cat_id.toString());
  console.log(`url is ${cat.cat_id}`);
  return (
    <Link
      href={`${url.toString()}`}
      key={cat.id}
      className={cn(
        `flex  justify-between w-full my-2 p-3 rounded-xl`
      )}
    >
      <div className="flex gap-2">
        <Image src="/assets/icons/user.svg" width={40} height={40} alt="dua" />
        <div className="">
          <h3 className="text-sm text-semibold">{cat.cat_name_en}</h3>
          <p className="text-xs text-gray-500">
            Subcategory:{cat.no_of_subcat}
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <span>{cat.no_of_dua}</span>
        <span className="text-xs text-gray-500">duas</span>
      </div>
    </Link>
  );
};

export default DuaCategories;

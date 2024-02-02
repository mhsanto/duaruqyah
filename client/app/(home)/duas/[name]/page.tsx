import React from "react";
import { DuaResponse } from "@/app/type";
import DuaList from "@/components/home-design/dua-list";
type DuaParams = {
  params: {
    cat_id: number;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const Dua: React.FC<DuaParams> = async ({ params, searchParams }) => {
  const cat_id = parseInt(searchParams.cat as string, 10);
  const response = await fetch(
    `${process.env.GET_DATA_FROM_SERVER}/duas?cate_id=1`
  );
  const duas: DuaResponse = await response.json();

  const duaByCategory = duas.dua.filter((dua) => cat_id === dua.cat_id);
  console.log(searchParams.cat);
  return (
    <div>
      <div className="max-w-[1033px] w-full rounded-xl shadow-sm max-h-screen h-full overflow-scroll flex flex-col gap-3">
        {duaByCategory.map((dua) => (
          <React.Fragment key={dua.dua_id}>
            {dua.dua_id === 1 && (
              <p className="bg-white py-2 px-3 rounded-lg " >
                <span className="text-secondary_green font-semibold">
                  Section:{" "} 
                </span>
                 {dua.dua_name_en}
              </p>
            )}
            <DuaList dua={dua} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Dua;

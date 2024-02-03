import React from "react";
import { DuaItem, DuaParams } from "@/app/type";
import DuaList from "@/components/home-design/dua-list";

const Dua: React.FC<DuaParams> = async ({ params, searchParams }) => {
  const catId = parseInt(searchParams.cat as string, 10);
  const duas = await fetch(
    `${process.env.GET_DATA_FROM_SERVER}/duas?cat_id=${catId}`
  ).then((res) => res.json());

  return (
    <div className="w-full rounded-xl shadow-sm max-h-screen h-full overflow-scroll scroll- flex flex-col gap-3 hide__scroll">
      {duas?.dua.map((dua: DuaItem) => (
        <DuaList dua={dua} key={dua.dua_id} />
      ))}
    </div>
  );
};

export default Dua;

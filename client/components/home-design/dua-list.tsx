"use client";
import { DuaListProps } from "@/app/type";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const DuaList = ({ dua }: DuaListProps) => {
  const searchParams = useSearchParams();
  const duaId = parseInt((searchParams.get("duaId") || 1) as string, 10);
  return (
    <div className="flex flex-col gap-4 " >
      {dua.dua_id === duaId && (
        <p className="bg-white py-2 px-3 rounded-lg ">
          <span className="text-secondary_green font-semibold">Section: </span>
          {dua.dua_name_en}
        </p>
      )}

      <div className="flex flex-col gap-4 bg-white rounded-lg px-4 py-3 ">
        <div className=" flex items-center gap-7">
          <Image
            src="/assets/icons/title-logo.svg"
            width={30}
            height={30}
            alt="title-logo"
          />
          <ol className="list-decimal">
            <li className="text-secondary_green font-semibold">
              {dua.dua_name_en}
            </li>
          </ol>
        </div>
        <div className=" flex flex-col gap-6 leading-8">
          <p className="text-lg">{dua.top_en}</p>
          <p className="w-full text-right text-3xl leading-10">
            {dua.dua_arabic}
          </p>
          {dua.translation_en && (
            <p className="italic text-lg leading-8">
              <span className="italic font-medium">Transliteration:</span>
              {dua.translation_en}
            </p>
          )}
        </div>
        <div>
          <p className="text-secondary_green font-semibold">Reference:</p>
          <p className="font-medium">{dua.refference_en}</p>
        </div>
      </div>
    </div>
  );
};

export default DuaList;

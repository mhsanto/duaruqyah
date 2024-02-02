import { DuaListProps } from "@/app/type";
import Image from "next/image";

const DuaList = ({ dua }: DuaListProps) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-4 bg-white rounded-lg px-4 py-3">
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
          <p className="w-full text-right text-3xl leading-10">{dua.dua_arabic}</p>
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

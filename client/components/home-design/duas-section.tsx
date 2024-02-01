import Image from "next/image";

const DuasSection = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between w-full my-2 bg-thirdColor p-3 rounded-xl">
        <div className="flex gap-2">
          <Image
            src="/assets/icons/user.svg"
            width={40}
            height={40}
            alt="dua"
          />
          <div className="">
            <h3 className="text-sm text-semibold">Introduction to Dua</h3>
            <p className="text-xs text-gray-500">Subcategory:11</p>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <span>15</span>
          <span className="text-xs text-gray-500">duas</span>
        </div>
      </div>
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

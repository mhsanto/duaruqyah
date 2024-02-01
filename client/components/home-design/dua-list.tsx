import Image from "next/image";

const DuaList = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="bg-white py-2 px-3 rounded-lg">
        <span className="text-secondary_green font-semibold">Section</span>{" "}
        Title of dua
      </p>

      <div className="flex flex-col gap-4 bg-white rounded-lg px-4 py-3">
        <div className=" flex items-center gap-7">
          <Image
            src="/assets/icons/title-logo.svg"
            width={30}
            height={30}
            alt="title-logo"
          />
          <ol className="list-decimal">
            <li className="text-secondary_green font-semibold">Title of dua</li>
          </ol>
        </div>
        <p>
          Prophet (ﷺ) used to say after every compulsory prayer, The servant
          will ask his Lord for all of his religiously and worldly needs,
          because the treasure of all things is in the hands of Allah. Allah
          says (interpretation of the meaning): “And there is not a thing but
          that with Us are its depositories, and We do not send it down except
          according to a known measure.” (Sura Al-Hijr 15:21) No one can
          withhold what Allah gives; And, no one can give what he resists.
        </p>
        <div>
          <p className="text-secondary_green font-semibold">Reference:</p>
          <p>Bukhari:844</p>
        </div>
      </div>
    </div>
  );
};

export default DuaList;

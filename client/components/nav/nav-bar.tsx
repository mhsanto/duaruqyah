import UserAvatar from "../avatar/user-avatar";
import SearchBar from "../search/search-bar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <nav className=" text-black px-10 w-full h-[4rem] flex justify-between items-center mt-4 ">
      <h1 className={`text-2xl font-semibold ${poppins.className}`}>Dua Page</h1>
      <div className="flex w-[700px] justify-between items-center">
        <SearchBar />
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;

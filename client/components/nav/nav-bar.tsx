import UserAvatar from "../avatar/user-avatar";
import SearchBar from "../search/search-bar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <nav className="fixed right-0 left-0 h-[4rem] flex justify-center w-[90rem] pl-20 mx-auto items-center mt-4 ">
      <header className="flex justify-between w-full ">
        <h1 className={`text-2xl font-semibold ${poppins.className}`}>
          Dua Page
        </h1>
        <div className="flex w-[700px] justify-between items-center">
          <SearchBar />
          <UserAvatar />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;

import Navbar from "@/components/nav/nav-bar";
import LeftSidebar from "@/components/sidebar/leftside-bar";
import RightSidebar from "@/components/sidebar/rightside-bar";

import React from "react";
const LayoutDesign = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" background-light850_dark100 relative">
      <Navbar />
      <div className="flex justify-between relative">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max:md:pb-14 sm:px-14 max-w-full overflow-x-hidden">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default LayoutDesign;

import CategoriesSection from "@/components/home-design/category-section";
import Navbar from "@/components/nav/nav-bar";
import LeftSidebar from "@/components/sidebar/leftside-bar";
import RightSidebar from "@/components/sidebar/rightside-bar";

import React from "react";
const LayoutDesign = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-primaryColor relative w-full">
      <Navbar />
      <div className="flex justify-between relative">
        <LeftSidebar />

        <section className="relative flex min-h-screen flex-1 flex-col  pt-24  max-w-full overflow-x-hidden z-10">
          <div className="pl-[3rem] w-full max-w-[1160px]">
          <div className="flex gap-4">
            <CategoriesSection />
            {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default LayoutDesign;

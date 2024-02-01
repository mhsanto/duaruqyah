"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShowIcon from "../shared/show-icon";
const LeftSidebar = () => {
  const NavContent = () => {
    const pathname = usePathname();
    return (
      <section className="flex flex-col gap-4 w-full items-center h-full">
        {sidebarLinks?.map((link: any) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.id}
              href={link.path}
              className={cn(
                " flex items-center w-fit shadow-none  hover:ring-2 rounded-full cursor-pointer "
              )}
            >
              <ShowIcon icon={link.icon} />
            </Link>
          );
        })}
      </section>
    );
  };
  return (
    <div className="sticky left-7 top-0 flex flex-col justify-between bottom-0 max-h-[95vh] w-fit items-center">
      <div className=" flex flex-col h-full items-center w-full justify-between gap-4 py-4 relative top-5 bg-white rounded-3xl">
        <Image
          src="/assets/icons/logo.svg"
          width={70}
          height={70}
          alt="logo"
          className="w-[4.5625rem]"
        />

        <div>
          <NavContent />
        </div>
        <div className="bg-secondary_green p-2 rounded-xl ">
          <Image
            src="/assets/icons/support.svg"
            width={25}
            height={25}
            alt="support"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcMenu } from "react-icons/fc";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import PcMenu from "./PcMene";

const Header = () => {
  return (
    <div className="w-full bg-[#f2e5d5] py-[6px] sm:py-0 shadow-sm">
      <div className="px-4 flex justify-between items-center md:max-w-[768px] mx-auto">
        <h1>
          <Link href={"/"}>
            <Image
              src="/img/icon_resize.png"
              alt="logo"
              width={60}
              height={60}
              className=" opacity-60"
            />
          </Link>
        </h1>

        <Sheet>
          <SheetTrigger>
            <div className="text-[32px] sm:hidden">
              <FcMenu />
            </div>
          </SheetTrigger>
          <SheetContent className=" bg-white/95">
            <SheetHeader>
              <nav>
                <ul>
                  <Link href={"/about"}>
                    <li className="hover:bg-gray-300 hover:transition leading-[72px] transition duration-300">
                      About me
                    </li>
                  </Link>

                  <Link href={"/skill"}>
                    <li className="hover:bg-gray-300 hover:transition leading-[72px] transition duration-300">
                      Skill
                    </li>
                  </Link>

                  <Link href={"/works"}>
                    <li className="hover:bg-gray-300 hover:transition leading-[72px] transition duration-300">
                      Works
                    </li>
                  </Link>

                  <Link href={"/contact"}>
                    <li className="hover:bg-gray-300 hover:transition leading-[72px] transition duration-300">
                      Contact
                    </li>
                  </Link>
                </ul>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="hidden sm:block">
          <PcMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;

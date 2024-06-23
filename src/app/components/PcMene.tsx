import React from "react";
import Link from "next/link";

const PcMenu = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between cursor-pointer">
        <Link href={"/about"}>
          <li className="w-[100px] text-center hover:bg-white/80 hover:transition leading-[72px] transition duration-300">
            About me
          </li>
        </Link>

        <Link href={"/skill"}>
          <li className="w-[100px] text-center hover:bg-white/80 hover:transition leading-[72px] transition duration-300">
            Skill
          </li>
        </Link>

        <Link href={"/works"}>
          <li className="w-[100px] text-center hover:bg-white/80 hover:transition leading-[72px] transition duration-300">
            Works
          </li>
        </Link>

        <Link href={"/contact"}>
          <li className="w-[100px] text-center hover:bg-white/80 hover:transition leading-[72px] transition duration-300">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default PcMenu;

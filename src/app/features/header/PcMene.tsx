import Link from "next/link";
import { menus } from "@/list/headerMenu";

const PcMenu = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between cursor-pointer">
        {menus.map((menu) => {
          return (
            <Link href={menu.link} key={menu.id}>
              <li className="w-[100px] text-center hover:bg-white/80 hover:transition leading-[72px] transition duration-300">
                {menu.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default PcMenu;

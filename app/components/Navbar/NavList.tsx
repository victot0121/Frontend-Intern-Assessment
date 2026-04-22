import Link from "next/link";
import { NAV_ITEMS } from "./nav.data";

const NavList = () => {
  return (
    <>
      {NAV_ITEMS.map((item: any) => (
        <Link
          key={item.label}
          href={"#"}
          // Changed to border-b-4 (standard) and added h-full/pb to ensure it sits at the bottom
          className="text-[#151515] hover:text-pink-500"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default NavList
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "./nav.data";
import logo from "../../assets/9.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="md:hidden relative">
      {/* Mobile Navigation */}
      <div className="flex items-center justify-between h-16">
        <Image src={logo} alt="Logo" width={70} height={70} className="pl-2" />

        <GiHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          className="pr-2 text-3xl cursor-pointer"
        />
      </div>

      {isOpen && (
        <nav className="w-full flex flex-col pt-5 items-center justify-center border-t border-[#DDD0DA] py-4">
          <div className="flex flex-col pt-5 items-center gap-7  text-sm text-gray-700 absolute top-16 left-0 w-full bg-white z-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-2 pb-3 border-b-2 border-transparent transition"
                style={{
                  color: hovered === item.label ? "#571244" : undefined,
                  borderBottom:
                    hovered === item.label
                      ? "2px solid #571244"
                      : "2px solid transparent",
                }}
              >
                {item.label}

                {item.dropdown && hovered === item.label && (
                  <RiArrowDropDownLine className="text-xl transition-all" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavMobile;

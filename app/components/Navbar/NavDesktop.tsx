"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../assets/9.png";
import miniButton from "../../assets/MiniButton.svg";
import { NAV_ITEMS } from "./nav.data";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavDesktop() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="hidden md:flex flex-col items-center justify-between ">
      {/* Logo */}
      <div className="w-full flex justify-around items-center pt-1 border border-none  border-b-[#DDD0DA]">
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={150} />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="cursor-pointer text-white flex items-center gap-2 bg-[#571244] px-4 py-2 rounded-md text-sm hover:bg-[#571245] transition">
            <div className="w-5 h-5  bg-gray-100 rounded-full">
              {" "}
              <Image src={miniButton} alt="Logo" width={150} height={150} />
            </div>
            Account
          </button>

          <button className="bg-[#EF4353] cursor-pointer text-white px-5 py-2 rounded-md text-sm hover:bg-red-700 transition">
            Take Assessment
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full flex items-center justify-center border-t border-[#DDD0DA] py-4">
        <div className="flex items-center gap-7  text-sm text-gray-700">
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
    </div>
  );
}

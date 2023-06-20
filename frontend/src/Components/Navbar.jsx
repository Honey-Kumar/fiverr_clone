import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHamburger, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [theme, settheme] = useState("transparent text-white-300 ");
  const [visibility, setvisibility] = useState("hidden");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        settheme("bg-white text-black");
      } else {
        settheme("transparent text-white ");
      }

      if (window.screenY > 160) {
        setvisibility("visible");
      } else {
        setvisibility("hidden");
      }
    });
  }, []);
  const submenu = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Photography",
    "Business",
    "AI Services",
  ];
  return (
    <>
      <div
        className={`w-full flex flex-col p-4 items-center ${theme} fixed top-0 left-0 right-0 z-30`}
      >
        <div className="w-full flex pb-3 items-center">
          <div className="w-2/4 flex gap-3 items-center">
            <div>
              <button class="relative group">
                <div class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                  <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                    <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                    <div class="bg-white h-[1px] rounded"></div>
                    <div class="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
                  </div>
                </div>
              </button>
            </div>
            <Link href={"/"}>
              <h1 className="text-4xl font-bold">fiverr</h1>
              <span className="h-2 w-2 rounded-full bg-green-700 flex "></span>
            </Link>
            <div className={`flex item-center ${visibility}  w-full`}>
              <input
                className="w-[60%] border p-1 rounded-tl-md rounded-bl-md outline-0 text-black"
                type="text"
                placeholder="What Services you wanted ?"
              />
              <button className="p-4 rounded-tr-md rounded-br-md bg-slate-800">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="w-2/4 pr-5">
            <ul className="flex justify-end items-center gap-4 text-l font-bold">
              <li className="hover:text-green-500 text-blue-600">
                Fiverr Business
              </li>
              <li className="hover:text-green-500">Explore</li>
              <li className="hover:text-green-500">Become a Seller</li>
              <li className="hover:text-green-500">Sign in</li>
              <li className="hover:text-green-500">
                <button className="hover:bg-green-500 hover:text-white pl-4 pr-4 pt-2 pb-2 border rounded-sm">
                  join
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="border p-3">
          <ul className="flex gap-10">
            {submenu.map((e) => (
              <li className="text-l">{e}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const HeroBanner = () => {
  const router = useRouter();
  let count = 1;
  let [image, setimage] = useState(count);
  useEffect(() => {
    let inetrval = setInterval(() => {
      setimage(image > 6 ? 1 : image++);
    }, 3000);
    return () => clearInterval(inetrval);
  }, [image]);
  return (
    <div className="h-[800px] max-sm:h-[900px] w-screen relative bg-cover">
      <div>
        <Image
          fill
          className="opacity-98 bg-cover w-full"
          src={`/bg-hero${image}.webp`}
          alt="hero-image"
        />
      </div>
      <div className="absolute top-[40%] left-4 w-[60%] text-white text-start flex flex-col gap-4 flex-wrap">
        <p className="text-4xl max-sm:text-2xl font-bold w-[60%]">
          Find the right <i>freelance service,</i> right away
        </p>
        <div className="flex item-center">
          <input
            className="w-[60%] p-3 rounded-tl-md rounded-bl-md outline-0 text-black"
            type="text"
            placeholder="Search for any Services....."
          />
          <button className="p-4 rounded-tr-md rounded-br-md bg-green-500">
            <FaSearch />
          </button>
        </div>
        <ul className="flex gap-3 flex-wrap items-center font-bold">
          Popular :
          <li className="border rounded-full p-1 hover:bg-white hover:text-black">
            Web Design
          </li>
          <li className="border rounded-full p-1 hover:bg-white hover:text-black">
            Wordpress
          </li>
          <li className="border rounded-full p-1 hover:bg-white hover:text-black">
            Logo Design
          </li>
          <li className="border rounded-full p-1 hover:bg-white hover:text-black">
            AI Servies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroBanner;

import Link from "next/link";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const JoinFiverr = () => {
  const services = [
    {
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_350,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png",
      title: "Start an online business and work from home",
      des: "A complete guide to starting a small business online",
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_350,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png",
      title: "Digital marketing made easy",
      des: "A practical guide to understand what is digital marketing",
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_350,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png",
      title:
        "How to design a logo: 12 steps to creating a business logo from scratch",
      des: "A practical guide to learn how to design a business logo, step-by-step",
    },
  ];
  return (
    <>
      <div className="w-full p-10 pt-15 flex flex-col flex-wrap justify-between">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold max-sm:text-xl">
            Guides to help you grow
          </h2>
          <span>
            <Link href={"#"} className="flex gap-4 text-blue-600 items-center">
              See more <FaChevronCircleRight />
            </Link>
          </span>
        </div>
        <div className="flex flex-wrap justify-between pt-8">
          {services.map(({ image, title, des, key }) => (
            <div key={key} className="w-[300px]">
              <div>
                <img src={image} alt={`services${key}`} />
              </div>
              <div className="p-2">
                <h6 className="text-xl font-bold pb-2">{title}</h6>
                <p className="text-l">{des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
    Join section
    */}

      <div className="w-full max-sm:flex-col max-sm:justify-center flex relative pb-12  mt-15">
        <div className="max-sm:flex-col">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608134/bg-signup-1160-x2.png"
            alt="Join fiverr"
          />
        </div>
        <div className="w-2/4 max-sm:w-full flex flex-col gap-8 pr-4 pl-6 pb-5 absolute top-2/4 max-sm:top-0 text-white left-0">
          <h2 className="text-4xl max-sm:text-2xl font-bold">
            Suddenly it's all so <i>doable.</i>
          </h2>
          <button className="pl-5 pr-5 pt-2 pb-2 max-sm:w-40 max-sm:pt-1 max-sm:pb-1 bg-green-500 hover:bg-green-600 rounded-lg font-bold max-sm:font-none">
            Join Fiverr
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinFiverr;

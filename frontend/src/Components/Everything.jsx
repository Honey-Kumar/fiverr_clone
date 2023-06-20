import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const Everything = () => {
  const every = [
    {
      title: "Stick to your budget",
      subtitle:
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Get quality work done quickly",
      subtitle:
        "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
    },
    {
      title: "Pay when you're happy",
      subtitle:
        "Upfront quotes mean no surprises. Payments only get released when you approve.",
    },
    {
      title: "Count on 24/7 support",
      subtitle:
        "Our round-the-clock support team is available to help anytime, anywhere.",
    },
  ];
  return (
    <div className="w-full flex bg-green-100 p-10 mt-20">
      <div className="w-2/4 pr-5">
        <h2 className="text-4xl font-bold">The best part? Everything.</h2>
        <ul className="p-6 flex flex-col gap-4">
          {every.map(({ title, subtitle, key }) => (
            <li className="flex flex-col">
              <h6 className="flex gap-2 items-center text-2xl font-bold pb-3">
                <span>
                  <BsCheck2Circle size={20} />
                </span>
                {title}
              </h6>
              <p className="text-xl">{subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/4 flex justify-center p-8">
        <img src="/videoImage.png" alt="Best services" />
      </div>
    </div>
  );
};

export default Everything;

import React from "react";

const Services = () => {
  const services = [
    {
      image: "/service-1.svg",
      text: "Graphics & Design",
    },
    {
      image: "/service-2.svg",
      text: "Digital Marketing",
    },
    {
      image: "/service-3.svg",
      text: "Writing & Translation",
    },
    {
      image: "/service-4.svg",
      text: "Video & Animation",
    },
    {
      image: "/service-5.svg",
      text: "Music & Audio",
    },
    {
      image: "/service-6.svg",
      text: "Programming & Tech",
    },
    {
      image: "/service-7.svg",
      text: "Business",
    },
    {
      image: "/service-8.svg",
      text: "LifeStyle",
    },
    {
      image: "/service-9.svg",
      text: "Data",
    },
    {
      image: "/service-10.svg",
      text: "Photography",
    },
  ];
  return (
    <div className="w-full p-6 mt-16">
      <h2 className="text-4xl max-sm:text-2xl font-bold pl-6 ">You need it, we've got it</h2>
      <ul className="grid grid-cols-5 max-sm:grid-cols-3 place-items-center pt-12">
        {services.map(({ image, text, key }) => (
          <li className="flex flex-col items-center gap-3 pb-10">
            <img
              src={image}
              alt={text}
              className="w-16 h-16 border-b-2 hover:border-b-green-500 pb-3"
            />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;

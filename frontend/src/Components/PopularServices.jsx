import Image from "next/image";
import React from "react";

const PopularServices = () => {
  const services = [
    {
      name: "Translation",
      text: "Go Global",
      image: "/service7.jpeg",
    },
    {
      name: "Data Entry",
      text: "Learn Your Business",
      image: "/service8.jpeg",
    },
    {
      name: "Book Covers",
      text: "Showcase Your Story",
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
    },
    {
      name: "AI Artist",
      text: "Add Talent to AI",
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
    },
    {
      name: "Logo Design",
      text: "Build Your Brand",
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
    },
    {
      name: "Wordpress",
      text: "Customize Your Site",
      image: "/service1.png",
    },
    {
      name: "Social Media",
      text: "Reach More Customer",
      image: "/service4.jpeg",
    },
    {
      name: "Voice Over",
      text: "Share Your Message",
      image: "/service2.jpeg",
    },
    {
      name: "Video Explainer",
      text: "Grow Your Audience",
      image:
        "https://images.pexels.com/photos/6147014/pexels-photo-6147014.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "SEO",
      text: "Unlock Growth Online",
      image: "/service5.jpeg",
    },
    {
      name: "IIlustration",
      text: "Color Your Dreams",
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl max-sm:text-2xl font-bold pl-6">Popular Services</h1>
      <ul className="flex max-sm:flex-col flex-wrap gap-5 items-center justify-evenly pt-8 text-white ">
        {services.map(({ name, text, image, key }) => (
          <li
            key={key}
            className="w-[18rem] rounded-md h-[22rem] bg-slate-500 relative cursor-pointer "
          >
            <img
              src={image}
              className="rounded-md bg-cover w-full h-full hover:opacity-50"
            />
            <span className="absolute top-4 left-0">
              <small className="text-md pl-4 ">{text}</small>
              <h4 className="text-xl font-bold pl-4">{name}</h4>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularServices;

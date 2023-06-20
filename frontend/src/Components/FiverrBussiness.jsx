import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FiverrBussiness = () => {
  const list = [
    "Talent matching",
    "Dedicated account management",
    "Team collaboration tools",
    "Business payment solutions",
  ];
  const sliderinfo = [
    {
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
      founder: "Kay Kim, Co-Founder",
      des: "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",
      founder: "Caitlin Tormey, Chief Commercial Officer",
      des: "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
      founder: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      des: "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg",
      founder: "Tim and Dan Joo, Co-Founders",
      des: "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  return (
    <>
      <div className="w-full bg-blue-900 flex pt-20 pb-20 pl-6 pr-6 text-white">
        <div className="w-2/4 flex flex-col gap-6 pr-4">
          <h2 className="text-4xl font-bold">
            fiverr business
            <span className="w-24 h-24 font-bold text-green-600">.</span>
            <sup className="text-sm bg-purple-700 pl-2 pr-2 rounded-lg">
              NEW
            </sup>
          </h2>
          <span className="text-2xl font-bold">
            A solution built for business
          </span>
          <p className="text-xl">
            Upgrade to a curated experience to access vetted talent and
            exclusive tools
          </p>
          <ul>
            {list.map((e, key) => (
              <li key={key} className="flex items-center gap-3 text-xl">
                <BsCheck2Circle size={20} />
                {e}
              </li>
            ))}
          </ul>
          <button className="pl-5 pr-5 pt-2 pb-2 bg-green-500 hover:bg-green-600 rounded-lg font-bold">
            Explore Fiverr Business
          </button>
        </div>
        <div className="w-2/4">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624759/business-desktop-585-x2.png"
            alt="fiverr business"
          />
        </div>
      </div>

      {/* section */}
      <div className="w-full mt-20 mb-20">
        <ul className="flex flex-wrap gap-4">
          {sliderinfo.map(({ image, founder, des, key }) => (
            <li key={key} className="flex p-4">
              <div className="w-2/4">
                <img src={image} alt="reviews" className="rounded-lg" />
              </div>
              <div className="w-2/4 p-4 flex flex-col justify-center">
                <h2 className="text-2xl pb-4">{founder}</h2>
                <i className="text-xl font-bold">"{des}"</i>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* image section */}
      <div className="w-full flex bg-blue-600 p-8 relative">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1112,dpr_2.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png"
          alt="fiverr services"
          className="bg-cover w-full h-full p-4"
        />
        <div className="w-2/4 flex flex-col gap-6 pr-4 pl-6 pb-5 absolute top-10 text-white left-0">
          <h2 className="text-4xl font-bold">
            fiverr Logo maker
            <span className="w-24 h-24 font-bold text-green-600">.</span>
            <sup className="text-sm bg-purple-700 pl-2 pr-2 rounded-lg">
              NEW
            </sup>
          </h2>
          <span className="text-2xl font-bold">
            Make an incredible logo <i>in Seconds</i>
          </span>
          <p className="text-xl">
            Pre-designed by top talent. Just add your touch.
          </p>
          <ul></ul>
          <button className="pl-5 pr-5 pt-2 pb-2 bg-green-500 hover:bg-green-600 rounded-lg font-bold">
            Try Fiverr Logo Maker
          </button>
        </div>
      </div>
    </>
  );
};

export default FiverrBussiness;

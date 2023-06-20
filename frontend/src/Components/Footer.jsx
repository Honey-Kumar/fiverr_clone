import Link from "next/link";
import React from "react";
import {
  FaCopyright,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
  FaGlobe,
  FaRupeeSign,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
  const footer = [
    {
      title: "Categories",
      list: [
        { name: " Graphics & Design", link: "#" },
        { name: " Digital Marketing", link: "#" },
        { name: " Writing & Translation", link: "#" },
        { name: " Video & Animation", link: "#" },
        { name: " Music & Audio", link: "#" },
        { name: " Programming & Tech", link: "#" },
        { name: " Data", link: "#" },
        { name: " Business", link: "#" },
        { name: " Lifestyle", link: "#" },
        { name: " Photography", link: "#" },
        { name: " End-to-End Projects", link: "#" },
        { name: " Sitemap", link: "#" },
      ],
    },
    {
      title: "About",
      list: [
        { name: "Careers", link: "#" },
        { name: "Press & News", link: "#" },
        { name: "Partnerships", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
        { name: "Intellectual Property Claims", link: "#" },
        { name: "Investor Relations", link: "#" },
      ],
    },
    {
      title: "Support",
      list: [
        { name: "Help & Support", link: "#" },
        { name: "Trust & Safety", link: "#" },
        { name: "Selling on Fiverr", link: "#" },
        { name: "Buying on Fiverr", link: "#" },
        { name: "Fiverr Guides", link: "#" },
      ],
    },
    {
      title: "Community",
      list: [
        { name: "Customer Success Stories", link: "#" },
        { name: "Community Hub", link: "#" },
        { name: "Forum", link: "#" },
        { name: "Events", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Influencers", link: "#" },
        { name: "Affiliates", link: "#" },
        { name: "Podcast", link: "#" },
        { name: "Invite a Friend", link: "#" },
        { name: "Become a Seller", link: "#" },
        { name: "Community Standards", link: "#" },
      ],
    },
    {
      title: "More on Fiverr",
      list: [
        { name: "Fiverr Enterprise", link: "#" },
        { name: "Fiverr Business", link: "#" },
        { name: "Fiverr Pro", link: "#" },
        { name: "Fiverr Logo Maker", link: "#" },
        { name: "Get Inspired", link: "#" },
        { name: "Fiverr Select", link: "#" },
        { name: "ClearVoice", link: "#" },
        { name: "Content Marketing", link: "#" },
        { name: "Fiverr Workspace", link: "#" },
        { name: "Invoice Software", link: "#" },
        { name: "Learn", link: "#" },
        { name: "Online Courses", link: "#" },
        { name: "Working Not Working", link: "#" },
      ],
    },
  ];

  const social = [
    {
      icon: <FaTwitter size={20} />,
      name: "Twitter ",
      link: "#",
    },
    {
      icon: <FaFacebook size={20} />,
      name: "Facebook ",
      link: "#",
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn ",
      link: "#",
    },
    {
      icon: <FaPinterest size={20} />,
      name: "Pinterest ",
      link: "#",
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram ",
      link: "#",
    },
    {
      icon: <FaGlobe size={20} />,
      name: "English ",
      link: "#",
    },
    {
      icon: <FaRupeeSign size={20} />,
      name: "Rupees ",
      link: "#",
    },
    {
      icon: <AiOutlineUser size={20} />,
      name: " User ",
      link: "#",
    },
  ];
  return (
    <div className="w-screen p-8 bg-slate-200">
      <ul className="flex flex-wrap max-sm:flex-col justify-between pb-4">
        {footer.map(({ title, key, list }) => (
          <div key={key}>
            <h2 className="text-2xl font-bold pb-5">{title}</h2>
            <li className="pb-12">
              {list.map(({ name, link, key }) => (
                <Link href={link} key={key} className="block pb-2">
                  {name}
                </Link>
              ))}
            </li>
          </div>
        ))}
      </ul>
      <hr className="bg-green-500 h-1" />
      <div className="w-full flex max-sm:flex-col items-center pt-4">
        <div className="flex max-sm:flex-col gap-3 items-center text-l w-2/4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">fiverr</h1>
            <span className="h-2 w-2 rounded-full bg-green-700 flex "></span>
          </div>
          <FaCopyright size={20} />
          Fiver International Limited 2023
        </div>
        <div className="flex w-2/4 justify-around p-4">
          {social.map(({ icon, link, name, key }) => (
            <Link
              href={link}
              key={key}
              className="hover:bg-slate-400 p-2 rounded-full"
            >
              {icon} <span>{name === "English" ? name : ""}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

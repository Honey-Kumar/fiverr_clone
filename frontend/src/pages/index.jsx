import Companies from "@/Components/Companies";
import Everything from "@/Components/Everything";
import FiverrBussiness from "@/Components/FiverrBussiness";
import Footer from "@/Components/Footer";
import HeroBanner from "@/Components/HeroBanner";
import JoinFiverr from "@/Components/JoinFiverr";
import Navbar from "@/Components/Navbar";
import PopularServices from "@/Components/PopularServices";
import Services from "@/Components/Services";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBussiness />
      <JoinFiverr />
      <Footer />
    </div>
  );
};

export default index;

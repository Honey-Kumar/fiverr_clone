import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="flex h-[80px] max-sm:h-[25px] gap-10 max-sm:gap-4 p-12 items-center justify-center">
      <Image width={100} height={50} src="/trusted1.png" alt="companies" />
      <Image width={100} height={50} src="/trusted2.png" alt="companies" />
      <Image width={100} height={50} src="/trusted3.png" alt="companies" />
      <Image width={100} height={50} src="/trusted4.png" alt="companies" />
      <Image width={100} height={50} src="/trusted5.png" alt="companies" />
    </div>
  );
};

export default Companies;

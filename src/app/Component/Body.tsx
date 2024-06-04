import Image from "next/image";
import React from "react";
import { Birthstone_Bounce, Montserrat, Pacifico } from "next/font/google";
import { relative } from "path";
const monty = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Body = () => {
  return (<div>


    <div className="flex nice justify-center item-center mt-[90px]">
      <div
        className={`${pacifico.className} text-[160px] relative left-[65px] mt-[50px] text-[#871F78]`}
      >
        Snack
      </div>
      <span
        className={`text-[50px] relative top-[180px] ${monty.className}  mt-[50px] text-black right-[80px]`}
      >
        bowls
      </span>
      <Image
        src="/food 6.png"
        alt="food-img"
        width={600}
        height={600}
        className="relative left-[30px]  mt-[50px]"
      />
    </div>
      <span className="block w-[500px] relative top-[-350px] left-[160px] text-white">
        Indulge in an unforgettable dining experience at Ores Kitchen, your
        ultimate destination for delectable meals and impeccable service.
      </span>
      <button className="bg-[#800020] relative top-[-300px] left-[160px] w-[470px] text-white py-2 px-4 rounded-[25px] hover:bg-[#66001a]">
      Order Now
    </button>
  </div>
  );
};

export default Body;

import Image from "next/image";
import React from "react";
import { relative } from "path";
import { Roboto, Pacifico } from "next/font/google";

const robo = Roboto({
  subsets: ["latin"],
  weight: "400",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Bodytwo = () => {
  return (
    <div className="mt-[-115px] bg-[#FCFCFD] w-full h-[700px]">
      <div className="flex justify-between items-center h-full">
        <Image
          src="/food2.png"
          width={500}
          height={500}
          className="absolute left-[207px] mt-[90px] mb-[200px]"
          alt="food-image"
        />
        <div className="relative left-[760px] top-[-150px] text-left max-w-[50%]">
          <span className={`${robo.className} text-[50px]`}>
            Shop all types of food
            <span className={`${pacifico.className} block text-[#871F78]`}>
              Korean Dishes Too!
            </span>
          </span>
          <span className="block text-[16px] font-normal w-[500px] mt-2">
            At the heart of Korean cuisine lies the concept of "banchan," a
            collection of small side dishes that accompany the main meal. These
            banchan can range from fermented vegetables like kimchi to savory
            meat dishes and crisp salads. They are often served in a shared
            setting, encouraging communal dining and conversation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bodytwo;
